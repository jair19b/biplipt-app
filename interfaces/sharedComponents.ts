import { StaticsDataStandar } from "./graphQL";

export interface CustomInputProps {
   type: string;
   name: string;
   placeholder: string;
   value: string;
   id?: string;
   maxLength?: number;
   minLength?: number;
   min?: number;
   max?: number;
   required?: boolean;
   className: string;
   handleChange?: any;
   handleFocus?: any;
   handleInput?: any;
   handleBlur?: any;
   handleKeyDown?: any;
   parentClass?: string;
   iconClass?: string;
   icon?: string;
   error?: {
      error: boolean;
      message: string;
   };
}

interface ListStandarData {
   title: string;
   subtitle: string;
   dns: string;
}

export interface OrderedListProps {
   className: string;
   loading: boolean;
   data: ListStandarData[];
   prefix: string | boolean;
   error?: any;
   columns?: number;
}

export interface StaticListProps {
   className: string;
   loading: boolean;
   data: StaticsDataStandar[] | undefined;
   prefix: string;
   error?: any;
   columns?: number;
}
