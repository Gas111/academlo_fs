import React from 'react'
import FormHome from '../components/home/FormHome'
import '../styles/home.css'
import ButtonConfig from '../components/shared/ButtonConfig'
import PokeBall from '../components/shared/PokeBall'
import {useSelector } from 'react-redux'
import '../styles/changeBgcDark.css'

const Home = () => {

  // const changeBgcDark=useSelector(state=>state.changeBgcDark)
  // console.log(changeBgcDark)

  return (
    // <main className={`main-home bg-${changeBgcDark}`}>
     <main className={`main-home`}>
      <PokeBall />
      <section className="first-box">
        <div className="second-box">
          <h2 className="title">Hello trainer!</h2>
          <div className="image">
            <img
              src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"
              alt="image of trainer"
            />
          </div>
        </div>
        <p>Give me your name tu start</p>
        <div>
          <FormHome />
        </div>
      </section>

      <ButtonConfig />
    </main>
  )
}

export default Home
