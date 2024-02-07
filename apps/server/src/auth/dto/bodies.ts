import { MaxLength, MinLength } from 'typia/lib/tags';

export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  email: string & MaxLength<64>;
  password: string & MaxLength<64> & MinLength<8>;
}

export interface RefreshBody {
  refresh_token: string;
}
