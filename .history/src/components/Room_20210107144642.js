import React from "react";
import { Link } from "react-router-dom";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return <article className="room">Hello from room</article>;
}
