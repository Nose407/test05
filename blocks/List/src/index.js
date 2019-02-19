import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class List extends Component {
  static displayName = 'List';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="listbox">
          <h4 className="title">这里是标题</h4>
          <h4 className="body">这里是内容</h4>
        </div>
        <div className="listbox">
          <h4 className="title">这里是标题</h4>
          <h4 className="body">这里是内容</h4>
        </div>
        <div className="listbox">
          <h4 className="title">这里是标题</h4>
          <h4 className="body">这里是内容</h4>
        </div>
        <div className="listbox">
          <h4 className="title">这里是标题</h4>
          <h4 className="body">这里是内容</h4>
        </div>
        <div className="listbox">
          <h4 className="title">这里是标题</h4>
          <h4 className="body">这里是内容</h4>
        </div>
        <div className="listbox">
          <h4 className="title">这里是标题</h4>
          <h4 className="body">这里是内容</h4>
        </div>
      </div>
    );
  }
}

const styles = {

}
