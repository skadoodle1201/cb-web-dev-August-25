import React from "react";
import teamData from "../assets/teamData";
import TeamCard from "./TeamCard";
import { Outlet } from "react-router";
import { Link } from "react-router";

const Team = () => {
  return (
    <div style={styles.container}>
      <ol>
        {teamData.map((player, index) => (
          <Link key={index} to={`${player.id}`}>
            <li key={player.id}>{player.name}</li>
          </Link>
        ))}
        <Outlet />
      </ol>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    flexWrap: "wrap",
  },
};

export default Team;
