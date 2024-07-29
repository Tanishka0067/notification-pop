"use client";
import React from "react";

const NotificationButton = () => {
  const handleClick = () => {
    if (Notification.permission === "granted") {
      new Notification("Hiii! This is a notification!");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Hiii! This is a notification!");
        }
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className=" p-2 md:w-1/3 w-4/5 rounded-xl border-2 border-indigo-700 text-xl font-inter	"
      style={{ background: " #1D103A", fontFamily: "Inter, sans-serif" }}
    >
      Send Notification
    </button>
  );
};

export default NotificationButton;
