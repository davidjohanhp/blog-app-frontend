import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            email: localStorage.getItem('userEmail'),
            name: localStorage.getItem('userName'),
            id: localStorage.getItem('userId'),
        };
      }

    render() {
        
        return (
            <section id="profile" className="">
                <div className="container">
                    <div className="row">
                        <h1>Home</h1>
                        <p>Home page body content</p>
                        <p>{this.state.name}</p>
                        <p>{this.state.email}</p>
                        <p>{this.state.id}</p>
                    </div>
                </div>
            </section>
        );
      }
}

export default Profile;