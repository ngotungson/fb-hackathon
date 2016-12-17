import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookButton extends React.Component {

  responseFacebook = (response) => {
    this.props.onLogin(response);
  }

  render () {
    return (
      <div>
        <FacebookLogin
          appId="225978194514791"
          fields="name,email,picture"
          cssClass="my-facebook-button-class"
          textButton=" "
          size="small"
          icon="fa-facebook"
          callback={this.responseFacebook}
        />
      </div>
    )
  }
}

export default FacebookButton;
