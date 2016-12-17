import React from 'react';
import { Row, Col, Card,  } from 'antd';
import axios from 'axios';
import '../styles/library/antd.css';
import '../styles/components/App.css';
import SelectLocationWrapper from '../components/SelectLocationWrapper';

class App extends React.Component {
  constructor(props) {
    super();
    this.state={
      searchQuery: ""
    }
  }

  handleSearchChange = (newQuery) => {
    this.setState({
      searchQuery: newQuery
    }, function () {
      axios.get(`http://localhost:3001/stores/search?origins=${this.state.searchQuery}`)
        .then(function(data) {
          console.log(data);
        })
    }.bind(this))
  }

  render () {
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

            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


export default App;
