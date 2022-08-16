import React, { useState } from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import { MdMenu } from 'react-icons/md'
import { MdHomeFilled } from 'react-icons/md'
import { MdAirlineSeatIndividualSuite } from 'react-icons/md'
import { MdSettings } from 'react-icons/md'

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
          <MdMenu />
        </li>
        <Link href='/'>
          <li title='Home' onClick={clickHome} style={styleHome}>
            <MdHomeFilled />
          </li>
        </Link>
        <Link href='/rooming'>
          <li title='Rooming' onClick={clickBed} style={styleBed}>
            <MdAirlineSeatIndividualSuite />
          </li>
        </Link>
        <li
          className={styles.settings}
          title='Settings'
          onClick={clickSettings}
          style={styleSettings}
        >
          <MdSettings />
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
