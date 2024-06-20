import React from "react";
import { useAuth } from "../contexts/Authcontexts";

const UserProfilePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user information and management options here */}
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default UserProfilePage;
