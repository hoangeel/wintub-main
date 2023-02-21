"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from 'components/hero';
import styles from '../page.module.css'

export default function AboutUs(isPrivate={isPrivate}) {
  console.log("AboutUs >>>" + isPrivate)
  return (
    <main className={styles.main}>
      <Hero 
        title="About Us"
        text1="Who we are and what we do?"
        text3="Wintub is The most popular spot online to earn cash for watching videos for the
        everyday thing you already do online. Earn Money when  watch entertaining videos,
        finally you can get cash from Paypal, WebMoney, Bitcoin and more options.. Wintub
        has already paid out members. Put cash in your wallet. Join for free today."
      />
    </main>
  )
}
