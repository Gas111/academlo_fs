import React from 'react'
import InputSelect from '../components/pokedex/InputSelect'
import BackButton from '../components/shared/BackButton'
import InputCheckbox from '../components/shared/InputCheckbox'
import '../styles/config.css'

const Config = () => {
  return (
    <main className="main-settings">
      <BackButton navigateTo={`/`} />

      <h1 className="config-title">Setting</h1>

      <section className="theme-section">
        <h2>Theme</h2>
        <InputCheckbox />
      </section>

      <section className="items-section">
        <h2>Items per Page</h2>

        <InputSelect />
      </section>
    </main>
  )
}

export default Config
