import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import client from "@/config/apollo";
import LanguageProvider from "@/language/languageContext";
import { store } from "@/redux/store";
import "@/styles/main.min.css";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ApolloProvider client={client}>
         <Provider store={store}>
            <LanguageProvider>
               <Component {...pageProps} />
            </LanguageProvider>
         </Provider>
      </ApolloProvider>
   );
}
