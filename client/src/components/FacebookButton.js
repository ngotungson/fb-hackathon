import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

class FacebookButton extends React.Component {

  render () {
    return (
      <div>
        <FacebookLogin
          appId="225978194514791"
          autoLoad={true}
          fields="name,email,picture"
          cssClass="my-facebook-button-class"
          textButton=" "
          size="small"
          icon="fa-facebook"
          callback={responseFacebook} />
      </div>
    )
  }
}

export default FacebookButton;
