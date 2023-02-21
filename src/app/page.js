"use client"
import How from 'components/home/how'
import Our from 'components/home/our'
import Section from 'components/home/section'
import styles from './page.module.css'



export default function Home() {
  return (
    <main className={styles.main}>
      <Section/>
      <How/>
      <Our/>
    </main>
  )
}
