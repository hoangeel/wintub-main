"use client"
import React from 'react';
import styles from './index.module.scss'
import { Button, Col, Container, Row} from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import app from "assets/img/client-1.png"
import tube from "assets/img/client-2.png"
import life from "assets/img/client-3.png"
import pub from "assets/img/client-4.png"
export default function Our() {
  const router = useRouter()
  return (
    <>
      <div className={styles.how}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <h1>Our Partners</h1>
            <p>
              We partner with over 1,500 brands to offer you videos every time.
            </p>
          </div>
          <Row className={styles.group}>
            <Col lg={3} md={4} className={styles.col}>
              <div className={styles.app}><Image src={app} alt=""/></div>
            </Col>
            <Col lg={3} md={4} className={styles.col}>
              <div className={styles.tube}><Image src={tube} alt=""/></div>
            </Col>
            <Col lg={3} md={4} className={styles.col}>
              <div className={styles.life}><Image src={life} alt=""/></div>
            </Col>
            <Col lg={3} md={4} className={styles.col}>
              <div className={styles.pub}><Image src={pub} alt=""/></div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.are}>
        <Container className={styles.container}>
          <h1>Are you ready to start earning from WinTub ?</h1>
          <Button onClick={() => router.push("./sign-up")}>Get Started</Button>
        </Container>
      </div>
    </>
  )
}


