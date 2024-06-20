import React from "react";
import { useAuth } from "../contexts/Authcontexts";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />

      <h1>Welcome to Coffee Shop</h1>
      {user && <p>Welcome, {user.name}!</p>}
    </div>
  );
};

export default HomePage;
