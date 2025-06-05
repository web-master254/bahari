import "./nav.css"

function NavBar(props){
    return (
        <div className="nav-section">
            <div className="icon">
                <p>icon</p>
            </div>
            <div className="nav-title">
                <h3>Bahari Solidarity Members Group</h3>
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>Members</li>
                    <li>Dashboard</li>
                    <li>Logout</li>
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar;