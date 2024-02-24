import { useContext, useReducer } from "react";
import AuthContext from "./authContext";
import useAuth from "./useAuth";
import useAuthStore from "./store";

const LoginStatus = () => {
  // const { user, dispatch } = useAuth();
  const { user, login, logout } = useAuthStore();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a
            // onClick={() => dispatch({ type: "LOGOUT" })}
            onClick={() => logout()}
            href="#"
          >
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        // onClick={() => dispatch({ type: "LOGIN", username: "Sun" })}
        onClick={() => login("Sun")}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
