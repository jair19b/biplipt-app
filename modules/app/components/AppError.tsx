import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updatePage } from "@/redux/slices/appSlice";
import HtmlHead from "./HtmlHead";

const AppError = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(
         updatePage({
            title: "Internal Error",
            keywords: "Biplipt",
            description: "Internal Error 500"
         })
      );
   }, []);

   return (
      <React.Fragment>
         <HtmlHead />
         <div className="container w-full h-screen flex justify-center lg:items-center flex-nowrap">
            <div className="w-full lg:w-5/12 text-center">
               <img src="/static/img/Logotipo.svg" alt="Biplipt" className="w-28 mx-auto" />
               <h1 className="text-3xl text-bold mt-8">Internal Error</h1>
               <p className="text-justify my-5 w-full mx-auto">
                  We are experiencing problems connecting to our system. Please check back later, we apologize for the inconvenience. Biplipt is
                  working to fix it as soon as possible.
               </p>
               <p className="text-center my-8 text-xs">Biplipt &copy; - {new Date().getFullYear()} </p>
            </div>
         </div>
      </React.Fragment>
   );
};

export default AppError;
