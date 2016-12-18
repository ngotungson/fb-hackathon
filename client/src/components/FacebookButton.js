import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookButton extends React.Component {

  responseFacebook = (response) => {
    console.log(response);
    this.props.onLogin(response);
  }

  render () {
    return (
      <div>
        <FacebookLogin
          appId="225978194514791"
          autoLoad={false}
          fields="name,email,picture"
          cssClass="my-facebook-button-class"
          textButton=" Log in"
          size="small"
          icon="fa-facebook"
          callback={this.responseFacebook}
        />
      </div>
    )
  }
}

export default FacebookButton;
