import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        console.log(value);
        return (
          <div>
            Hello
            <RoomsFilter />
            <RoomsList />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
