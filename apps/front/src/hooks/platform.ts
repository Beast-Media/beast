
export const getPlatform = async (): Promise<'web' | 'desktop' | 'phone' | 'tv'> => {

    if (!window.__TAURI__ || !navigator.userAgentData)
        return 'web';

    const isMobile = navigator.userAgentData?.mobile;
    if (isMobile)
        return 'phone'

    

    return 'tv';
}