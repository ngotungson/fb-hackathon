import React from 'react';
import { Form, Input, Select, Button, Row } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const provinceData = ['Hà Nội'];
const districtData = {
  'Hà Nội': ['Đan Phuong', 'Cau Giay', 'Hoan Kiem'],
};
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const SelectLocationWrapper = React.createClass({
  getInitialState() {
    return {
      province: provinceData[0],
      districts: districtData[provinceData[0]],
      district: districtData[provinceData[0]][0],
      street: ''
    };
  },
  onProvinceChange(value) {
    this.setState({
      districts: districtData[value],
      district: districtData[value][0],
    });
  },
  onDistrictChange(value) {
    this.setState({
      district: value,
    });
  },

  onStreetChange(e) {
    this.setState({
      street: e.target.value
    })
  },

  onSubmit(e) {
    e.preventDefault();
    let newQuery = this.state.street + ',' + this.state.district + ','
      + this.state.province;
    this.props.onSearchChange(newQuery)
  },

  render() {
    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
    const districtOptions = this.state.districts.map(district => <Option key={district}>{district}</Option>);
    return (
      <div>
        <Form horizontal onSubmit={this.onSubmit}>
          <FormItem {...formItemLayout} label="Province">
            <Select defaultValue={provinceData[0]} onChange={this.onProvinceChange}>
              {provinceOptions}
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="District">
            <Select value={this.state.district} onChange={this.onDistrictChange}>
              {districtOptions}
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="Street">
            <Input value={this.state.street} onChange={this.onStreetChange} placeholder="Basic usage" />
          </FormItem>
          <Row>
            <Button id="search-button" type="primary" htmlType="submit" size="large" style={{width: "100%"}}>Search</Button>
          </Row>
        </Form>
      </div>
    );
  },
});

export default SelectLocationWrapper;
