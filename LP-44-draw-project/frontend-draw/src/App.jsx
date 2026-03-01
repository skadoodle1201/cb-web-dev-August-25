import { useEffect, useState } from "react";
import "./App.css";
import Whiteboard from "./components/Whiteboard";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import { logout, validate } from "./utility/helper";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./redux/user.slice";

function App() {
  const [canvas, setCanvas] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const isLoggedOut = await logout();
    if (!isLoggedOut) {
      return;
    }
    dispatch(setUserDetails(null));
  };

  useEffect(() => {
    async function isLoggedIn() {
      const userDetails = await validate();
      dispatch(setUserDetails(userDetails));
    }
    isLoggedIn();
  }, [dispatch]);

  return (
    <>
      <div className="app-nav">
        {user ? (
          <div className="app-nav-auth">
            <p>Hi, {user?.username}</p>
            <Button
              buttonStyles={"toolbar-btn nav-logout-btn"}
              onClickFn={handleLogout}
              buttonCTA={"Logout"}
            />
          </div>
        ) : (
          <Button
            buttonStyles={"toolbar-btn nav-login-btn"}
            onClickFn={() => {
              setOpenLogin(!openLogin);
            }}
            buttonCTA={"Login"}
          />
        )}
      </div>
      {openLogin && (
        <LoginModal
          showModal={openLogin}
          setShowModal={setOpenLogin}
          onOpenSignup={() => {
            setOpenLogin(false);
            setOpenSignup(true);
          }}
        />
      )}
      {openSignup && (
        <SignupModal
          showModal={openSignup}
          setShowModal={setOpenSignup}
          onOpenLogin={() => {
            setOpenSignup(false);
            setOpenLogin(true);
          }}
        />
      )}
      <Toolbar canvas={canvas} />
      <Whiteboard setCanvas={setCanvas} />
    </>
  );
}

export default App;
