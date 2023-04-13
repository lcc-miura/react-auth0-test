import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();

  console.log("user: ", user)

  getIdTokenClaims().then((id_token) => {
    console.log("id_token: ", id_token)
  })

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.userKey}</p>
      </div>
    )
  );
};

export default Profile;