import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import UserProvider, { UserContext } from "./providers/UserContext";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
