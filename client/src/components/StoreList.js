import React from 'react';
import { Card } from 'antd';
import '../styles/components/item.css'

class StoreList extends React.Component {

  componentDidMount = () => {
    window.FB.XFBML.parse();
  }

  render() {
    let store_lists = this.props.stores_array.map(function(item, index){
      return (
        <div className="item" key={index}>
          <div className="content">
            <div className="header store-header">{item.name}</div>
            <div className="meta">
              <span className="price">About {(item.distance.value / 1000).toFixed(1)} km</span>

            </div>
            <div className="description">
              <p>Address: {item.address}</p>
              <p>Phone: {item.phone} </p>
            </div>
          </div>
          <div className="fb-save" data-uri="http://shophoavip.com/" data-size="small">
          </div>
        </div>
      )
    })
    return (
      <div className="ui items divided">
        {store_lists}
      </div>
    )
  }
}


export default StoreList;
