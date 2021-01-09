import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

export default function RoomsFilter() {
  const context = useContext(RoomContext);
  return <div>filter</div>;
}
