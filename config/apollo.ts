import { ApolloClient, ApolloLink, concat, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

/** Metodo de enlace con la API de grapahQL con soporte para enviar archivos al backend*/
const linkUpload: ApolloLink = createUploadLink({
   uri: `http://localhost:8000/data/api/`
});

// Manejador del contexto global de la aplicación. Envia mediante headers informacion requerida del sistema
// o del ususuario, como el token de sesión o la confirguracion de idioma de la aplicación
const authMiddleware = new ApolloLink((operation, forward) => {
   operation.setContext(({ headers = {} }) => {
      let token = localStorage.getItem("SSID");
      let lang = localStorage.getItem("locale");

      return {
         headers: {
            ...headers,
            locale: window.navigator.language,
            lang: lang,
            authorization: token,
            "Access-Control-Allow-Origin": "*"
         }
      };
   });

   return forward(operation);
});

/** Cliente de coonexión de apollo con la API GraphQL, este debe incluir el conetxto de la aplicación */
const client = new ApolloClient({
   connectToDevTools: true,
   cache: new InMemoryCache(),
   link: concat(authMiddleware, linkUpload)
});

export default client;
