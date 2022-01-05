import React, { useState} from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        //const [post, setPost] = useState(null);
        this.state = {
            email : '',
            password : '',
            result : '',
        }
    }

    handleLogin = async (event) => {
        event.preventDefault();
        const loginUrl = "https://localhost:8083/login";
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                       'Access-Control-Allow-Origin': '*'
                    },
            body: JSON.stringify({
                emailId: this.state.email,
                password: this.state.password
        })};
        await fetch(loginUrl, request)
        .then(response => {
            if(response.status == 200){
            console.log(response.json());
            this.setState({
                result: this.state.email +" has been successfully authentiated!",
            })}
            else{
                this.setState({
                    result: this.state.email +" has failed to authenticate!",})
                }
            })
        .catch(error => {
                console.log(error);
                this.setState({
                    result: this.state.email +" has failed to authenticate!",
                })});
    }

    render() {
  	    return (
            <div id="content">
            <div style={{width: "50%" , float: "left", alignItems: "flex-start"}}>
                <img alt="" src="https://www.publicissapient.com/content/dam/ps-rebrand/brand/ps-share.jpg" height={700} width={700}/>
            </div>
            <div style={{width: "40%" , float: "right", margin: "auto", marginTop: "200px", alignItems: "flex-start"}}>
                <h1 >Sign in</h1>
                <form onSubmit={this.handleLogin}>
                    <table><tbody>
                        <tr>
                            <td><label>Email</label></td>
                            <td><input type="text"
                            value={this.state.email}
                            onChange={event => this.setState({ email: event.target.value})}
                            placeholder = 'email'
                            required></input>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td><input
                            type="text"
                            value={this.state.password}
                            onChange={event => this.setState({ password: event.target.value})}
                            placeholder = 'password'
                            required></input>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="submit">Login</button></td>
                        </tr>
                        </tbody>
                        </table>
                </form>
                <br/>
                <h1>New to Publicis Sapient?<Link to="/Signup">Sign Up</Link></h1>
                <div>{this.state.result}</div>
    	    </div>
            </div>
     );
    }
}

export default Login;