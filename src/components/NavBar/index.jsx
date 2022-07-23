import React, { useState } from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'

function NavBar ({ setSettings, statusSettings }) {
  const styleSpan = {
    color: 'var(--background-color)',
    backgroundColor: 'var(--primary-color)'
  }
  const [styleHome, setStyleHome] = useState({})
  const [styleBed, setStyleBed] = useState({})
  const [styleSettings, setStyleSettings] = useState({})
  const clickHome = () => {
    setStyleHome(styleSpan)
    setStyleBed({})
    setStyleSettings({})
  }
  const clickBed = () => {
    setStyleHome({})
    setStyleBed(styleSpan)
    setStyleSettings({})
  }
  const clickSettings = () => {
    if (statusSettings === false) {
      setStyleSettings(styleSpan)
    }
    if (statusSettings === true) {
      setStyleSettings({})
    }
    setStyleHome({})
    setStyleBed({})
    setSettings(!statusSettings)
  }
  return (
    <nav className={styles.navBar}>
      <ul>
        <li className={styles.menu} title='Menu'>
          <span className='material-symbols-outlined'>menu</span>
        </li>
        <Link href='/'>
          <li title='Home' onClick={clickHome} style={styleHome}>
            <span className='material-symbols-outlined'>home</span>
          </li>
        </Link>
        <Link href='/rooming'>
          <li title='Rooming' onClick={clickBed} style={styleBed}>
            <span className='material-symbols-outlined'>
              airline_seat_individual_suite
            </span>
          </li>
        </Link>
        <li
          className={styles.settings}
          title='Settings'
          onClick={clickSettings}
          style={styleSettings}
        >
          <span className='material-symbols-outlined'>settings</span>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
