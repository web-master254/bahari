import NavBar from "../components/nav_bar/nav";
import LoginForm from "../components/login_form/loginform";
import Footer from "../components/footer/Footer";

function HomePage(props){
    return(
        <>
       <NavBar/>
       <LoginForm/>
       <Footer/>
        </>
    )
}

export default HomePage;