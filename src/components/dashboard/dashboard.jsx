import './dashboard.css'
import NavBar from '../nav_bar/nav';
import Loader from '../loader/loader';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Dashboard(props){
    const navigate = useNavigate()
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [ error, setError] = useState('');
    const [id_, setID] = useState('');
    const [isOpen,setIsOpen] = useState(false)


    const open_close = ()=> { return setIsOpen(!isOpen)}
    
function show_profit_page(){
    alert(232)
}
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



    return(
    <div className="dashboard">
        <NavBar/>
        <div className='remarks'>
            <div className="menus previous">
                <div className='sales-title'>
                    <h3>Sales</h3>
                </div>
                <div className="details">Total Sales: Ksh 30000</div>
                <div className="details">Previous Sales: Ksh 30222</div>
                <div className="details">Deviation: - Ksh 222</div>
                <div className="details">Remarks: negative deviation</div>
                <div className='btns'>
                    <button>Check details</button>
                </div>
            </div>
            <div className="menus current">
                <div className='expense-title'>
                    <h3>Expenses</h3>
                </div>
                <div className="details">Total Expenses: Ksh 30000</div>
                <div className="details">Previous Expenses: Ksh 30222</div>
                <div className="details">Deviation: - Ksh 222</div>
                <div className="details">Remarks: Positive impact</div>
                <div className='btns'>
                    <button>Check details</button>
                </div>
            </div>
            <div className="menus dev">
                <div className='expense-title'>
                    <h3>Profit</h3>
                </div>
                <div className="details">Net Profit: Ksh 30000</div>
                <div className="details">Previous Profit: Ksh 30222</div>
                <div className="details">Deviation: - Ksh 222</div>
                <div className="details">Remarks: Reduced Profit</div>
                <div className='btns'>
                    <button
                    onClick={show_profit_page}
                    >Check details</button>
                </div>
            </div>
            <div className="menus previous">
               <div className='expense-title'>
                    <h3>Loans</h3>
                </div>
                <div className="details">Total Loans</div>
                <div className="details">Interest Paid: Ksh 30222</div>
                <div className="details">Remaining Loans: - Ksh 222</div>
                <div className="details">Remarks: Positive impact</div>
                <div className='btns'>
                    <button>Check details</button>
                </div>
            </div>
            <div className="menus current">
                <div className='expense-title'>
                    <h3>Other Expenses</h3>
                </div>
                <div className="details">Interest on Loans: Ksh 30000</div>
                <div className="details">Transport: Ksh 30222</div>
                <div className="details">Total amount: 2000</div>
                <div className='btns'>
                    <button>Check details</button>
                </div>
            </div>
            <div className="menus dev">
                <div className='expense-title'>
                    <h3>Other Incomes</h3>
                </div>
                <div className="details">Total Expenses: Ksh 30000</div>
                <div className="details">Previous Expenses: Ksh 30222</div>
                <div className="details">Deviation: - Ksh 222</div>
                <div className="details">Remarks: Positive impact</div>
                <div className='btns'>
                    <button>Check details</button>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Dashboard;