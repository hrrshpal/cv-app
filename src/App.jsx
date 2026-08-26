import { useState } from 'react'
import Resume from './components/Resume'
import EducationalExperience from './components/EducationalExperience';
import Experience from './components/Experience'
import GeneralInformation from './components/GeneralInformation';
import Skills from './components/Skills';
import '../src/styles/App.css'


function App() {

  const [info, setInfo] = useState({ name: "", email: "", phone: "", address: "", city: "", zipcode: "", summary: "" })
  const [experienceInfo, setExperienceInfo] = useState([{ id: crypto.randomUUID(), jobtitle: '', employer: '', city: '', startdate: '', enddate: '', description: ''}])
  const [experienceList, setExperienceList] = useState([1]);
  const [educationInfo, setEducationInfo] = useState([{ id: crypto.randomUUID(), degree: '', school: '', city: '', startdate: '', enddate: '', description: ''}])
  const [educationList, setEducationList] = useState([1]);
  const [currentSkill, setCurrentSkill] = useState('')
  const [skill, setSkill] = useState('')
    

  return (
    <>
      <h1>MakeMy<span style={{color: "#b56b45", textDecoration:"underline"}}>CV</span></h1>

      <div className='app'>
        <div className="sidebar">
          <GeneralInformation info = {info} setInfo = {setInfo} />
          <Experience experienceList = {experienceList} setExperienceList={setExperienceList} experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
          <EducationalExperience educationList = {educationList} setEducationList = {setEducationList} educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
          <Skills skill={skill} setSkill={setSkill} currentSkill = {currentSkill} setCurrentSkill = {setCurrentSkill} />
        </div>

        <Resume info={info} educationInfo={educationInfo} experienceInfo={experienceInfo}/>
      </div>
    </>
  )
}

export default App
