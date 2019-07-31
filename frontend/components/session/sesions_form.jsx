import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.formAction(user)
            // .then(() => this.props.history.push("/"))
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    render() {
        const formlink = this.props.formType === "Sign In" ? "/signup" : "/login";
        const linkName = this.props.formType === "Sign In" ? "Sign Up" : "Sign In";

        return(
            <div className="session-form">

                <h2>{this.props.formType}</h2>

                <form onSubmit={this.handleSubmit}>
                    <input type="email" value={this.state.email} onChange={this.update("email")} placeholder="Email or phone number"/>
                     <br/>
                    <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"/>
                    <br/>
                    <input type="submit" value={this.props.formType}/>
                </form>
                <Link to={formlink}>{linkName}</Link>
            </div>
        )
    }
}

export default SessionForm;