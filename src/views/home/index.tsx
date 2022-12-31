import React from 'react';
import './index.css';
import { getDataone, getPostData } from '../../api/index';
import ChildCom from '../child';
import { Button } from 'antd';

export default class HomeCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '触发请求',
      name: '测试',
    };
  }
  getState() {
    getPostData();
    getPostData();
    console.log('触发请求');
    getDataone();
    getDataone();
  }

  changeName() {
    console.log('changeName---->');
    this.setState({
      name: '哈哈哈哈哈',
    });
  }

  render(): React.ReactNode {
    return (
      <div className="home-container">
        <button className="btn" onClick={() => this.getState()}>
          {this.state.text}
        </button>
        <ChildCom name={this.state.name} changeName={this.changeName.bind(this)}></ChildCom>
      </div>
    );
  }
}
