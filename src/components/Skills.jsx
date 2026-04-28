import React, {useState} from 'react'

const Skills = () => {

    const[currentSkill, setCurrentSkill] = useState('')
    const[skill, setSkill] = useState([])


    function addCurrentSkill(e){
        setCurrentSkill(e.target.value)
    }

    function addSkill(){
        setSkill([...skill, currentSkill])
    }

    console.log(skill)

  return (
    <div>
        <h2>Skills</h2>
        <input onChange={addCurrentSkill} className='skillInput' type="text" placeholder='Skills: e.g. React' />
        <button onClick={addSkill}>Add More (+)</button>
    </div>
  )
}

export default Skills
