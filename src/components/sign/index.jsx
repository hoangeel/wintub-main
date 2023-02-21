"use client"
import styles from './index.module.scss'
import {Button, Card, Col, Dropdown, Form, InputGroup, Row,} from 'react-bootstrap';
import { useRouter } from 'next/navigation';
// import React, {useState, useEffect} from 'react'
// import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
// import moment from 'moment'
// import { FaCalendarAlt } from 'react-icons/fa';
import icon from "assets/img/logo_48.png"
import Image from 'next/image';

export default function Sign() {
  const router = useRouter()
  // const [dateState, setDateState] = useState(null)

  // const changeDate = (e) => {
  //   setDateState(e)
  // }
  return (
    <div className={styles.signupBg}>     
      <Card className={styles.card}>
        <h1>Join Now</h1>
        <Row className={styles.group}>
          <Col className={styles.left} >
            <Form className={styles.form}>
              <Form.Label>First Name</Form.Label>
              <Form.Control  type="email" placeholder="" />
              <Form.Label>Birthday</Form.Label>
              <InputGroup className={styles.inputgroup}>
                <Form.Control type="date" placeholder={"hhhh"} />
                {/* <InputGroup.Text>
                  <Dropdown className={styles.Dropdown}>
                    <Dropdown.Toggle>
                      <FaCalendarAlt className={styles.icon}/>
                    </Dropdown.Toggle>
                  <Dropdown.Menu className={styles.menu}>
                    <Calendar 
                      value={dateState}
                      onChange={changeDate}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </InputGroup.Text> */}
              </InputGroup>
              <Form.Label>Email</Form.Label>
              <Form.Control  type="email" placeholder="" />
            </Form>
          </Col>
          <Col className={styles.right} >
            <Form className={styles.form}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control  type="email" placeholder="" />
              <Form.Label>Gender</Form.Label>
            </Form>
            <Form className={styles.formCheck}>
              <InputGroup className={styles.groupCheck}>
                <Form.Check 
                  type='radio'
                  label={`Male`}
                  inline
                  name="group1"
                  className={styles.check + (" ") + styles.checkLeft}
                />
                <Form.Check
                  type="radio"
                  label={`Female`}
                  inline
                  name="group1"
                  className={styles.check}
                />
              </InputGroup>
            </Form>
            <Form className={styles.form}>
              <Form.Label>Password</Form.Label>
              <Form.Control  type="email" placeholder="" />
            </Form>
          </Col>
        </Row>
        <div className={styles.reCAPTCHA}>
          <Form.Check 
            type='checkbox'
            label="Tôi không phải là người máy"
            inline
            name="group1"
            className={styles.check}
          />
          <div>
            <div><Image src={icon} alt=""/></div>
            <p>reCAPTCHA</p>
            <p><a href="">Bảo mật</a> - <a href="">Điều khoản</a></p>
          </div>
        </div>
        <Form.Label>By creating an account you are agreeing to our  <a href="">Privacy Policy</a> And <a href="">Terms of Service</a></Form.Label>
        <Button className={styles.Create}>Create Account</Button>
      </Card>
    </div>
  )
}
