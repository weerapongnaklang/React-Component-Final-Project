import LeftPage from "./LeftPage";

const ForgetPassword = () => {
  return (
    <div className="flex">
      <LeftPage />
      <div class="flex-1 h-screen w-100 max-md:bg-none md:bg-cover bg-theme-right">
        <div class="flex flex-col h-screen">
          <div class="mt-16 md:my-auto">
            <div class="m-auto flex-1 w-4/5 text-left md:text-center">
              <h2 class="text-sky-500 md:text-blue-950 font-bold text-lg mb-5">
                Forget Password
              </h2>
              <p class="text-gray-400">Enter your registered email below</p>
            </div>
            <div class="m-auto flex-1 w-4/5">
              <div class="my-12">
                <div class="input-login">
                  <form action="Desktop_submitEmail.html">
                    <label class="font-semibold mx-3 block" for="input-email">
                      Email
                    </label>
                    <input
                      class="border-2 p-2 rounded-lg w-full mb-3"
                      type="email"
                      id="input-email"
                      placeholder="siberianwhisky@gmail.com"
                      required
                    />

                    <p class="text-gray-400 mx-1 md:text-center">
                      Remember the password?
                      <a
                        href="Desktop_login.html"
                        class="font-semibold text-sky-500 md:text-blue-950 ml-1"
                      >
                        Sign in
                      </a>
                    </p>

                    <div class="flex justify-center mt-10">
                      <button
                        type="submit"
                        class="w-3/5 m-3 p-3 rounded-xl hover:bg-[#39bad4] bg-[#66d2e8] font-bold text-md font-inter text-white shadow-sm"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword
