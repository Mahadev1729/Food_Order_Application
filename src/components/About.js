import React, { useContext } from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <div>
        LoggedInUser: <h1 className="text-lg font-bold">{loggedInUser}</h1>
      </div>
      <User name={"Mahadev Athani"} />
      {/* <UserClass name={"First (class)"} location={"First class"} /> */}
    </div>
  );
};

export default About;
