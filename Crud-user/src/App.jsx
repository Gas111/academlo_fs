import { useEffect, useState } from 'react'
import '../src/styles/App.css'
import FormUsers from './components/FormUsers'
import axios from 'axios'
import UserCard from './components/UserCard'
import Header from './components/Header'

function App() {
  const [users, setUsers] = useState()
  const [userToUpdate, setUserToUpdate] = useState({})
  const [formVisible, setFormVisible] = useState(false)

  const baseURL = 'https://users-crud1.herokuapp.com'

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`

    axios
      .get(URL)
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = (data) => {
    const URL = `${baseURL}/users/`

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data)
        getAllUsers()
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  const deleteUser = (id) => {
    const URL = `${baseURL}/users/${id}/`

    axios
      .delete(URL)
      .then((res) => {
        getAllUsers()
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  const updateUser = (data, id) => {
    const URL = `${baseURL}/users/${id}/`

    axios
      .patch(URL, data)
      .then((res) => {
        getAllUsers()
        setUserToUpdate('')
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  return (
    <div className="App">
      
      <FormUsers
        createNewUser={createNewUser}
        userToUpdate={userToUpdate}
        updateUser={updateUser}
        formVisible={formVisible}
        setFormVisible={setFormVisible}
      />

   <section className={`section ${formVisible ? "vi-false":"vi-true"}`}>
      <Header setFormVisible={setFormVisible}/>

     <main className='main'>
      {users?.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setUserToUpdate={setUserToUpdate}
          setFormVisible={setFormVisible}
        />
      ))}
      </main>
      </section>
 </div>
  )
}

export default App
