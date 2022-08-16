import React from 'react'
import styles from './Group.module.css'
import { MdFolder } from 'react-icons/md'

function Group ({ name, clickGrupo, id }) {
  return (
    <>
      <input
        type='radio'
        name='grupo'
        id={id}
        className={styles.inputRadioGroup}
      />
      <label
        className={styles.grupos}
        onClick={clickGrupo}
        id={id}
        htmlFor={id}
      >
        <MdFolder />
        {name}
      </label>
    </>
  )
}

export { Group }
