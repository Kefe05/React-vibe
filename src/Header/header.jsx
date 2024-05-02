import './header.css'

function Header() {
  return (
    <div className="h-wrapper">
      <div className="h-container">
        <div className="h-logo">QuickLift</div>
        <div className="h-nav">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Download App</span>
        </div>  
      </div>
    </div>
  );
}
export default Header;