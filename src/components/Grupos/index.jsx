import React, { useState, useEffect } from 'react'
import styles from './Grupos.module.css'
import axios from 'axios'
import { Group } from '../Group'

// Para filtrar las personas por los grupos hay que hacerlo de la siguiente manera https://software-gestion-turistica.herokuapp.com/api/tables?filters[group][NombreGrupo][$contains]=Ejemplo

function Grupos ({ setNombreGrupo, userID, setGrupoID }) {
  const [loadingGroups, setLoadingGroups] = useState(true)
  const [statusContainerAgregarGrupos, setContainerAgragarGrupos] = useState(
    false
  )
  const [inputGroupValue, setInputGroupValue] = useState('')
  const [grupos, setGrupos] = useState([])
  const groups_API =
    'https://software-gestion-turistica.herokuapp.com/api/groups'
  const options = {
    method: 'GET',
    url: groups_API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userID}`
    }
  }
  useEffect(() => {
    const getGroups = async () => {
      await axios
        .request(options)
        .then(response => {
          setGrupos(response.data.data)
        })
        .catch(error => console.log(error))
    }
    getGroups()
    setLoadingGroups(false)
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
  const clickGrupo = e => {
    const text = e.target.innerText
    const textTransform = text.replace('folder', '')
    const id = e.target.id
    setGrupoID(id)
    setNombreGrupo(textTransform)
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
      {loadingGroups && <p>Cargando los grupos...</p>}
      <div className='container_grupos'>
        {grupos.map(grupo => (
          <Group
            name={grupo.attributes.NombreGrupo}
            clickGrupo={clickGrupo}
            key={grupo.id}
            id={grupo.id}
          />
        ))}
      </div>
    </div>
  )
}

export { Grupos }
