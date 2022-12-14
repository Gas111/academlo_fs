import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import InputSelect from '../components/config/InputSelect'
import BackButton from '../components/shared/BackButton'
import InputCheckbox from '../components/shared/InputCheckbox'
import { setChangeBgcDarkGlobal } from '../store/slices/changeBgc.slice'
import '../styles/config.css'

const Config = () => {
  const dispatch = useDispatch()

  const [stateCheckboxBgc, setStateCheckboxBgc] = useState(false)

  useEffect(() => {
    dispatch(setChangeBgcDarkGlobal(stateCheckboxBgc))
  }, [stateCheckboxBgc])

  return (
    <main className={`main-settings bg-${stateCheckboxBgc}`}>
      <BackButton navigateTo={`/pokedex`} />

      <h1 className="config-title">Setting</h1>

      <section className="theme-section">
        <h2>Theme</h2>
        <div className="box-checkbox">
          <span>Dark</span>
          <InputCheckbox setStateCheckbox={setStateCheckboxBgc} />
          <span>Ligth</span>
        </div>
      </section>

      <section className="items-section">
        <h2>Items per Page</h2>

        <InputSelect />
      </section>
    </main>
  )
}

export default Config
