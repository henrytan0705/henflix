import React from 'react';
import { Link } from 'react-router-dom';
import NavbarFormContainer from '../navbar/navbar_form_container';

class SessionForm extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            email: "",
            password: "",
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
        // debugger
        // this.displayErrors();
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

        
        const demo = (this.props.formType === "Sign In") ? (
            <button className="demo-button" onClick={this.demoLogin}>DEMO LOGIN</button>
        ) : null

        let emailError = "";
        let passwordError = "";

        let emailErrorStyle = "none";
        let passwordErrorStyle = "none";

        for (let i = 0; i < this.props.errors.length; i++) {
            let error = this.props.errors[i];

            if (error.includes("Email") || error.includes("email")){
                emailError = error;
                emailErrorStyle = "email-error-highlight";
            } else if (error.includes("Password") || error.includes("password")) {
                passwordError = error;
                passwordErrorStyle = "password-error-highlight";
            }
        }

        const linkText = (this.props.formType === "Sign In") ? 
            "New to Netflix?" : "Already have an account?"
            
        return(
        <>
        <NavbarFormContainer/>
        <div className="form-background">
            <div className="form-body">
                <div>
                    <div className="form-content">
                        <div className="form-main"> 
                          
                            <h1 className="formtype">{this.props.formType}</h1>

                            <form className="form" onSubmit={this.handleSubmit}>

                                <div className="form-email-input">
                                    <div className="input">
                                        <div className="email-label-wrapper">
                                            <label> 
                                                <input id="email" className={`${emailErrorStyle} email-input`} type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email or phone number"/>
                                                {/* <div className="errors">{this.props.errors[0]}</div> */}
                                                <div className="errors">{emailError}</div>
                                                {/* <label for="email" className="email-label">Email or phone number</label> */}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-password-input">
                                    <div className="input">
                                        <div className="password-label-wrapper">
                                            <label>
                                                {/* <label className="password-label"> Password */}
                                                    <input className={`${passwordErrorStyle} password-input`} type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"/>
                                                    {/* <div className="errors">{this.props.errors[1]}</div> */}
                                                    <div className="errors">{passwordError}</div>
                                                {/* </label> */}
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <button className="form-button" type="submit">{this.props.formType}</button>

                                {demo}

                                <span className="link-text">{linkText}
                                    <Link className="link-button"
                                        to={formlink}
                                        onClick={this.props.clearErrors}>
                                        {linkName}
                                    </Link>
                                </span>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    }
}

export default SessionForm;