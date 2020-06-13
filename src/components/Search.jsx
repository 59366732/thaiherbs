import React, { PureComponent } from "react";
import { MDBCol, MDBFormInline } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Search extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <MDBCol>
            <MDBFormInline>
              <input
                style={{ alignItems: "center" }}
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              &nbsp;
              <div className="button">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontWeight: "bold" }}
                >
                  ค้นหา
                </Button>
              </div>
            </MDBFormInline>
            <small>
              แสดงข้อมูลสมุนไพรเรียงตามชื่อตัวอักษร{" "}
              <Link to="/login">คลิ้กที่นี่!</Link>
            </small>
          </MDBCol>
          <MDBCol md="5">
            <Form.Group controlId="">
              <Form.Label>ตัวเลือกการค้นหา</Form.Label>
              <Form.Control as="select">
                <option>ค้นหาด้วยชื่อสามัญภาษาไทย</option>
                <option>ค้นหาด้วยชื่อสามัญภาษาอังกฤษ</option>
                <option>คนหาด้วยชื่อวิทยาศาสตร์</option>
                <option>ค้นหาด้วยชื่อวงศ์</option>
                <option>ค้นหาด้วยสรรพคุณ</option>
              </Form.Control>
            </Form.Group>
          </MDBCol>
        </div>
      </Router>
    );
  }
}
