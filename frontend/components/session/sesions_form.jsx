import React from 'react';
import { Link } from 'react-router-dom';
import NavbarFormContainer from '../navbar/navbar_form_container';

class SessionForm extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            email: "",
            password: "",
            error: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.update = this.update.bind(this);
        this.checkLoginAttempt = this.checkLoginAttempt.bind(this);
        this.checkErrors = this.checkErrors.bind(this);
        this.checkField = this.checkField.bind(this);
        this.emailError = null;
        this.passwordError = null;
        // this.emailErrorStyle = "none";
        // this.passwordErrorStyle = "none";
        // this.invalidCredentials = "none";
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    // componentDidUpdate(){
    //     // debugger
    //     // if (!!this.props.errors.length) this.checkErrors();
    //     if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
    //         this.emailError = "";
    //         this.emailErrorStyle = "none";
    //     } else {
    //         this.emailError = "Please enter a valid email or phone number.";
    //         this.emailErrorStyle = "email-error-highlight";
    //     }
    //     // } else if (error.includes("Password") || error.includes("password") && this.state.password.length < 6) {
    //     //     this.passwordError = error;
    //     //     this.passwordErrorStyle = "password-error-highlight";
    //     // }
    // }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.formAction(user)
    }
    
    checkErrors() {
        this.emailError = null;  
        this.passwordError = null;
        this.emailErrorStyle = "none";
        this.passwordErrorStyle = "none";

        for (let i = 0; i < this.props.errors.length; i++) {
            let error = this.props.errors[i];

            if (error.includes("Email") || error.includes("email") && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
                this.emailError = error;
                this.emailErrorStyle = "email-error-highlight";
            } else if (error.includes("Password") || error.includes("password") && this.state.password.length < 6) {
                this.passwordError = error;
                this.passwordErrorStyle = "password-error-highlight";
            }
        }
    }

    checkLoginAttempt() {
        if (!!this.props.errors.length && !this.emailError && !this.passwordError) {
            this.incorrectPasswordMessage = "Incorrect Password." 
            this.tryAgainMessage = " Please try again."
            this.invalidCredentials = "display-error-message"
        } else {
            // this.incorrectPasswordMessage = "";
            // this.tryAgainMessage = "";
            // this.invalidCredentials = "none";
        }
    }

    checkField(e) {
        // debugger
        if (!this.props.errors.length) {
            if (e.target.id === "email" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) ) {
                // debugger
                this.emailError = "Please enter a valid email or phone number.";
                this.emailErrorStyle = "email-error-highlight";
                this.setState({ error: true });
            } else {
                // debugger
                if (e.target.value.length < 6) {
                    this.passwordError = "Your password must contain between 6 and 60 characters.";
                    this.passwordErrorStyle = "password-error-highlight";
                    this.setState({ error: true });
                }
            }
        }
    }

    update(field) {
        // this.checkErrors();
        return (e) => {
            this.setState({[field]: e.target.value})    
        }
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

        const linkText = (this.props.formType === "Sign In") ? 
        "New to Netflix?" : "Already have an account?"
        
        this.checkErrors();

        return(
            <>
                <NavbarFormContainer/>
                <div className="form-background">
                    <div className="form-body">
                        <div>
                            <div className="form-content">
                                <div className="form-main"> 
                                
                                    <h1 className="formtype">{this.props.formType}</h1>

                                    <div className={`${this.invalidCredentials}`}>
                                        <span className="display-error-message-1">
                                            {this.incorrectPasswordMessage}
                                        </span>

                                        <span className="display-error-message-2">
                                            {this.tryAgainMessage}
                                        </span>
                                    </div>

                                    <form className="form" onSubmit={this.handleSubmit}>

                                        <div className="form-email-input">
                                            <div className="input">
                                                <div className="email-label-wrapper">
                                                    <label> 
                                                        <input id="email" 
                                                            className={`${this.emailErrorStyle} email-input`} 
                                                            type="text" 
                                                            value={this.state.email} 
                                                            onChange={this.update("email")}
                                                            onBlur={this.checkField}
                                                            placeholder="Email or phone number"/>

                                                        <div className="errors">{this.emailError}</div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-password-input">
                                            <div className="input">
                                                <div className="password-label-wrapper">
                                                    <label>
                                                        <input className={`${this.passwordErrorStyle} password-input`} 
                                                            type="password" 
                                                            value={this.state.password} 
                                                            onChange={this.update("password")}
                                                            onBlur={this.checkField}
                                                            placeholder="Password"/>

                                                        <div className="errors">{this.passwordError}</div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="form-button" 
                                            type="submit"
                                            onClick={this.checkLoginAttempt}>
                                                {this.props.formType}
                                        </button>

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