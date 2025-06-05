import './loginform.css';

function LoginForm(props){
    return(
       <div className="login-form">
        <form>
            <div className='form-name'>
                <h2>Login</h2>
            </div>
            <div className="username inputs">
                <label className="user labels">
                    <h3>Username: </h3>
                    <input
                    type="text"
                    />
                </label>
            </div>
            <div className="password inputs">
                <label className=" pass labels">
                    <h3>Pasword: </h3>
                    <input
                    type="password"
                    />
                </label>
            </div>
            <div className="login-button">
                <button>Login</button>
            </div>
        </form>
     
       </div>
    )
}

export default LoginForm;