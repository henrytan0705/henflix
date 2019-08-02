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
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.formAction(user)
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    demoLogin(e) {
        e.preventDefault();
        const user = {
            email: "demoLogin@gmail.com", 
            password: "asdf1234"
        }
        this.props.formAction(user);
    }

    render() {
        const formlink = this.props.formType === "Sign In" ? "/signup" : "/login";
        const linkName = this.props.formType === "Sign In" ? "Sign Up" : "Sign In";

        const errors = this.props.errors.map((err, index) => {
            return <li className="errors" key={index}>{err}</li>
        })
        
        const demo = (this.props.formType === "Sign In") ? (
            <button className="demo-button" onClick={this.demoLogin}>DEMO LOGIN</button>
        ) : null

        const linkText = (this.props.formType === "Sign In") ? 
            "New to Netflix?" : "Already have an account?"
            
        return(
            <div className="form-page">
            {/* <div className="form-bg"> */}
                <div className="session-form">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="errors-display">
                            <ul>
                                {errors}
                            </ul>
                        </div>

                        <h2 className="formtype">{this.props.formType}</h2>
                        {/* <div> */}
                            {/* <label>Email or phone number */}
                                <input className="email" type="email" value={this.state.email} onChange={this.update("email")} placeholder="Email or phone number"/>
                            {/* </label> */}
                        {/* </div> */}
                        <br/>
                        <input className="password" type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"/>
                        <br/>
                        <input className="submit-button" type="submit" value={this.props.formType}/>
                    
                        {demo}
                        <br/>
                        {linkText}

                        <Link className="link-button" 
                            to={formlink} 
                            onClick={this.props.clearErrors}>
                                {linkName}
                        </Link>
                    </form>

                </div>
                {/* </div> */}
            </div>
        )
    }
}

export default SessionForm;