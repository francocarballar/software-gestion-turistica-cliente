import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Rooming.module.css'
import { Tab } from '../src/components/Tab'
import { ContainerRooming } from '../src/components/ContainerRooming'

export default function Rooming ({ userID }) {
  const [filterGroupAPI, setFilterGroupAPI] = useState('')
  return (
    <>
      <Head>
        <title>Rooming | Software de gestión turística</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main className={styles.main}>
        <Tab
          filterGroupAPI={filterGroupAPI}
          setFilterGroupAPI={setFilterGroupAPI}
          userID={userID}
        />
        <ContainerRooming filterGroupAPI={filterGroupAPI} userID={userID} />
      </main>
    </>
  )
}
