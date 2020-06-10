/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

//Material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className = 'nav-container'>
                <h3>เว็บชุมชนสมุนไพรไทย</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color= "inherit" component = {Link} to='/'>หน้าแรก</Button>
                    <Button color= "inherit" component = {Link} to='/signup'>ลงทะเบียน</Button>
                    <Button color= "inherit" component = {Link} to='/login'>ลงชื่อเข้าใช้</Button>
                    <Button color= "inherit" component = {Link} to='/search'>ค้นหาสมุนไพร</Button>
                    <Button color= "inherit" component = {Link} to='/q_and_a'>ถาม-ตอบ</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar
