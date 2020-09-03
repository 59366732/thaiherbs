/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useEffect, useState } from "react";
//import example from "../assets/images_for_qanda_page.png";
import { useCombobox } from "downshift";
import { Input } from "antd";

const QandA = () => {
  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [single, setSingleUsers] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);
  return <div style={{ textAlign: "center" }}></div>;
};
export default QandA;
