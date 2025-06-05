import './dashboard.css'

function Dashboard(props){
    return(
    <div className="dashboard">
        
        <div className="dashboard-nav">
        <a href="#">See Member's Profile</a>
        <a href="#">Total Contribution</a>
         <button>Logout</button>
        </div>
        <div className="dashboard-left">
        <div className="setting">
        <h3>Settings</h3>
        <a href="#">Change Theme</a>
        <a href="#">Logout</a>
        </div>
        <div className="member-profile">
            <h3>Profile</h3>
        <button>Check Members</button>
        <button>Add Victim to Contribution List</button>
        <button>Remove Member</button>
        </div>
        </div>
    </div>
    )
}

export default Dashboard;