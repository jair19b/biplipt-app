export interface AppState {
   name: string;
   live: boolean;
   message: string | null;
   register: boolean;
   social: boolean;
   facebook: boolean;
   google: boolean;
   apple: boolean;
   version: string;
}

export interface PageState {
   title: string;
   keywords: string;
   description: string;
}

export interface Locale {
   name: string;
   locale: string;
}

export interface UserState {
   ssid: string;
   uid: string;
   token: string;
   name: string;
   group: number;
   photo?: string;
}

export interface SystemState {
   app: AppState;
   page: PageState;
   loggedIn: boolean;
   dir: string;
   locale: string;
   user: UserState | null;
   locales: Locale[];
}

export interface LanguageContextI {
   changeLanguage: any;
   locale: string;
   locales: Locale[];
}

export interface AppContextI {
   systemRoot: SystemState;
   systemLoading: boolean;
   systemError: boolean | any;
   systemRefetch: any;
   login: any;
   logout: any;
}
