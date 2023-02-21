"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import styles from './index.module.scss'
import {Button, Container, Nav, Offcanvas, Stack} from 'react-bootstrap';
import { FcMenu } from 'react-icons/fc';
import logo from "assets/img/logo.png"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
const privateRoutes = ['/',"/sign-up","/login","/about-us", "/contact-us"];

export default function Header() {
  const router = useRouter()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const pathname = usePathname();
	const isPrivate = privateRoutes.indexOf(pathname)
  console.log(privateRoutes.indexOf(pathname))
  console.log(isPrivate + "abc")
  return (
      <div className={styles.header}>
        <Container className={styles.container}>
          <Stack direction="horizontal">
            <div className={styles.logo} onClick={() => router.push('/')}><Image src={logo} alt="logo"/></div>
            <Nav
              className={styles.nav}
              activeKey="/"
            >
              <Nav.Item className={styles.item}>
                <Nav.Link href="/">{isPrivate == 0 ? (<span>Home</span>) : "Home" }</Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.item}>
                <Nav.Link href="/sign-up">{isPrivate == 1 ? (<span>Sign Up</span>) : "Sign Up" }</Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.item}>
                <Nav.Link href="/login" >{isPrivate == 2 ? (<span>Log In</span>) : "Log In" }</Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.item + (" ") + styles.about}>
                <Nav.Link href="/about-us">{isPrivate == 3 ? (<span>About Us</span>) : "About Us" }</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className={styles.menu}>
              <Button className={styles.iconmenu} onClick={handleShow}>
                  <FcMenu className={styles.icon}/>
              </Button>
              <Offcanvas className={styles.offcanvas} show={show} onHide={handleClose} placement="start">
                <h3 onClick={() => router.push('/')}>Home</h3>
                <h3 onClick={() => router.push('/login')}>Sign Up</h3>
                <h3 onClick={() => router.push('/sign-up')}>Log In</h3>
                <h3 onClick={() => router.push('/login')}>About Us</h3>
                <div className={styles.clone}><p onClick={handleClose}>X</p></div>
              </Offcanvas>
            </div>
          </Stack>
        </Container>
      </div>
  )
}


