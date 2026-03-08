import { useState } from "react";
import { connectToRoom } from "../socket";
import { useDispatch } from "react-redux";
import { setRoomId } from "../redux/room.slice";

const RoomInput = ({ showModal, setShowModal, canvas }) => {
  const [userRoomId, setUserRoomId] = useState("");
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();

  const handleConnectJoinRoom = (event) => {
    event.preventDefault();

    const trimmedRoomId = userRoomId.trim();
    if (!trimmedRoomId) {
      setValidationError("Room ID is required to join a room.");
      return;
    }

    const roomId = connectToRoom({ id: trimmedRoomId });
    dispatch(setRoomId(roomId));
    setValidationError("");
    setUserRoomId("");
    setShowModal(false);
  };

  const handleCreateRoom = () => {
    const roomId = connectToRoom({ canvas: canvas.toJSON() });
    dispatch(setRoomId(roomId));
    setValidationError("");
    setUserRoomId("");
    setShowModal(false);
  };

  const handleUserRoomInput = (e) => {
    setValidationError("");
    setUserRoomId(e.target.value);
  };

  return (
    <div id="room-modal" className={showModal ? "modal modal-show" : "modal"}>
      <div className="modal-content">
        <button
          className="close"
          type="button"
          aria-label="Close room modal"
          onClick={() => {
            setShowModal(false);
          }}
        >
          &times;
        </button>
        <div className="login-modal-body">
          <h2 className="modal-title">Join a collaboration room</h2>
          <p className="modal-subtitle">
            Enter a room ID to join an existing board, or create a new one.
          </p>

          {validationError && <p className="form-error">{validationError}</p>}

          <form className="login-form" onSubmit={handleConnectJoinRoom}>
            <label htmlFor="room-id" className="login-label">
              Room ID
            </label>
            <input
              id="room-id"
              className="login-input"
              type="text"
              value={userRoomId}
              placeholder="Example: 123456"
              onChange={handleUserRoomInput}
            />

            <button className="login-submit" type="submit">
              Join Room
            </button>
            <button
              className="toolbar-btn"
              type="button"
              onClick={handleCreateRoom}
            >
              Create New Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomInput;
