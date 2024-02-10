import Axios, { AxiosError, AxiosRequestConfig, HttpStatusCode } from 'axios';
import { logout, refreshAccessToken } from './hooks/auth';
import { getApiUrl } from './hooks/url';


const baseUrl = getApiUrl();
export const AXIOS_INSTANCE = Axios.create({ baseURL: baseUrl, withCredentials: true }); // use your own URL here or environment variable
export const AXIOS_AUTH_INSTANCE = Axios.create({ baseURL: baseUrl, withCredentials: true }); // use your own URL here or environment variable

// add a second `options` argument here if you want to pass extra options to each generated query
export const customInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig & { useAuthInstance: boolean },
): Promise<T> => {
    const source = Axios.CancelToken.source();

    // THIS IS A FIX TO MAKE QUERY PARAMS WORK CORRECTLY.
    // SOMETHING IS WRONG WITH THE LIB THAT PARSE OPENAPI YAML
    if (config.params?.query) {
        config.params = config.params.query;
    }

    const oldUrl = new URL(config.url ?? baseUrl);
    const newUrl = new URL(baseUrl);
    newUrl.pathname = oldUrl.pathname
    config.url = newUrl.toString();

    const promise = (options?.useAuthInstance ? AXIOS_AUTH_INSTANCE : AXIOS_INSTANCE)({
        ...config,
        ...options,
        cancelToken: source.token,
    }).then(({ data }) => data);

    (promise as unknown as ({ cancel: () => void })).cancel = () => {
        source.cancel('Query was cancelled');
    };

    return promise;
};

AXIOS_INSTANCE.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AXIOS_INSTANCE.interceptors.response.use(
    (response) => response,
    async (err: AxiosError) => {
        // const originalRequest = error.config as AxiosRequestConfig<unknown> & { _retry: boolean; };
        // console.log('error', error)
        // if (error.response?.status === HttpStatusCode.Forbidden && !originalRequest?._retry) {
        //     originalRequest._retry = true;
        //     await refreshAccessToken();
        //     return AXIOS_INSTANCE(originalRequest);
        // }


        const originalConfig = err.config as AxiosRequestConfig<unknown> & { _retry: boolean; };

        if (err.response) {
            if (err.response.status === HttpStatusCode.Forbidden && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    await refreshAccessToken();
                    return AXIOS_INSTANCE(originalConfig);
                } catch (_error) {
                    await logout()
                    window.location.href = window.location.origin;
                    return Promise.reject(_error);
                }
            }


            return Promise.reject(err);
        }
    }
);

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
