import React, { useEffect, useState } from 'react'
import styles from './Grupos.module.css'
import axios from 'axios'

// Para filtrar las personas por los grupos hay que hacerlo de la siguiente manera https://software-gestion-turistica.herokuapp.com/api/tables?filters[group][NombreGrupo][$contains]=Ejemplo

function Grupos ({ setNombreGrupo, userID, setGrupoID }) {
  const [id, setId] = useState('')
  const [statusClick, setClick] = useState(false)
  const [statusContainerAgregarGrupos, setContainerAgragarGrupos] = useState(
    false
  )
  const [inputGroupValue, setInputGroupValue] = useState('')
  let groups_API = 'https://software-gestion-turistica.herokuapp.com/api/groups'
  useEffect(() => {
    const getGroups = async () => {
      try {
        await axios.get(groups_API).then(response => {
          const data = response.data.data
          data.map(elem => {
            const nombreGrupo = elem.attributes.NombreGrupo
            const idGrupo = elem.id
            const containerGrupos = document.querySelector('.container_grupos')
            const grupo = document.createElement('div')
            grupo.setAttribute('class', 'Grupos_grupos__eloGA')
            grupo.innerText = `${nombreGrupo}`
            grupo.setAttribute('id', idGrupo)
            const span = document.createElement('span')
            span.setAttribute('class', 'material-symbols-outlined')
            span.innerText = 'folder'
            grupo.appendChild(span)
            containerGrupos.appendChild(grupo)
          })
        })
      } catch (error) {
        console.log(error)
      }
    }
    getGroups()
    return () => {
      groups_API = ''
    }
  }, [])
  const crearGrupo = async () => {
    await axios
      .post(groups_API, {
        headers: {
          'Content-Type': 'application/json',
          Athorization: `Bearer ${userID}`
        },
        data: {
          NombreGrupo: `${inputGroupValue}`
        }
      })
      .catch(error => console.log(error))
  }
  useEffect(() => {
    const clickGrupo = e => {
      const text = e.target.innerText
      const textTransform = text.replace('folder', '')
      const id = e.target.id
      setGrupoID(id)
      setClick(!statusClick)
      setNombreGrupo(textTransform)
      if (statusClick === false) {
        e.target.style =
          'color: var(--background-color); background-color: var(--primary-color)'
      } else if (statusClick === true) {
        e.target.style =
          'color: var(--text-color); background-color: var(--background-secondary-color)'
      }
    }
    const grupo = document.querySelectorAll('.container_grupos div')
    grupo.forEach(elem => {
      elem.addEventListener('click', clickGrupo)
    })
  })
  const agregarGrupo = () => {
    setContainerAgragarGrupos(true)
  }
  const buttonAgregarGrupo = () => {
    const containerGrupos = document.querySelector('.container_grupos')
    const grupo = document.createElement('div')
    grupo.setAttribute('class', 'Grupos_grupos__eloGA')
    grupo.innerText = `${inputGroupValue}`
    const span = document.createElement('span')
    span.setAttribute('class', 'material-symbols-outlined')
    span.setAttribute('translate', 'no')
    span.innerText = 'folder'
    grupo.appendChild(span)
    containerGrupos.appendChild(grupo)
    setContainerAgragarGrupos(false)
    crearGrupo()
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
