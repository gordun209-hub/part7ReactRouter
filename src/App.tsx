import { useState } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'

import { Note } from './components/Note'
import { Notes } from './components/Notes'
import { Users } from './components/Users'

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry &rsquo s standard dummy text ever since
      the 1500s, when an unknown printer took a galley of type and scrambled it
      to make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </div>
)
export interface Inotes {
  id: number
  content: string
  user: string
  important: boolean
}
const Login = (props: { onLogin: (arg0: string) => void }) => {
  const navigate = useNavigate()

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input type='password' />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

const App = () => {
  interface INotes {
    id: number
    content: string
    important: boolean
    user: string
  }
  const [notes, setNotes] = useState<INotes[]>([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen'
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen'
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas'
    }
  ])

  const [user, setUser] = useState<string | null>(null)

  const login = (user: string) => {
    setUser(user)
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <Router>
        <div>
          <Link style={padding} to='/'>
            home
          </Link>
          <Link style={padding} to='/notes'>
            notes
          </Link>
          <Link style={padding} to='/users'>
            users
          </Link>
          {user ? (
            <em>{user} logged in</em>
          ) : (
            <Link style={padding} to='/login'>
              login
            </Link>
          )}
        </div>

        <Routes>
          <Route path='/notes/:id' element={<Note notes={notes} />} />
          <Route path='/notes' element={<Notes notes={notes} />} />
          <Route
            path='/users'
            element={user ? <Users /> : <Navigate replace to='/login' />}
          />
          <Route path='/login' element={<Login onLogin={login} />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <div>
        <br />
        <em>Note app, Department of Computer Science 2022</em>
      </div>
    </div>
  )
}
export default App
