interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  // Should explicitly ues if statement for app to be scalability (reset password...)
  if (action.type === "LOGOUT") return "";
  return state;
};

export default authReducer;
