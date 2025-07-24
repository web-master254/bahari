import './footer.css'

function Footer(props){
    return(
        <div className="footer">
            <small>DomiTech Expense Tracker &copy; {new Date().getFullYear()} All Rights Reserved. Created by Dominic Rosana.</small>
        </div>
    )
}

export default Footer;