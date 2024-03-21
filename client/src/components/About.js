import React from "react";
import dining from "../assets/dining.jpg";
import games from "../assets/games.jpg";
import resort4 from "../assets/resort4.jpg";
import sunset1 from "../assets/sunset1.jpg";
const About = () => {
  return (
    <div class="bg-orange-200">
      <div class=" flex flex-col md:flex-row">
        <img
          src={dining}
          alt="food area"
          class="  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... h-80  mx-28 mt-28"
        />
        <div class="mt-36 mx-16 font-serif italic text-xl text-emerald-900  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
          Experience the perfect fusion of nature, luxury, and gastronomy at our
          resort's dining area. We invite you to join us for an unforgettable
          dining adventure. Whether you're a food enthusiast or looking for a
          casual dining spot, our dining area has something to satisfy every
          guest.
        </div>
      </div>
      <div class=" flex flex-col md:flex-row">
        <div class="mt-36 mx-16 font-serif italic text-xl text-emerald-900  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
          Make the most of your vacation at our resort with an array of
          thrilling activities and sports at our dedicated sports club.Come join
          us at our sports club and create unforgettable memories as you enjoy a
          vacation filled with excitement, relaxation, and endless fun.
        </div>
        <img
          src={games}
          alt="food area"
          class=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... h-80  mx-16 mt-28 "
        />
      </div>
      <div class=" flex flex-col md:flex-row">
        <img
          src={resort4}
          alt="food area"
          class=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... h-80  mx-28 mt-28"
        />
        <div class="mt-36 mx-16 font-serif italic text-xl text-emerald-900  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
          Whether you're seeking a tranquil retreat or a lively gathering spot,
          our swimming pool area is a hub of relaxation and socializing. It's
          the perfect place to make lasting memories with loved ones or simply
          bask in the beauty of your surroundings. Discover the epitome of
          relaxation and luxury at our resort's beautiful swimming pool. Join us
          for a dip, a sip, and a slice of paradise. Your perfect vacation
          awaits.
        </div>
      </div>
      <div class=" flex flex-col md:flex-row">
        <div class="mt-36 mx-16 font-serif italic text-xl text-emerald-900  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
          As day turns into night, our sunset images serve as a reminder of the
          tranquility and awe-inspiring moments that our resort promises to
          deliver. They invite you to unwind, reconnect with nature, and create
          lasting memories with loved ones.
        </div>
        <img
          src={sunset1}
          alt="food area"
          class=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... h-80 mx-28 mt-28"
        />
      </div>
    </div>
  );
};

export default About;
