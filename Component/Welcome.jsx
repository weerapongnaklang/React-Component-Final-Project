import React from "react";
import LeftPage from "./LeftPage";

const Welcome = () => {
  return (
    <div className="flex">
      <LeftPage />
      {/*Right Page  */}
      <div class="flex-1 w-50 bg-theme-right">
        <div class="flex flex-col h-screen">
          <div class="my-auto">
            <div class="flex justify-center items-center md:hidden">
              <img src="image welcome/logo.png" />
            </div>
            <div class="text-center text-blue-950">
              <h1 class="font-semibold text-2xl mb-5">Welcome</h1>
              <p class="text-sm font-thin">Embark On Your Fitness Journey</p>
              <p class="text-sm font-thin">With Our Track Excercise App!</p>
              <p class="text-sm font-thin">
                Join Now And Let's Get Moving Together.
              </p>
            </div>
            <div class="pt-10">
              <div>
                <a
                  href="Desktop_login.html"
                  class="w-3/5 block m-auto p-3 rounded-xl bg-[#66d2e8] font-bold text-md font-inter text-white text-center"
                >
                  Login
                </a>
              </div>
              <div class="mt-2 pt-3">
                <a
                  href="#"
                  class="w-3/5 rounded-xl m-auto block p-3 bg-gray-300 font-semibold text-md font-inter text-blue-950 text-center"
                >
                  Get Start
                </a>
              </div>
            </div>
            <div class="mt-10 mx-10 text-xs text-center">
              <p>
                By Logging In Or Registering. You Have Agreed To
                <a
                  href="#"
                  onclick="showModal('modal-terms')"
                  class="text-red-600 mr-1 ml-1"
                >
                  The Terms And Conditions
                </a>
                And
                <a
                  href="#"
                  onclick="showModal('modal-policy')"
                  class="text-red-600 ml-1"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
