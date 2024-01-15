import LeftPage from "./LeftPage";
import { Link } from "react-router-dom";
import LoginRegisterTab from "./LoginRegisterTab";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const CreateAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleFullNameChange = (event) => {
    const inputValue = event.target.value;
    setFullName(inputValue);
    setFullNameError(inputValue.trim() === "");
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setEmailError(!isValidEmail(inputValue));
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    setPasswordError(inputValue.length < 6); // ตัวอย่าง: ต้องมีอย่างน้อย 6 ตัวอักษร
  };

  const isValidEmail = (email) => {
    // ตรวจสอบว่า email มีรูปแบบที่ถูกต้องหรือไม่
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    // ตรวจสอบ validation ก่อนที่จะทำการ submit หรือต้องการทำอย่างอื่น
    setFullNameError(fullName.trim() === "");
    setEmailError(!isValidEmail(email));
    setPasswordError(password.length < 6);

    if (fullName.trim() === "" || !isValidEmail(email) || password.length < 6) {
      // ไม่ผ่าน validation
      // สามารถทำอย่างอื่นที่ต้องการ, เช่น alert('Please enter valid information');
      e.preventDefault();
    } else {
      // ผ่าน validation
      navigate("/login");
    }
  };
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
                  error={fullNameError}
                  id="input-name"
                  value={fullName}
                  placeholder="Jonathan Whiskey"
                  helperText={
                    fullNameError ? "Please enter your full name." : ""
                  }
                  sx={{ marginBottom: 2 }}
                  pattern="[A-Za-z].{5,}"
                  onChange={handleFullNameChange}
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
                  error={emailError}
                  value={email}
                  id="input-email"
                  placeholder="Siberainwhiskey@gmail.com"
                  helperText={
                    emailError ? "Please enter a valid email address." : ""
                  }
                  sx={{ marginBottom: 2 }}
                  onChange={handleEmailChange}
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
                  error={passwordError}
                  value={password}
                  id="input-password"
                  placeholder="**********"
                  helperText={
                    passwordError
                      ? "Password must be at least 6 characters."
                      : ""
                  }
                  pattern="[A-Za-z0-9].{8,}"
                  onChange={handlePasswordChange}
                />
                {/* <Alert severity="error">Please entry your password.</Alert> */}

                <br />
              </div>
            </div>
          </div>
          <div class="mb-10 md:mb-auto">
            <div>
              <button
                onClick={handleSubmit}
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
