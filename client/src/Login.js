import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login page</h2>
                <form>
                    <input placeholder="ID"></input><br></br>
                    <input placeholder="PassWord"></input><br></br>
                    <button type="submit">로그인</button>
                </form>
            </div>
        );
    }
}

export default Login;
