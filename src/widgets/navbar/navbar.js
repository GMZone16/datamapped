

export default function Navbar() {
    
    return <div className="navbar-container"><nav className="navbar">
    <div className="logo"><a href="/">DataMapped</a></div>
    <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
            <span></span>
        </label>
    <ul className="nav-links">
        {/* <li><a href="/">Home</a></li> */}
    </ul>
</nav></div>
}