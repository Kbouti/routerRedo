import { Link, Outlet } from "react-router-dom";

const Profile = () => {
    return (
      <div>
                <Link to="/">Home</Link>

        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>

        <Link to ="popeye">Popeye</Link>
        <Link to ="spinach">Spinach</Link>
        <Outlet/>
      </div>
    );
  };
  
  export default Profile;
  