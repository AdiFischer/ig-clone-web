import Logout from "./Logout";

export default function Header({ setUser }) {
  return (
    <div className="header">
      <header>IG CLONE</header>
      <div>
        <Logout setUser={setUser} />
      </div>
    </div>

  )
}