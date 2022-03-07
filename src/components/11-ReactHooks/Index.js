import Layout from "./Layout";
import AuthContextProvider from "./context/auth-context";
import "./Style.css";

const ReactHooks = () => {
  return (
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  );
};

export default ReactHooks;
