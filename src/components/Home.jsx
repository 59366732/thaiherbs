import React from "react";
import example from "../assets/images_for_home_page.png";
const Home = () => {
  return (
    <div style={{ textAlign: "center"}}>
      <h1>แสดงข้อมูลสมุนไพรใหม่ (pendding) มั้ย? หรือว่าไงคิดมะออก</h1>
      <img src={example} alt="" />
    </div>
  );
}
export default Home;
