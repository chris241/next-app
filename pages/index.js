import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  React from 'react';
import { CookieBanner } from '@keepist/react-gdpr-cookie-banner';


export default function Home() {

  return (

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      Bonjour à tous
      <div className={styles.react}>
      <CookieBanner  
      message="Cookie banner message"
      onAcceptPreferences = {() => { 
        // load your preferences trackers here
      }}
      onAcceptStatistics = {() => {
        // load your statistics trackers here
      }}
      onAcceptMarketing = {() => {
        styles={
          container
        }
      }}
    />
    </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
