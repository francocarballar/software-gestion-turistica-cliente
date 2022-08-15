import React, { useEffect, useState } from 'react'
import styles from './Formulario.module.css'
import axios from 'axios'

function Formulario ({ nombreGrupo, userID, grupoID }) {
  const grupo = `Grupo ${nombreGrupo}`
  const [Apellido, setApellido] = useState('')
  const [Nombre, setNombre] = useState('')
  const [DNI, setDNI] = useState('')
  const [Nacimiento, setNacimiento] = useState('')
  const [TipoHabitacion, setTipoHabitacion] = useState('')
  const [NumeroHabitacion, setNumeroHabitacion] = useState('')
  const [FechaIngreso, setFechaIngreso] = useState('')
  const [FechaEgreso, setFechaEgreso] = useState('')
  const tables_API =
    'https://software-gestion-turistica.herokuapp.com/api/tables'
  useEffect(() => {
    const inputTipoHabitacion = document.querySelector('#TipoHabitacion')
    setTipoHabitacion(inputTipoHabitacion.value)
  }, [])
  const submitForm = async e => {
    e.preventDefault()
    try {
      await axios.post(tables_API, {
        headers: {
          'Content-Type': 'application/json',
          Athorization: `Bearer ${userID}`
        },
        data: {
          Apellido,
          Nombre,
          DNI,
          Nacimiento,
          TipoHabitacion,
          NumeroHabitacion,
          FechaDeIngreso: FechaIngreso,
          FechaDeEgreso: FechaEgreso,
          group: grupoID
        }
      })
    } catch (error) {
      console.log(error)
    }
    const input = document.querySelectorAll(
      '.Formulario_formulario__qJLZu input'
    )
    input.forEach(elem => (elem.value = ''))
  }
  return (
    <>
      <h4 className={styles.titleGrupo}>{grupo}</h4>
      <form onSubmit={submitForm} className={styles.formulario}>
        <label htmlFor='Apellido'>
          <input
            type='text'
            name='Apellido'
            id='Apellido'
            placeholder='Apellido'
            required
            onChange={e => setApellido(e.target.value)}
          />
        </label>
        <label htmlFor='Nombre'>
          <input
            type='text'
            name='Nombre'
            id='Nombre'
            placeholder='Nombre'
            required
            onChange={e => setNombre(e.target.value)}
          />
        </label>
        <label htmlFor='DNI'>
          <input
            type='number'
            name='DNI'
            id='DNI'
            placeholder='DNI'
            required
            onChange={e => setDNI(e.target.value)}
          />
        </label>
        <label htmlFor='Nacimiento'>
          Fecha de Nacimiento
          <input
            type='date'
            name='Nacimiento'
            id='Nacimiento'
            placeholder='Feach de nacimiento'
            required
            onChange={e => setNacimiento(e.target.value)}
          />
        </label>
        <select
          name='TipoHabitacion'
          id='TipoHabitacion'
          onChange={e => setTipoHabitacion(e.target.value)}
        >
          <option value='Doble Twin' name='Doble Twin'>
            Doble Twin
          </option>
          <option value='Doble Matrimonial' name='Doble Matrimonial'>
            Doble Matrimonial
          </option>
          <option value='Triple Twin' name='Triple Twin'>
            Triple Twin
          </option>
          <option value='Triple Matrimonial' name='Triple Matrimonial'>
            Triple Matrimonial
          </option>
          <option value='Cuádruple Matrimonial' name='Cuádruple Matrimonial'>
            Cuádruple Matrimonial
          </option>
        </select>
        <label htmlFor='NumeroHabitacion'>
          <input
            type='number'
            name='NumeroHabitacion'
            id='NumeroHabitacion'
            placeholder='Numero de habitación'
            onChange={e => setNumeroHabitacion(e.target.value)}
          />
        </label>
        <label htmlFor='FechaIngreso'>
          Fecha de Ingreso
          <input
            type='date'
            name='FechaIngreso'
            id='FechaIngreso'
            placeholder='Fecha de Ingreso'
            required
            onChange={e => setFechaIngreso(e.target.value)}
          />
        </label>
        <label htmlFor='FechaEgrego'>
          Fecha de Egreso
          <input
            type='date'
            name='FechaEgrego'
            id='FechaEgreso'
            placeholder='Fecha de Egrego'
            required
            onChange={e => setFechaEgreso(e.target.value)}
          />
        </label>
        <label htmlFor='Enviar' className={styles.labelEnviar}>
          <button type='submit' name='Enviar' id={styles.enviar}>
            Enviar
          </button>
        </label>
      </form>
    </>
  )
}

export { Formulario }
