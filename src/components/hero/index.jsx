"use client"
import styles from './index.module.scss'
import {Col, Container, Row,} from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import img from "assets/img/k5-Zv-Sa-Tieq.jpg"
import Image from 'next/image';

const Hero = ({title, text1, text2, text3, text4, text5}) => {
    return (
      <div className={styles.about}>
        <Container className={styles.container}>
          <h1>{title}</h1>
          <hr />
          <Row>
            <Col lg={6} className={styles.col}>
              <div className={styles.img}><Image src={img} alt="" /></div>
            </Col>
            <Col lg={6} className={styles.col}>
              <br />
              <br />
              <br />
              <div className={styles.textContact}>
                <h2>{text1}</h2>
                <h2 className={styles.what}>{text2}</h2>
                <p><b>{text3}</b></p>
                <h3>{text4} <a href="">{text5}</a></h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Hero