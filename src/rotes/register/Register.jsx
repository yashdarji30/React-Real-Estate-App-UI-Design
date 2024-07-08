import './register.scss';
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div className="register">
            <div className="formContainer">
                <form>
                    <h1>Create an Account</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="email" type="text" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button>Register</button>
                    <link to="/login">Do you have an account?</link>

                </form>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}
export default Register