import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

export default function RoomsFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={type}
          ></select>
        </div>
      </form>
    </section>
  );
}
