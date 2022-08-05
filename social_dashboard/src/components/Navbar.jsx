import "./style/header.css";
export default function Navbar() {
  return (
    <nav className="navBar">
      <div className='logo'>Logo</div>
      <div className="links">
      <button className="btn btn-primary">Login</button>
      <button className="btn">signup</button>
      </div>
    </nav>
  )
}