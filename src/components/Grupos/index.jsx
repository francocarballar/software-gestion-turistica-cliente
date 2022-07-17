import React, { useState } from 'react'
import styles from './Grupos.module.css'

function Grupos ({ setNombreGrupo }) {
  const [id, setId] = useState('')
  const [statusClick, setClick] = useState(false)
  const [statusContainerAgregarGrupos, setContainerAgragarGrupos] = useState(
    false
  )
  const [inputGroupValue, setInputGroupValue] = useState('')
  const clickGrupo = e => {
    const click = e.target
    const text = e.target.innerText
    const textTransform = text.replace('folder', '')
    click.setAttribute('id', textTransform)
    const id = e.target.id
    setId(id)
    setClick(!statusClick)
    if (statusClick === false) {
      e.target.style =
        'color: var(--background-color); background-color: var(--primary-color)'
    } else if (statusClick === true) {
      e.target.style =
        'color: var(--text-color); background-color: var(--background-secondary-color)'
    }
    setNombreGrupo(textTransform)
  }
  const agregarGrupo = () => {
    setContainerAgragarGrupos(true)
  }
  const buttonAgregarGrupo = () => {
    const containerGrupos = document.querySelector('.container_grupos')
    const grupo = document.createElement('div')
    grupo.setAttribute('class', 'Grupos_grupos__eloGA')
    grupo.innerText = `${inputGroupValue}`
    grupo.setAttribute('onclick', clickGrupo)
    const span = document.createElement('span')
    span.setAttribute('class', 'material-symbols-outlined')
    span.innerText = 'folder'
    grupo.appendChild(span)
    containerGrupos.appendChild(grupo)
    setContainerAgragarGrupos(false)
  }
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.agregarGrupo} onClick={agregarGrupo}>
          + Agregar nuevo grupo
        </p>
      </div>
      {statusContainerAgregarGrupos && (
        <div className={styles.containerAgregarGrupos}>
          <input
            type='text'
            placeholder='Nombre del grupo'
            required
            onChange={e => {
              setInputGroupValue(e.target.value)
            }}
          />
          <button
            type='button'
            id={styles.buttonAgregarGrupo}
            onClick={buttonAgregarGrupo}
          >
            Agregar
          </button>
        </div>
      )}
      <div className='container_grupos'></div>
    </div>
  )
}

export { Grupos }
