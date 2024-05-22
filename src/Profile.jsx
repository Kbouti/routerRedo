import { Link } from "react-router-dom";

const Profile = () => {
    return (
      <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <Link to="/">Home</Link>
      </div>
    );
  };
  
  export default Profile;
  