import React from 'react';
import { Row, Col, Card, message } from 'antd';
import axios from 'axios';
import '../styles/library/antd.css';
import '../styles/components/App.css';
import FacebookButton from '../components/FacebookButton'
import SelectLocationWrapper from '../components/SelectLocationWrapper';
import StoreList from '../components/StoreList';
import Slider from '../components/Slider';
import Spinner from '../components/Spinner';
import ProfileWrapper from '../components/ProfileWrapper';
import PlacesBox from '../components/PlacesBox';

class App extends React.Component {
  constructor(props) {
    super();
    this.state={
      searchQuery: "",
      isStoreLoading: false,
      isStoreSearching: false,
      stores_data: [],
      user: {},
      isLogined: false
    }
  }


  handleLogin = (user) => {
    this.setState({
      user: user,
      isLogined: true
    }, function() {
      console.log("login")
      message.success("Log in successfully", 5)
    })
  }

  handleLogout = () => {
    this.setState({
      isLogined: false
    }, function() {
      message.success("Log out successfully", 5)
    })
  }

  handleSearchChange = (newQuery) => {
    this.setState({
      searchQuery: newQuery,
      isStoreSearching: true,
      isStoreLoading: true
    }, function () {
      axios.get(`http://localhost:3001/stores/search?origins=${this.state.searchQuery}`)
        .then(function(data) {
          this.setState({
            isStoreLoading: false,
            stores_array: data.data
          })
        }.bind(this))
    }.bind(this))
  }

  render () {

    let colRightRender = null;
    if (!this.state.isStoreLoading && !this.state.isStoreSearching) {
      colRightRender = <Slider />
    }
    else if (this.state.isStoreLoading && this.state.isStoreSearching) {
      colRightRender = <Spinner />
    }
    else if (!this.state.isStoreLoading && this.state.isStoreSearching) {
      colRightRender = <StoreList stores_array={this.state.stores_array}/>
    }

    console.log(this.state.isLogined);
    let loginContent = null;
    if (!this.state.isLogined) {
      loginContent=<FacebookButton onLogin={this.handleLogin} />
    } else {
      loginContent=<ProfileWrapper user={this.state.user}  onLogout={this.handleLogout} />
    }


    return (
      <div className="app">
        <Row className="app-header">
          <Col span={24}>
            <h2 className="header-intro"> Wellcome to Lovely Gifts </h2>
            <h2 className="header-login">
              {loginContent}
          </h2>
          </Col>
        </Row>

        <Row>
          <Col span={8}>
            <Card className="card">
              <SelectLocationWrapper
                onSearchChange={this.handleSearchChange}
              />
            </Card>
          </Col>
          <Col span={16}>
            <Card className="card">
              {colRightRender}
            </Card>
          </Col>
        </Row>

        <Row>
        </Row>
      </div>
    )
  }
}


export default App;
