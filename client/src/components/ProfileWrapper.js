import React from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';


function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"> Profile </Menu.Item>
    <Menu.Item key="2"> Logout  </Menu.Item>

  </Menu>
);

class ProfileWrapper extends React.Component {

  render () {
    return (
      <div>
        <Dropdown overlay={menu}>
          <Button type="ghost" style={{ marginLeft: 8 }}>
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
