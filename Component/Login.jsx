import LeftPage from "./LeftPage";
import { Link } from "react-router-dom";

const Login = () => {
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
              <img
                class="w-1/3 mx-auto"
                src="/public/Logo.png"
              />
            </div>
            <div class="head-login flex justify-evenly my-8 text-gray-400 font-semibold md:hidden">
              <div class="nav-login">
                <Link to={"/createaccount"} class="hover:text-sky-400">
                  Create Account
                </Link>
              </div>
              <div>
                <Link to={"/login"} class="text-sky-400">
                  Login
                </Link>
              </div>
            </div>

            <div class="text-center text-blue-950 hidden md:block">
              <h1 class="font-semibold text-2xl mb-5">Login</h1>
            </div>

            <div class="m-auto flex-1 w-4/5 mt-10">
              <label class="font-semibold mx-3" for="input-email">
                Email address
              </label>
              <br />
              <input
                class="border-2 p-2 rounded-lg w-full mb-3"
                type="email"
                id="input-email"
                placeholder="siberianwhisky@gmail.com"
                required
              />
              <br />
              <label class="font-semibold mx-3" for="input-password">
                Password
              </label>
              <br />
              <input
                class="border-2 p-2 rounded-lg w-full"
                type="password"
                id="input-password"
                placeholder="************"
                required
              />
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
