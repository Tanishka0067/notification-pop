import React from "react";
import BellImage from "../Components/Bellimage";
import NotificationButton from "../Components/NotificationButton";
import LoremIpsum from "../Components/Text";
import "../app/globals.css";
const Home = () => {
  return (
    <div
      style={{
        margin: -10,
        padding: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        background:
          "linear-gradient(0deg, rgba(0,13,13,1) 30%, rgba(28,1,59,1) 66%, rgba(66,1,116,1) 100%)",
      }}
    >
      <p className="p-1">Hola!</p>
      <BellImage />
      <LoremIpsum />

      <NotificationButton />
    </div>
  );
};

export default Home;
