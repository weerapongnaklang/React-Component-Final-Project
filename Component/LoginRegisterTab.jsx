import { Link } from "react-router-dom";

const LoginRegisterTab = ({ currentUrl }) => {
  const items = [
    {
      text: "Create Account",
      url: "/createaccount",
    },
    {
      text: "Login",
      url: "/login",
    },
  ];

  return (
    <div class="head-login flex justify-evenly my-8 text-gray-400 font-semibold md:hidden">
      {items.map((item) => {
        const linkClassName =
          currentUrl === item.url ? "text-sky-400" : "hover:text-sky-400";

        return (
          <div>
            <Link to={item.url} className={linkClassName}>
              {item.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default LoginRegisterTab;
