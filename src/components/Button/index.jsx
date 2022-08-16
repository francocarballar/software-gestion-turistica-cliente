import React from 'react'
import styles from './Button.module.css'

function Button ({ type, name, text }) {
  return (
    <button type={type} name={name} className={styles.button}>
      {text}
    </button>
  )
}

export default Button
