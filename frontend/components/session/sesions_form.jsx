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

        const linkText = (this.props.formType === "Sign In") ? 
            "New to Netflix?" : "Already have an account?"
            
        return(
            <>
            {/* <div> */}
            
                <NavbarFormContainer/>
                {/* <div className="form-page">
                    <div className="session-form">
                        <form className="form" onSubmit={this.handleSubmit}>

                            <h2 className="formtype">{this.props.formType}</h2>

                            <div>
                                <input className="email" type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email or phone number"/>
                                <div className="errors">{this.props.errors[0]}</div>
                            </div>
                           

                            <div>
                                <input className="password" type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"/>
                                <div className="errors">{this.props.errors[1]}</div>
                            </div>
                           
                            <input className="submit-button" type="submit" value={this.props.formType}/>
                        
                            {demo}
                            
                            {linkText}

                            <Link className="link-button" 
                                to={formlink} 
                                onClick={this.props.clearErrors}>
                                    {linkName}
                            </Link>

                        </form>
                    </div>
                </div>
            </div> */}
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
                                                <input id="email" className="email-input" type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email or phone number"/>
                                                <div className="errors">{this.props.errors[0]}</div>
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
                                                    <input className="password-input" type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"/>
                                                    <div className="errors">{this.props.errors[1]}</div>
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