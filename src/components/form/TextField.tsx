import { ChangeEvent, FC } from 'react'

import './Textfield.scss'

interface Props {
  id: string,
  type: string,
  label: string,
  setState: (value: any) => void,
  state: any,
  error: boolean
}

const TextField: FC<Props> = ({
  id,
  type,
  label,
  setState,
  state,
  error
}) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setState(target.value)
  }

  return (
    <div data-error={error} className='textfield'>
      <label className='label' htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea className='input textarea' onChange={handleChange} value={state} id={id} name={id} />
      ) : (
        <input className='input' onChange={handleChange} value={state} type={type} id={id} name={id} />
      )}
    </div>
  )
}

export default TextField
