import { useParams } from "react-router";
import teamData from "../assets/teamData";
import { useEffect, useState } from "react";

const getAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const TeamCardstyles = {
  card: {
    width: "220px",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "12px",
  },
};
const TeamCard = () => {
  const { pid } = useParams();
  const [player, setPlayer] = useState({});

  useEffect(() => {
    teamData.forEach((t) => {
      if (t.id == pid) {
        setPlayer(t);
      }
    });
  }, [pid]);

  return (
    <div style={TeamCardstyles.card}>
      <img src={player.image} alt={player.name} style={TeamCardstyles.image} />
      <h3>{player.name}</h3>
      <p>
        <strong>Age:</strong> {getAge(player.dob)}
      </p>
      <p>
        <strong>Position:</strong> {player.position}
      </p>
    </div>
  );
};

export default TeamCard;
