import React, { useEffect } from "react";
import Head from "next/head";

const AppLoading = () => {
   useEffect(() => {
      document.body.classList.add("pt-0");
   }, []);

   return (
      <React.Fragment>
         <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="keywords" content="Biplipt" />
            <meta name="description" content="Biplipt" />
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
            <meta name="theme-color" content="#ffffff" />
            <title>Biplipt</title>
         </Head>
      </React.Fragment>
   );
};

export default AppLoading;
