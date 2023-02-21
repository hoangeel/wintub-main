"use client"
import styles from './index.module.scss'
import {Button, Card, Col, Form, Row,} from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function Log() {
  const router = useRouter()
  return (
    <div className={styles.log}>     
      <Card className={styles.card}>
        <h1>Log In</h1>
        <Row >
          <Col className={styles.col} >
            <Form>
              <Form.Label>Email</Form.Label>
              <Form.Control  type="email" placeholder="" />
            </Form>
          </Col>
          <Col className={styles.col} >
            <Form >
              <Form.Label>Password</Form.Label>
              <Form.Control  type="email" placeholder="" />
            </Form>
          </Col>
        </Row>
        <Button>Log in to my account</Button>
        <br/>
        <div className={styles.sign}><a onClick={() => router.push("./sign-up")}>Sign up</a></div>
      </Card>
    </div>
  )
}
