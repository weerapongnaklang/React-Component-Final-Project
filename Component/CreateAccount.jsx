import LeftPage from "./LeftPage";
import { Link } from "react-router-dom";
import LoginRegisterTab from "./LoginRegisterTab";
import Alert from "@mui/material/Alert";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CreateAccount = () => {
  return (
    <div className="flex">
      <LeftPage />
      <div class="flex-1 max-md:bg-none md:bg-cover bg-theme-right">
        <form
          action="Desktop_login.html"
          class="flex flex-col h-dvh md:flex-none"
        >
          <div class="my-5 md:mt-auto flex-1 md:flex-none">
            <div class="md:hidden">
              <img class="w-1/3 mx-auto" src="/public/Logo.png" />
            </div>

            <LoginRegisterTab currentUrl={"/createaccount"} color="sky-400" />

            <div class="text-center text-blue-950 hidden md:block">
              <h1 class="font-semibold text-2xl mb-5">Create Your Account</h1>
              <p class="text-sm font-thin">Let's have fun with dog</p>
            </div>

            <div class="m-auto flex-1 w-4/5 mt-10">
              <div class="input-login">
                <label class="font-semibold mx-3" for="input-name">
                  Full name
                </label>
                <br />
                {/* <input
                  class="border-2 p-2 rounded-lg w-full mb-1"
                  type="text"
                  id="input-name"
                  placeholder="Jonathan Whiskey"
                  required
                /> */}
                <TextField
                  className=" w-full"
                  error={false}
                  id="input-name"
                  placeholder="Jonathan Whiskey"
                  helperText="Please entry your full name."
                  sx={{ marginBottom: 2 }}
                />
                <br />

                <label class="font-semibold mx-3 " for="input-email">
                  Email address
                </label>
                <br />
                {/* <input
                  class="border-2 p-2 rounded-lg w-full mb-1 "
                  type="email"
                  id="input-email"
                  placeholder="siberianwhisky@gmail.com"
                  required
                /> */}
                <TextField
                  className=" w-full"
                  type="email"
                  error={false}
                  id="input-email"
                  placeholder="Siberainwhiskey@gmail.com"
                  helperText="Please entry your email."
                  sx={{ marginBottom: 2 }}
                />
                <br />
                <label class="font-semibold mx-3" for="input-password">
                  Password
                </label>
                <br />
                {/* <input
                  class="border-2 p-2 rounded-lg w-full mb-1"
                  type="password"
                  id="input-password"
                  placeholder="************"
                  required
                /> */}
                <TextField
                  className=" w-full"
                  type="password"
                  error={false}
                  id="input-password"
                  placeholder="**********"
                  helperText="Please entry your password"
                />
                {/* <Alert severity="error">Please entry your password.</Alert> */}

                <br />
              </div>
            </div>
          </div>
          <div class="mb-10 md:mb-auto">
            <div>
              <button
                type="submit"
                class="w-4/5 block m-auto p-3 rounded-xl bg-[#66d2e8] hover:bg-[#39bad4] font-bold text-md text-white text-center"
              >
                Register
              </button>
            </div>
            <div class="flex-col hidden md:block mt-10 mx-10 text-sm text-blue-950 text-center">
              <p>
                Already have an account?
                <Link to={"/login"} class="font-semibold ml-1">
                  Login here.
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
