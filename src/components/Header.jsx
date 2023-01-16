import Logout from "./Logout";

export default function Header({ setUser }) {
  return (
    <div className="header">
      <header>IG CLONE</header>
      {/* <div className="logout"> */}
      <Logout setUser={setUser} />
    </div>

  )
}