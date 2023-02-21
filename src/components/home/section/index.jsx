"use client"
import React  from 'react';
import Image from 'next/image'
import styles from './index.module.scss'
import {Button, Container} from 'react-bootstrap';``

import img from "assets/img/back.png"
import { useRouter } from 'next/navigation';
export default function Section() {
  const router = useRouter()
  return (
      <div className={styles.section}>
        <Container className={styles.container}>
          <div className={styles.row}>
              <div className={styles.content}>
                <h1>Earn Money Watching New Videos Online</h1>
                <div className={styles.groupButton}>
                  <Button onClick={() => router.push("./sign-up")} className={styles.get}>Get Started</Button>
                  <Button onClick={() => router.push("./about-us")} className={styles.more}>More About</Button>
                </div>
              </div>
              <div className={styles.img}><Image src={img} alt=""/></div>
          </div>
        </Container>
      </div>
  )
}


