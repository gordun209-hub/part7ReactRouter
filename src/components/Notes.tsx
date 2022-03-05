import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Inotes {
  notes: { id: number; content: string; important: boolean; user: string }[]
}
export const Notes: FC<Inotes> = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>{note.content}</Link>
        </li>
      ))}
    </ul>
  </div>
)
