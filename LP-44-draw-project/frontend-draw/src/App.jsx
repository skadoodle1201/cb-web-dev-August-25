import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Whiteboard from "./components/Whiteboard";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import RoomInput from "./components/RoomInput";
import { logout, validate } from "./utility/helper";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./redux/user.slice";
import { socket } from "./socket";

function App() {
  const [canvas, setCanvas] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openRoomModal, setOpenRoomModal] = useState(false);
  const user = useSelector((state) => state.user.value);
  const roomId = useSelector((state) => state.room.value);
  const dispatch = useDispatch();

  const isApplyingRemote = useRef(false);

  const handleLogout = async () => {
    const isLoggedOut = await logout();
    if (!isLoggedOut) {
      return;
    }
    dispatch(setUserDetails(null));
  };

  const reloadCanvas = useCallback(async (data) => {
    if (!canvas || !data?.canvas) {
      return;
    }

    const collabJson = data.canvas;
    isApplyingRemote.current = true;
    try {
      await canvas.loadFromJSON(collabJson);
      canvas.renderAll();
    } finally {
      isApplyingRemote.current = false;
    }
  }, [canvas]);

  useEffect(() => {
    async function isLoggedIn() {
      const userDetails = await validate();
      dispatch(setUserDetails(userDetails));
    }
    isLoggedIn();
  }, [dispatch]);

  const [, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    if (!canvas) {
      return;
    }
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    const handleRoomJoined = (data) => {
      reloadCanvas(data);
    };
    const handleCanvasModified = (data) => {
      reloadCanvas(data);
    };

    socket.on("room_joined", handleRoomJoined);
    socket.on("canvas_modifed", handleCanvasModified);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("room_joined", handleRoomJoined);
      socket.off("canvas_modifed", handleCanvasModified);
    };
  }, [canvas, reloadCanvas]);

  const handleCollab = () => {
    setOpenRoomModal(true);
  };

  return (
    <>
      <div className="app-nav">
        {roomId && <h2>Current Room: {roomId}</h2>}
        <Button
          onClickFn={handleCollab}
          buttonStyles={"toolbar-btn"}
          buttonCTA={"Collab"}
        />

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
      {openRoomModal && (
        <RoomInput
          showModal={openRoomModal}
          setShowModal={setOpenRoomModal}
          canvas={canvas}
        />
      )}
      <Toolbar canvas={canvas} />
      <Whiteboard setCanvas={setCanvas} isApplyingRemote={isApplyingRemote} />
    </>
  );
}

export default App;
