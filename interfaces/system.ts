export interface AppState {
   name: string;
   live: boolean;
   message: string | null;
   register: boolean;
   social: boolean;
   facebook: boolean;
   google: boolean;
   apple: boolean;
   locale: string;
   dir: string;
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
   user: UserState | null;
   locales: Locale[];
}
