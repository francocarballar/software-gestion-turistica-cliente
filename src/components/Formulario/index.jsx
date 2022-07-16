import React from 'react'
import styles from './Formulario.module.css'

function Formulario ({ nombreGrupo }) {
  const grupo = `Grupo ${nombreGrupo}`
  return (
    <>
      <h4 className={styles.titleGrupo}>{grupo}</h4>
      <form action='' method='' className={styles.formulario}>
        <label htmlFor='Apellido'>
          <input
            type='text'
            name='Apellido'
            id='Apellido'
            placeholder='Apellido'
            required
          />
        </label>
        <label htmlFor='Nombre'>
          <input
            type='text'
            name='Nombre'
            id='Nombre'
            placeholder='Nombre'
            required
          />
        </label>
        <label htmlFor='DNI'>
          <input type='number' name='DNI' id='DNI' placeholder='DNI' required />
        </label>
        <label htmlFor='Nacimiento'>
          <input
            type='date'
            name='Nacimiento'
            id='Nacimiento'
            placeholder='Feach de nacimiento'
            required
          />
        </label>
        <select name='TipoHabitacion'>
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
            required
          />
        </label>
        <label htmlFor='FechaIngreso'>
          <input
            type='date'
            name='FechaIngreso'
            id='FechaIngreso'
            placeholder='Fecha de Ingreso'
            required
          />
        </label>
        <label htmlFor='FechaEgrego'>
          <input
            type='date'
            name='FechaEgrego'
            id='FechaEgrego'
            placeholder='Fecha de Egrego'
            required
          />
        </label>
        <label htmlFor='Enviar' className={styles.labelEnviar}>
          <input type='submit' name='Enviar' id={styles.enviar} />
        </label>
      </form>
    </>
  )
}

export { Formulario }
