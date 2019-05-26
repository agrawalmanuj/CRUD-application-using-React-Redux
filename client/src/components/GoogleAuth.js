import React from 'react';
import { connect } from 'react-redux';
import {signIn,signOut} from '../actions';


class GoogleAuth extends React.Component {

   // state = {isSignedIn:null};

    componentDidMount(){
        window.gapi.load('client:auth2',() => {

            window.gapi.client.init({
                clientId:'135441113314-s205c7ufn37k364dvk8k6mtsdksppg0i.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {

                this.auth=window.gapi.auth2.getAuthInstance();
              //  this.setState({isSignedIn: this.auth.isSignedIn.get() });
               this.onAuthChange(this.auth.isSignedIn.get()); // intial authntication value
                this.auth.isSignedIn.listen(this.onAuthChange); // no invocation because it is callback
                
            });

        });
       
        
    }

    /*onAuthChange = () => {                                         //arrow function because it is callback
        this.setState({isSignedIn: this.auth.isSignedIn.get() }); 
      // console.log(5);      
    }*/

    onAuthChange = isSignedIn => {

       // console.log(this.state.isSignedIn);

        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
           
        }
        else{
            this.props.signOut();
           
        }
    };

    onSignOutClick = () => {
     this.auth.signOut();   
    }

    onSignInClick = () => {
        this.auth.signIn();   
       }

    renderAuthButton() {
        if(this.props.isSignedIn === null){
       return null;
            
        }

        else if(this.props.isSignedIn){
        return (// callback pe () nhi lagaate , islie bhi nhi kyonki nhi to ye dono function starting me hi call ho jaayenge
            <button onClick={this.onSignOutClick} className="ui button red google"> 
            <i className="google icon" />
            Sign Out
            </button>
        );
        }

        else{
            return (
                <button onClick={this.onSignInClick} className="ui button red google">
                <i className="google icon" />
                Sign In with Google
                </button>
            );
        }
    }


    



    render(){
        
       // console.log(window.gapi.load('client:Auth2'));
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);

//export default GoogleAuth;