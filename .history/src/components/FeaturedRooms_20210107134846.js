import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms: rooms } = this.context;
    console.log(rooms);

    return (
      <div>
        <Title title="featured rooms" />
        <Room />
        <Loading />
      </div>
    );
  }
}
