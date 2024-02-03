import { MaxLength, MinLength } from 'typia/lib/tags';

export interface LoginBody {
  username: string;
  password: string;
}

export interface RegisterBody {
  username: string & MaxLength<64>;
  password: string & MaxLength<64> & MinLength<8>;
}

export interface RefreshBody {
  refresh_token: string;
}
