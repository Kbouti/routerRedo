// import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import DefaultProfile from "./defaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      {/* <Link to="/">Home</Link> */}

      <h1>Hello from profile page!</h1>

      <h2>The profile visited is here: </h2>

      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}

      <Link to="popeye">Popeye</Link>
      <Link to="spinach">Spinach</Link>
    </div>
  );
};

export default Profile;
