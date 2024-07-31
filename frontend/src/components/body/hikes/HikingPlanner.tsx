import React from "react";
import HikesList from "./HikesList";

const HikePlanner: React.FC = () => {
  return (
    <div className="">
      <header>
        <h1>Hike Planner</h1>
      </header>
      <section>
        <h2>Available Hikes</h2>
        <HikesList />
      </section>
      <section>
        <h2>Other Information</h2>
        <p>Here you can add other information relevant to your hike planner.</p>
        {/* Add more components or information as needed */}
      </section>
    </div>
  );
};

export default HikePlanner;
