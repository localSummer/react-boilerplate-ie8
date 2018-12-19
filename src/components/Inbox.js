import React from "react";
import axios from "axios";
import json3 from "json3";
import "../media/css/test.less";
import title from "../media/images/title.png";
import DatePicker from "antd/lib/date-picker";

class Inbox extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    console.log("发送请求");
    axios
      .get("http://jsonplaceholder.typicode.com/posts?userId=1")
      .then(result => {
        console.log(result);
        // console.log(json3.parse(result.data))
        console.log("set State");
        if (result.data.code === 1) {
          this.setState({
            data: result.data
          });
        } else {
          this.setState({
            data: result.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    let obj = { name: [1, 2], age: 2 };
    Object.keys(obj).forEach(item => {
      if (item === "name") {
        if (obj[item].includes(2)) {
          console.log(1);
        } else {
          console.log(3);
        }
      } else {
        console.log(obj[item]);
      }
    });
  }

  handleClick = () => {
    let { history } = this.props;
    history.push("/inbox/messages/1");
  };

  handleCount = () => {
    let { history } = this.props;
    history.push("/count");
  };

  handleVideo = () => {
    let { history } = this.props;
    history.push("/video");
  };

  handleVideo2 = () => {
    let { history } = this.props;
    history.push("/video2");
  };

  handleVideo3 = () => {
    let { history } = this.props;
    history.push("/video3");
  };

  handleVideo4 = () => {
    let { history } = this.props;
    history.push("/video4");
  };

  handleChange = (value, dateString) => {
    console.log(value, dateString);
  };

  render() {
    console.log(this.props);
    let { data } = this.state;
    return (
      <div>
        <h2>Inbox</h2>
        <img src={title} />
        <button onClick={this.handleClick}>
          <span>go messages</span>
        </button>
        <button onClick={this.handleCount}>go count</button>
        <button onClick={this.handleVideo}>go video</button>
        <button onClick={this.handleVideo2}>go video2</button>
        <button onClick={this.handleVideo3}>go video3</button>
        <button onClick={this.handleVideo4}>go video4</button>
        {this.props.children || "Welcome to your Inbox"}
        {data ? (
          data.map(item => {
            return <div key={item.id}>{item.title + "-" + item.id}</div>;
          })
        ) : (
          <div>没有setState</div>
        )}
        <DatePicker onChange={this.handleChange} />
      </div>
    );
  }
}

export default Inbox;
