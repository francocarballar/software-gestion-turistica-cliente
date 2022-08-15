import React from 'react'
import styles from './Group.module.css'

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
        <span className='material-symbols-outlined' translate='no'>
          folder
        </span>
        {name}
      </label>
    </>
  )
}

export { Group }
