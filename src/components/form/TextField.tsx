import { FC } from 'react'

import './Textfield.scss'

interface Props {
  id: string,
  type: string,
  label: string,
}

const TextField: FC<Props> = ({
  id,
  type,
  label
}) => {
  return (
    <div className='textfield'>
      <label className='label' htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea className='input textarea' id={id} name={id} />
      ) : (
        <input className='input' type={type} id={id} name={id} />
      )}
    </div>
  )
}

export default TextField
