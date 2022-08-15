import React, { useEffect, useState } from 'react'
import styles from './Tab.module.css'
import axios from 'axios'

function Tab ({ filterGroupAPI, setFilterGroupAPI }) {
  const [cantidadPax, setCantidadPax] = useState(0)
  let groups_API = 'https://software-gestion-turistica.herokuapp.com/api/groups'
  useEffect(() => {
    const getGroups = async () => {
      try {
        await axios.get(groups_API).then(response => {
          const data = response.data.data
          data.map(group => {
            const select = document.querySelector('#select_group')
            const value = select.value
            setFilterGroupAPI(
              `https://software-gestion-turistica.herokuapp.com/api/tables?filters[group][NombreGrupo][$contains]=${value}`
            )
            const option = document.createElement('option')
            option.innerText = group.attributes.NombreGrupo
            option.value = group.attributes.NombreGrupo
            select.appendChild(option)
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
  useEffect(() => {
    const filterGroup = async () => {
      try {
        await axios.get(filterGroupAPI).then(response => {
          const data = response.data.data
          setCantidadPax(data.length)
          console.log(data.length)
          data.map(data => console.log(data))
        })
      } catch (error) {
        console.log(error)
      }
    }
    filterGroup()
  })
  const pax = `Cantidad Pax ${cantidadPax}`
  return (
    <div className={styles.tabs}>
      <div className={styles.tab}>
        <div className={styles.tab_box}>
          <select
            id='select_group'
            onChange={e => {
              setFilterGroupAPI(
                `https://software-gestion-turistica.herokuapp.com/api/tables?filters[group][NombreGrupo][$contains]=${e.target.value}`
              )
            }}
          />
        </div>
      </div>
      <div className={styles.container_pax}>
        <p>{pax}</p>
      </div>
    </div>
  )
}

export { Tab }
