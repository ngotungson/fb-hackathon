import React from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';


class ProfileWrapper extends React.Component {

  handleMenuClick = (e) => {
    console.log(e);
    if (e.key == "1") {
      this.props.onLogout();
    }
  }

  render = () => {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item  key="1"> Logout  </Menu.Item>
      </Menu>
    );

    console.log(this.props.user);
    

    return (
      <div className="profile-wrapper">
        <Dropdown overlay={menu}>
          <Button type="ghost" style={{ marginLeft: 8, marginBotton: 20 }}>
             <img src={this.props.user.picture.data.url}  style={{width: "30px", verticalAlign: "middle"}}/>
             <span> {this.props.user.name} </span>
             <Icon type="setting" />
          </Button>
        </Dropdown>
      </div>
    )
  }
}

export default ProfileWrapper;
