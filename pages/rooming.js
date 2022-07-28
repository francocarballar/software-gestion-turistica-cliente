import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Rooming.module.css'
import axios from 'axios'
import { Tab } from '../src/components/Tab'
import { ContainerRooming } from '../src/components/ContainerRooming'

export default function Rooming () {
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
        />
        <ContainerRooming filterGroupAPI={filterGroupAPI} />
      </main>
    </>
  )
}