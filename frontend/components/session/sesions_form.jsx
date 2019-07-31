import React from 'react';

class SessionForm extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit(e){

    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        // debugger
        return(
            <div className="session-form">

                <form onSubmit={this.handleSubmit}>
                    <label> Email
                        <input type="email" value={this.state.email} onChange={this.update("email")}/>
                    </label>

                    <label> Password
                   <input type="password" value={this.state.password} onChange={this.update("password")}/>
                    </label>

                    <input type="submit" value="Submit"/>
                </form>

            </div>
        )
    }
}

export default SessionForm;