import React from 'react';
import { Row, Col, Card,  } from 'antd';
import axios from 'axios';
import '../styles/library/antd.css';
import '../styles/components/App.css';
import SelectLocationWrapper from '../components/SelectLocationWrapper';
import StoreList from '../components/StoreList';
import Slider from '../components/Slider';
import Spinner from '../components/Spinner';


class App extends React.Component {
  constructor(props) {
    super();
    this.state={
      searchQuery: "",
      isStoreLoading: false,
      isStoreSearching: false
    }
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
            isStoreLoading: false
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
      colRightRender = <StoreList />
    }


    return (
      <div className="app">
        <Row className="app-header">
          <Col span={24}>
            <h2> Wellcome to Lovely Gifts </h2>
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
      </div>
    )
  }
}


export default App;
