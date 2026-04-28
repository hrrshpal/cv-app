import React, {useState} from 'react'

const GeneralInformation = () => {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipcode: '',
        summary:''
    })

    function handleChange(e){
        const {name, value} = e.target
        const newObj = {...info}
        newObj.name = value
        setInfo(newObj)
    }
    
  return (
    <>
        <h2>General Information</h2>
        <div>
            <input onChange={handleChange} name="name" required type="text" className="name" placeholder='John Doe'/>
            <input onChange={handleChange} name="email" required type="text" className="email" placeholder='abc@xyz.com' />
            <input onChange={handleChange} name="phone" required type="tel" className="phone" placeholder='+91-XXXXX-XXXXX' />
            <input onChange={handleChange} name="address" required type="text" className="address" placeholder='Jane Street' />
            <input onChange={handleChange} name="city" required type="text" className="city" placeholder='Gotham City' />
            <input onChange={handleChange} name="zipcode" required type="number" className="zipcode" placeholder='XXXXXX' />
            <textarea onChange={handleChange} name="summary" required type="textarea" className="summary" placeholder='My Summary' />
        </div>
    </>
  )
}

export default GeneralInformation
