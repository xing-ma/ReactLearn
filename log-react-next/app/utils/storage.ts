import {AuthUserDto} from '../login/types'

const storagePrefix = 'log_next_';

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  setMine: (user: AuthUserDto) => {
    window.localStorage.setItem(`${storagePrefix}mine`, JSON.stringify(user));
  },
  getMine: (): AuthUserDto => {
    var value = window.localStorage.getItem(`${storagePrefix}mine`);

    return value === null ? null : JSON.parse(value);
  },
  clearLocalStorage(){
    window.localStorage.clear();
  }
};

export default storage;