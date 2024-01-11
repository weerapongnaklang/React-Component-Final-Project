import "./App.css";
import Welcome from "../Component/Welcome";
import Login from "../Component/Login";
import CreateAccount from "../Component/CreateAccount";
import SuccessPassWord from "../Component/SuccessPassWord";
import SubmitEmail from "../Component/SubmitEmail";
import ForgetPassword from "../Component/ForgetPassword";
import ChangePassword from "../Component/ChangePassword";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/login", element: <Login /> },
    { path: "/createaccount", element: <CreateAccount /> },
    { path: "/succespassword", element: <SuccessPassWord /> },
    { path: "/submitemail", element: <SubmitEmail /> },
    { path: "/forgetpassword", element: <ForgetPassword /> },
    { path: "/changepassword", element: <ChangePassword /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Welcome /> */}
      {/* <Login /> */}
      {/* <CreateAccount/> */}
      {/* <SuccessPassWord/> */}
      {/* <SubmitEmail /> */}
      {/* <ForgetPassword/> */}
      {/* <ChangePassword /> */}
    </>
  );
}

export default App;
