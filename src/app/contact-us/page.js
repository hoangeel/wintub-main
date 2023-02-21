"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from 'components/hero';
import styles from '../page.module.css'

export default function ContactUs(isPrivate={isPrivate}) {
  console.log("ContactUs >>>" + isPrivate)
  return (
    <main className={styles.main}>
      <Hero 
        title="Contatct Us"
        text1="Customer Support"
        text2="What can we help you with?"
        text3="Wintub is here to provide you with more information, and create an effective solution for your needs."
        text4="Email us at"
        text5="support@wintub.com"
      />
    </main>
  )
}
