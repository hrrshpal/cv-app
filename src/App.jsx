import { useState } from 'react'
import './components/GeneralInformation.jsx'
import GeneralInformation from './components/GeneralInformation.jsx'
import EducationalExperience from './components/EducationalExperience.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'

function App() {
  

  return (
    <>
      <h1>CV Builder</h1>
      <GeneralInformation />
      <EducationalExperience />
      <Experience />
      <Skills />
    </>
  )
}

export default App
