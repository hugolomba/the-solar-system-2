import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function AboutPage() {
  return (
    <div className="text-white text-center mt-10 p-4 flex flex-col justify-center items-center bg-gradient-to-t from-blue-400/10 to-transparent border border-blue-400 rounded-md animate-[entrance_0.4s_0.8s_backwards] shadow-[0px_0px_8px_1px_#0037ff]">
    <Link to="/" className=" underline mb-4 inline-block">← Back to Home</Link>
      <h1 className="text-4xl font-bold mb-4">About The Solar System App</h1>
      <p className="max-w-4xl mx-auto mt-6">
        The Solar System App is an educational platform designed to provide comprehensive information about the various celestial bodies within our solar system. From planets and moons to asteroids and comets, this app offers detailed descriptions, fascinating facts, and high-quality images to enhance your understanding of our cosmic neighborhood.
      </p>
      <p className="max-w-4xl mx-auto mt-4">
        Whether you're a student, educator, or simply a space enthusiast, The Solar System App aims to make learning about astronomy engaging and accessible. Explore the wonders of space, discover the unique characteristics of each body, and stay updated with the latest astronomical findings.
      </p>
      <p className="max-w-4xl mx-auto mt-4">
        Our mission is to inspire curiosity and foster a deeper appreciation for the universe we inhabit. Thank you for using The Solar System App, and we hope it fuels your passion for space exploration!
      </p>

        <p className="max-w-4xl mx-auto mt-6 italic">Developed by Hugo Miranda</p>
        <p className="max-w-4xl mx-auto mt-4">You can find more about me and my work at <a href="https://hugo-miranda.dev" className="underline">hugo-miranda.dev</a></p>
    </div>
  );
}