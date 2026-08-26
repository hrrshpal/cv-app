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
  const [skills, setSkills] = useState('')
  const [skillset, setSkillset] = useState([])
    

  return (
    <>
      <div className='header' style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
        <h1>MakeMy<span style={{color: "#b56b45", textDecoration:"underline"}}>CV</span></h1>
        <button style={{backgroundColor: "#b56b45", color:"white", padding:"10px 20px", border: "none", cursor:"pointer"}} 
          onClick={() => window.print()}
        >Download CV</button>
      </div>

      <div className='app'>
        <div className="sidebar">
          <GeneralInformation info = {info} setInfo = {setInfo} />
          <Experience experienceList = {experienceList} setExperienceList={setExperienceList} experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
          <EducationalExperience educationList = {educationList} setEducationList = {setEducationList} educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
          <Skills skills={skills} setSkills={setSkills} skillset={skillset} setSkillset = {setSkillset} />
        </div>

        <Resume info={info} educationInfo={educationInfo} experienceInfo={experienceInfo} skillset={skillset} />
      </div>
    </>
  )
}

export default App
