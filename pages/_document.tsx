import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang="es" dir="ltr">
         <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"></link>
            <link href={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/data/static/icons/bootstrap/bootstrap-icons.css`} rel="stylesheet"></link>
            <link href={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/data/static/icons/fontawesome/style.css`} rel="stylesheet"></link>
            <link href={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/data/static/icons/icomoon2/style.css`} rel="stylesheet"></link>
            <link href={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/data/static/icons/brands/style.css`} rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700;800;900&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
