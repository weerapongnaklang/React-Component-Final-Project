import LeftPage from "./LeftPage"
import { Link } from "react-router-dom";

const CreateAccount =()=>{
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
              <img
                class="w-1/3 mx-auto"
                src="/public/Logo.png"
              />
            </div>
            <div class="head-login flex justify-evenly my-8 text-gray-400 font-semibold md:hidden">
              <div class="nav-login">
                <Link to={"/createaccount"} class="text-sky-400">
                  Create Account
                </Link>
              </div>
              <div>
                <Link to={"/login"} class="hover:text-sky-400">
                  Login
                </Link>
              </div>
            </div>

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
                <input
                  class="border-2 p-2 rounded-lg w-full mb-3"
                  type="text"
                  id="input-name"
                  placeholder="Jonathan Whiskey"
                  required
                />
                <label class="font-semibold mx-3" for="input-email">
                  Email address{" "}
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
}

export default CreateAccount