import { useState } from "react";
import LeftPage from "./LeftPage";
import { Link } from "react-router-dom";
import LoginRegisterTab from "./LoginRegisterTab";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import zIndex from "@mui/material/styles/zIndex";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex">
      <LeftPage />
      <div class="flex-1 max-md:bg-none md:bg-cover bg-theme-right">
        <form
          action="https://youtu.be/4R7vRFGJr3k?si=HjiINXc4xAPE_v8b"
          class="flex flex-col h-dvh md:flex-none"
        >
          <div class="my-5 md:mt-auto flex-1 md:flex-none">
            <div class="md:hidden">
              <img class="w-1/3 mx-auto" src="/public/Logo.png" />
            </div>

            <LoginRegisterTab currentUrl={"/login"} />

            <div class="text-center text-blue-950 hidden md:block">
              <h1 class="font-semibold text-2xl mb-5">Login</h1>
            </div>

            <div class="m-auto flex-1 w-4/5 mt-10">
              <label class="font-semibold mx-3" for="input-email">
                Email address
              </label>
              <br />
              {/* <input
                class="border-2 p-2 rounded-lg w-full mb-3"
                type="email"
                id="input-email"
                placeholder="siberianwhisky@gmail.com"
                required
              />
              <Alert severity="error">Please entry your email.</Alert> */}
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
                class="border-2 p-2 rounded-lg w-full"
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
                helperText={"Please entry your password"}
                sx={{ zIndex: 1, backgroundColor: 'white' }}
              />
              {/* <Alert severity="error">Please entry your password.</Alert> */}
              <br />
              <Link
                to={"/forgetpassword"}
                class="forget-password text-sky-400 hover:text-[#4ccee8] font-semibold flex justify-end mt-3"
              >
                Forget Password?
              </Link>
              <br />
            </div>
          </div>
          <div class="mb-10 md:mb-auto">
            <div>
              <button
                type="submit"
                class="w-4/5 block m-auto p-3 rounded-xl hover:bg-[#39bad4] bg-[#66d2e8] font-bold text-md font-inter text-white text-center"
              >
                Login
              </button>
            </div>
            <div class="hidden md:block mt-10 mx-10 text-sm text-blue-950 text-center">
              <p>
                Not a registered user yet?
                <Link to={"/createaccount"} class="font-semibold ml-1">
                  Sign up now!
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
