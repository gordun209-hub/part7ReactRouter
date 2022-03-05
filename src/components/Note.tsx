import { FC } from 'react'
import { useParams } from 'react-router-dom'

type note = {
  id: number
  content: string
  important: boolean
  user: string
}

type notes = {
  notes: note[]
}

export const Note: FC<notes> = ({ notes }) => {
  const id = useParams().id

  const note = notes.find(n => n.id === Number(id))
  return (
    <div>
      <h2>{note?.content}</h2>
      <div>{note?.user}</div>
      <div>
        <strong>{note?.important ? 'important' : ''}</strong>
      </div>
    </div>
  )
}
