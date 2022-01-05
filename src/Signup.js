import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {

    constructor(props) {
        super(props);
        //const [post, setPost] = useState(null);
        this.first_name = React.createRef();
        this.last_name = React.createRef();
        this.emailId = React.createRef();
        this.password = React.createRef();
        this.state = {
            result : '',
        }
    }

    handleRegister = async (e) => {
        e.preventDefault();
        console.log(this.first_name.current.value);
        const registerUrl = "https://localhost:8083/users";
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                       'Access-Control-Allow-Origin': '*'
                     },
            body: JSON.stringify({
                emailId: this.emailId.current.value,
                password: this.password.current.value,
                userName: this.first_name.current.value + " " + this.last_name.current.value,
                authType: "DATABASE"
            })
        };
        await fetch(registerUrl, request)
        .then(response => {
            if(response.status == 201){
            this.setState({
                result: "Account has been successfully created for " +
                this.first_name.current.value + " " + this.last_name.current.value ,
            })}
            else{
                this.setState({
                    result: "Something went wrong, please contact admin!",
                })}
            })
        .catch(error => {
                console.log(error);
                this.setState({
                    result: "Something went wrong, please contact admin!",
                })});
    }

    render() {
  	    return (
        	<div id="content">
                <div style={{width: "50%" , float: "left"}}>
                    <img src="https://www.publicissapient.com/content/dam/ps-rebrand/brand/ps-share.jpg" height={700} width={700}/>
                </div>
                <div style={{width: "40%" , float: "right", margin: "auto", marginTop: "200px"}}>
                    <form method="POST" onSubmit={this.handleRegister}>
                    <table><tbody>
                        <tr>
                            <td><label>First Name</label></td>
                            <td><input type="text" ref= {this.first_name} required></input></td>
                        </tr>
                        <tr>
                            <td><label>Last Name</label></td>
                            <td><input type="text" ref= {this.last_name} required></input></td>
                        </tr>
                        <tr>
                            <td><label>Email</label></td>
                            <td><input type="text" ref= {this.emailId} required></input></td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td><input type="text" ref= {this.password} required></input></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="submit">Create Account</button></td>
                        </tr>
                        </tbody>
                        </table>
                        <br/>
                        <h1>Already have an account?<Link to="/Login">Login</Link></h1>

                </form><div>{this.state.result}</div></div>

    	    </div>
     );
    }
}

export default Signup;