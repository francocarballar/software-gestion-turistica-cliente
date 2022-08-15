import React, { useEffect } from 'react'
import styles from './ContainerRooming.module.css'
import axios from 'axios'

function ContainerRooming ({ filterGroupAPI }) {
  useEffect(() => {
    const filterGroup = async () => {
      try {
        await axios.get(filterGroupAPI).then(response => {
          const data = response.data.data
          const tbody = document.querySelector('#tbody')
          const todos_tr = document.querySelectorAll('#tbody tr')
          todos_tr.forEach(tr => tbody.removeChild(tr))
          data.map(elem => {
            const tr = document.createElement('tr')
            // Data Apellido
            const td_Apellido = document.createElement('td')
            td_Apellido.innerText = elem.attributes.Apellido
            tr.appendChild(td_Apellido)
            // Data Nombre
            const td_Nombre = document.createElement('td')
            td_Nombre.innerText = elem.attributes.Nombre
            tr.appendChild(td_Nombre)
            // Data DNI
            const td_DNI = document.createElement('td')
            td_DNI.innerText = elem.attributes.DNI
            tr.appendChild(td_DNI)
            // Data Nacimiento
            const td_Nacimiento = document.createElement('td')
            td_Nacimiento.innerText = elem.attributes.Nacimiento
            tr.appendChild(td_Nacimiento)
            // Data TipoHabitacion
            const td_TipoHabitacion = document.createElement('td')
            td_TipoHabitacion.innerText = elem.attributes.TipoHabitacion
            tr.appendChild(td_TipoHabitacion)
            // Data NumeroHabitacion
            const td_NumeroHabitacion = document.createElement('td')
            td_NumeroHabitacion.innerText = elem.attributes.NumeroHabitacion
            tr.appendChild(td_NumeroHabitacion)
            // Data FechaDeIngreso
            const td_FechaDeIngreso = document.createElement('td')
            td_FechaDeIngreso.innerText = elem.attributes.FechaDeIngreso
            tr.appendChild(td_FechaDeIngreso)
            // Data FechaDeEgreso
            const td_FechaDeEgreso = document.createElement('td')
            td_FechaDeEgreso.innerText = elem.attributes.FechaDeEgreso
            tr.appendChild(td_FechaDeEgreso)
            tbody.appendChild(tr)
          })
        })
      } catch (error) {
        console.log(error)
      }
    }
    filterGroup()
  })
  return (
    <section className={styles.section_container}>
      <table className={styles.table_container}>
        <tbody>
          <tr className={styles.tr_data}>
            <td className={styles.td_Apellido}>Apellido</td>
            <td className={styles.td_Nombre}>Nombre</td>
            <td className={styles.td_DNI}>DNI</td>
            <td className={styles.td_Nacimiento}>Nacimiento</td>
            <td className={styles.td_TipoHab}>Tipo Habitación</td>
            <td className={styles.td_NumeroHab}>N° Habitación</td>
            <td className={styles.td_INT}>INT</td>
            <td className={styles.td_OUT}>OUT</td>
          </tr>
        </tbody>
        <tbody id='tbody' />
      </table>
    </section>
  )
}

export { ContainerRooming }
