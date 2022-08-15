import React, { useEffect, useRef } from 'react'
import styles from './Settings.module.css'

function Settings ({ statusSettings, setSettings }) {
  const darkMode = () => {
    const body = document.body
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'true')
      document.documentElement.setAttribute('data-theme', true)
    } else if (!body.classList.contains('dark')) {
      localStorage.setItem('theme', 'false')
      document.documentElement.setAttribute('data-theme', false)
    }
  }
  const changePurple = () => {
    const body = document.body
    document.documentElement.setAttribute('data-color', 'purple')
    body.classList.add('purple')
    localStorage.setItem('color', 'purple')
  }
  const changeYellow = () => {
    const body = document.body
    document.documentElement.setAttribute('data-color', 'yellow')
    body.classList.add('yellow')
    localStorage.setItem('color', 'yellow')
  }
  const changeOrange = () => {
    const body = document.body
    document.documentElement.setAttribute('data-color', 'orange')
    body.classList.add('orange')
    localStorage.setItem('color', 'orange')
  }
  const changeRed = () => {
    const body = document.body
    document.documentElement.setAttribute('data-color', 'red')
    body.classList.add('red')
    localStorage.setItem('color', 'red')
  }
  const changePink = () => {
    const body = document.body
    document.documentElement.setAttribute('data-color', 'pink')
    body.classList.add('pink')
    localStorage.setItem('color', 'pink')
  }
  const changeViolet = () => {
    const body = document.body
    document.documentElement.setAttribute('data-color', 'violet')
    body.classList.add('violet')
    localStorage.setItem('color', 'violet')
  }
  const changeLightblue = () => {
    const body = document.body
    document.documentElement.setAttribute('data-color', 'lightblue')
    body.classList.add('lightblue')
    localStorage.setItem('color', 'lightblue')
  }
  const changeAquamarine = () => {
    const body = document.body
    document.documentElement.setAttribute('data-color', 'aquamarine')
    body.classList.add('aquamarine')
    localStorage.setItem('color', 'aquamarine')
  }
  const changeGreen = () => {
    const body = document.body
    document.documentElement.setAttribute('data-color', 'green')
    body.classList.add('green')
    localStorage.setItem('color', 'green')
  }
  useEffect(() => {
    const body = document.body
    if (localStorage.getItem('theme') === 'true') {
      body.classList.add('dark')
      document.documentElement.setAttribute('data-theme', true)
    } else if (localStorage.getItem('theme') === 'false') {
      body.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', false)
    }
    if (localStorage.getItem('color') === 'purple') {
      document.documentElement.setAttribute('data-color', 'purple')
    }
    if (localStorage.getItem('color') === 'yellow') {
      document.documentElement.setAttribute('data-color', 'yellow')
    }
    if (localStorage.getItem('color') === 'orange') {
      document.documentElement.setAttribute('data-color', 'orange')
    }
    if (localStorage.getItem('color') === 'red') {
      document.documentElement.setAttribute('data-color', 'red')
    }
    if (localStorage.getItem('color') === 'pink') {
      document.documentElement.setAttribute('data-color', 'pink')
    }
    if (localStorage.getItem('color') === 'violet') {
      document.documentElement.setAttribute('data-color', 'violet')
    }
    if (localStorage.getItem('color') === 'lightblue') {
      document.documentElement.setAttribute('data-color', 'lightblue')
    }
    if (localStorage.getItem('color') === 'aquamarine') {
      document.documentElement.setAttribute('data-color', 'aquamarine')
    }
    if (localStorage.getItem('color') === 'green') {
      document.documentElement.setAttribute('data-color', 'green')
    }
  })
  function useOutsideAlerter (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSettings(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <>
      {statusSettings && (
        <div className={styles.container_settings} ref={wrapperRef}>
          <div>
            <p>Elige un color:</p>
            <ul className={styles.container_colours}>
              <li className={styles.purple} onClick={changePurple} />
              <li className={styles.yellow} onClick={changeYellow} />
              <li className={styles.orange} onClick={changeOrange} />
              <li className={styles.red} onClick={changeRed} />
              <li className={styles.pink} onClick={changePink} />
              <li className={styles.violet} onClick={changeViolet} />
              <li className={styles.lightblue} onClick={changeLightblue} />
              <li className={styles.aquamarine} onClick={changeAquamarine} />
              <li className={styles.green} onClick={changeGreen} />
            </ul>
          </div>
          <div className={styles.container_darkMode}>
            <p>Dark mode:</p>
            <label className={styles.toggle_dark_mode} onClick={darkMode}>
              <span id={styles.theme} />
            </label>
          </div>
        </div>
      )}
    </>
  )
}

export { Settings }
