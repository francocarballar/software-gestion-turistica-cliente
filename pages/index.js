import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { Formulario } from '../src/components/Formulario'
import { Grupos } from '../src/components/Grupos'

export default function Home ({ userID }) {
  const [nombreGrupo, setNombreGrupo] = useState('')
  const [grupoID, setGrupoID] = useState('')
  return (
    <>
      <Head>
        <title>Home | Software de gestión turística</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main className={styles.main}>
        <div className={styles.container_sections}>
          <section className={styles.section_formulario}>
            <Formulario
              nombreGrupo={nombreGrupo}
              userID={userID}
              grupoID={grupoID}
            />
          </section>
          <section className={styles.section_grupos}>
            <Grupos
              setNombreGrupo={setNombreGrupo}
              userID={userID}
              setGrupoID={setGrupoID}
            />
          </section>
        </div>
      </main>
    </>
  )
}
