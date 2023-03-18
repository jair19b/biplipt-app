import React, { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";

interface DefaultpropsType {
   color: string;
   startPosition: number;
   stopDelayMs: number;
   height: number;
   showOnShallow: boolean;
   options: object;
}

const AppProgressBar = (props: DefaultpropsType | any) => {
   let timer: any = null;

   const routeChangeStart = (url: any, { shallow }: any) => {
      if (!shallow || props.showOnShallow) {
         NProgress.set(props.startPosition);
         NProgress.start();
      }
   };

   const routeChangeEnd = (url: any, { shallow }: any) => {
      if (!shallow || props.showOnShallow) {
         clearTimeout(timer);
         timer = setTimeout(() => {
            NProgress.done(true);
         }, props.stopDelayMs);
      }
   };

   useEffect(() => {
      const { options } = props;

      if (options) {
         NProgress.configure(options);
      }

      Router.events.on("routeChangeStart", routeChangeStart);
      Router.events.on("routeChangeComplete", routeChangeEnd);
      Router.events.on("routeChangeError", routeChangeEnd);

      return () => {
         Router.events.off("routeChangeStart", routeChangeStart);
         Router.events.off("routeChangeComplete", routeChangeEnd);
         Router.events.off("routeChangeError", routeChangeEnd);
      };
   }, []);

   return (
      <style jsx global>{`
         #nprogress {
            pointer-events: none;
         }
         #nprogress .bar {
            background: linear-gradient(#0ea5e9, #38bdf8, #38bdf8);
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            width: 100%;
            height: ${props.height}px;
            border-top-right-radius: 100px;
            border-bottom-right-radius: 100px;
         }
         #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${props.color}, 0 0 5px ${props.color};
            opacity: 1;
            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
         }
         #nprogress .spinner {
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
            display: none !important;
         }
         #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;
            border: solid 2px transparent;
            border-top-color: ${props.color};
            border-left-color: ${props.color};
            border-radius: 50%;
            -webkit-animation: nprogresss-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
         }
         .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
         }
         .nprogress-custom-parent #nprogress .spinner,
         .nprogress-custom-parent #nprogress .bar {
            position: absolute;
         }
         @-webkit-keyframes nprogress-spinner {
            0% {
               -webkit-transform: rotate(0deg);
            }
            100% {
               -webkit-transform: rotate(360deg);
            }
         }
         @keyframes nprogress-spinner {
            0% {
               transform: rotate(0deg);
            }
            100% {
               transform: rotate(360deg);
            }
         }
      `}</style>
   );
};

/* Establecer props por defecto */
AppProgressBar.defaultProps = {
   color: "#38bdf8",
   startPosition: 0.3,
   stopDelayMs: 200,
   height: 2,
   showOnShallow: true
};

export default AppProgressBar;
