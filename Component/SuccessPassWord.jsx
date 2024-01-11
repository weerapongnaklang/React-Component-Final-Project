
const SuccessPassWord=()=>{
return (
  <div class="flex flex-col h-screen p-10">
    <div class="md:my-auto flex-1 m-10 md:mt-10 md:m-auto flex">
      <div class="my-auto mx-auto">
        <div class="md:m-auto">
          <div class="flex justify-center w-auto mb-10">
            <i class="fa-solid fa-key fa-2xl text-yellow-500 m-auto"></i>
          </div>
        </div>
        <div>
          <div class="text-center my-5 px-5">
            <h2 class="font-extrabold text-xl text-blue-950">Complete!</h2>
            <p class="text-gray-500 mt-5">Your password has been changed.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-center">
        <Link
          to={"/login"}
          class="w-4/5 md:w-1/5 m-3 p-3 rounded-xl text-center bg-[#66d2e8] font-bold text-md font-inter text-white shadow-sm"
        >
          Back To Login
        </Link>
      </div>
    </div>
  </div>
);
}

export default SuccessPassWord