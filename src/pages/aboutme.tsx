import React, { FunctionComponent, useState } from "react";
import { navigate } from "gatsby";
import { Layout } from "../components/layout";

export const NotFound: FunctionComponent = () => {
  return (
    <Layout>
      <div className="relative bg-white mt-2">
        <div className="hidden lg:block lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/contact.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
                More information soon!
              </h2>              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
