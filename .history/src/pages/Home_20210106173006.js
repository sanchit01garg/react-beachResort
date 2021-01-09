import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            OUR ROOMS
          </Link>
        </Banner>
      </Hero>
      <
    </>
  );
}
