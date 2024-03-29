import { Link } from "react-router-dom";

const SubmitEmail = () => {
  return (
    <div class="flex flex-col h-screen">
      <div class="my-auto">
        <div class="head-image flex justify-center w-auto">
          <img src="/public/succes.png" />
        </div>
        <div>
          <div class="text-center my-5 px-5">
            <h2 class="font-extrabold text-xl text-blue-950">SUCCESS</h2>
            <p class="text-gray-500 mt-5">
              Please check your email for create a new password
            </p>
            <p class="text-gray-500 font-semibold mt-5">
              Can't get email?
              <a href="#" class="text-sky-400">
                Resubmit
              </a>
            </p>
          </div>
          <div class="flex justify-center mt-10">
            <Link
              to={"/login"}
              class="hover:bg-[#39bad4] w-3/5 md:w-1/5 block text-center p-3 rounded-xl bg-[#66d2e8] font-bold text-md font-inter text-white"
            >
              Back To Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitEmail;
