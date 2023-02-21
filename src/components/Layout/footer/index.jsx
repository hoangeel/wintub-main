"use client"
import React from 'react';
import styles from './index.module.scss'
import { Container} from 'react-bootstrap';
import { useRouter } from 'next/navigation';
export default function Footer() {
  const router = useRouter()
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>WinTub</h1>
            <p>Wintub is The most popular spot online to earn cash for watching videos.</p>
          </div>
          <div className={styles.right}>
            <h1>Useful Links</h1>
            <a href='/'>Home</a>
            <a href='about-us'>About us</a>
            <a href='contact-us'>Contact us</a>
            <a href=''>Terms of service</a>
            <a href=''>Privacy policy</a>
          </div>
        </div>
      </Container>
      <div className={styles.end}><p>© Copyright <strong>WINTUB</strong>. All Rights Reserved</p></div>
    </div>
  )
}


