"use client"
import React, { useState } from 'react';
import styles from './index.module.scss'
import {Col, Container, Card, Row} from 'react-bootstrap';

import { FaTv, FaUsers } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
export default function How() {
  const router = useRouter()
  return (
      <div className={styles.how}>
        <Container className={styles.container}>
          <div className={styles.content}>
            <h1>How does it work?</h1>
            <p>
              We have partners at WinTube, love share multiple videos. 
              <br/>
              So why not get paid by watching videos online in your free time ? 
              <br/>
              we pay you cash simply for watching short videos or TV show trailers.
            </p>
          </div>
          <Row className={styles.group}>
            <Col lg={4} className={styles.col}>
              <Card className={styles.card + (" ") + styles.watch}>
                <FaTv className={styles.icon}/>
                <h2>Watch Videos</h2>
                <p>commercial ads, movies, and TV shows online It’s the perfect way to earn money at WinTub.</p>
              </Card>
            </Col>
            <Col lg={4} className={styles.col}>
              <Card className={styles.card + (" ") + styles.refer}>
                <FaUsers className={styles.icon}/>
                <h2>Refer your friends</h2>
                <p>We'll confirm as soon as your friend joins. You get $1 and Your friend gets $5.</p>
              </Card>
            </Col>
            <Col lg={4} className={styles.col}>
              <Card className={styles.card + (" ") + styles.get}>
                <FaTv className={styles.icon}/>
                <h2>Get paid</h2>
                <p>As the money flows in, you can transfer it to your bank account, PayPal account and more options.. </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  )
}


