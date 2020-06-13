import React, { Component } from "react";
import example from "../assets/images_for_home_page.png";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>แสดงข้อมูลสมุนไพรใหม่ (pendding) มั้ย? หรือว่าไงคิดมะออก</h1>
        <img src={example} alt=""/>
      </div>
    );
  }
}

export default Home;