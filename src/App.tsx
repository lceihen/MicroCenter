import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import styles from "./index.module.css";
import Layout from "./components/Layout";
import AuthAdmin from "./pages/authAdmin";
import AuthCallback from "./pages/auth/callback";
import { getUserInfo } from "@/api";
import { useEffect } from "react";
import { whiteRouterList } from "./config";

function App() {
  useEffect(() => {
    if (!whiteRouterList.includes(location.pathname)) {
      getUserInfo();
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <header className={styles.header}>
          <Link to="/">根目录</Link>
          {/* <Link to="/paint">paint</Link> */}
          <Link to="/authAdmin">AuthAdmin</Link>
        </header>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/auth/callback" element={<AuthCallback />}></Route>
          {/* <Route path="/paint" element={<Paint />}></Route> */}
          <Route path="/authAdmin" element={<AuthAdmin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
