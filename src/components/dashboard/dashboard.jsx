import './dashboard.css'
import Loader from '../loader/loader';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Dashboard(props){
    const navigate = useNavigate()
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [ error, setError] = useState('');
    const [id_, setID] = useState('')

    useEffect(
        ()=>{
   setLoading(true)
   fetch("https://jsonplaceholder.typicode.com/todos")
   .then(
    (res)=>res.json()
   ).then(
    (d)=> {setData(d)
    setLoading(false)
    }
   ).catch(
    (err)=> setError(err)
   )
   
        },[]
    )

    useEffect(
        ()=>{
     search_data(id_).then(
        (d)=> setData(d)
     )
        },[]
    )
if(loading){
    return <Loader/>
}
async function search_data(id){
    setLoading(true)
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/"+id);
    const data = await res.json()
    setLoading(false)
    return data
}


const data_table = data.map(
    (d)=> {
        return (
            <tr>
                <td>{d.title}</td>
                <td>{d.userId}</td>
                <td>{d.completed ? 'Yes' : 'No'}</td>
            </tr>
        )
    }
)

    return(
    <div className="dashboard">
        
        <div className="dashboard-left">
            <div className='logo text'>
                <h2>B</h2>
                <h4>Bahari Solidarity</h4>
                </div>
        
        <div className="dashboard-nav">
        <h3>Members</h3>
        <ul>
            <li><a href="#">Members List</a></li>
            <li><a href="#">Total Contribution</a></li>
        </ul>
    
        </div>
        <div className="setting">
        <h3>Settings</h3>
        <ul>
            <li><a href="#">Change Theme</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
        </div>
        <div className="member-profile">
            <h3>Profile</h3>
        <ul>
            <li><a href="#">Check Members</a></li>
            <li><a href="#">Add contribution</a></li>
            <li><a href="#">Remove a Member</a></li>
        </ul>
        </div>
        <button 
        onClick={()=>navigate('/')}
        id="logout">Logout</button>
        </div>
        <div className='space'>
            <div className='title'>
                <div><h4>Welcome, Dominic</h4></div>
                <div><h2>Bahari Solidarity Group</h2></div>
                <div className='search'>
                <input 
                type='text'
                onChange={(e)=>setID(e.target.value)}
                placeholder='Search member ...'
                />
                <button
                onClick={()=>search_data(id_)}
                >Search</button>
            </div>
            </div>
           
       <div className='data-section'>
        {<table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>User ID</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {data_table}
            </tbody>
        </table>}
       </div>
        </div>
    </div>
    )
}

export default Dashboard;