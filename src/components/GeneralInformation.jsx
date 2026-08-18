import React, { useState } from 'react'
import '../styles/GeneralInfo.css'

const GeneralInformation = ({ info, setInfo }) => {

    const [isEditing, setIsEditing] = useState(true)

    function handleChange(e) {
        const { name, value } = e.target

        setInfo({
            ...info,
            [name]: value
        })
    }

    function handleEdit() {
        setIsEditing(true)
    }

    function handleSave() {
        setIsEditing(false)
    }

    return (
        <section className="general-section">

            <h2>General Information</h2>

            <div className="general-card">

                <input
                    value={info.name}
                    disabled={!isEditing}
                    onChange={handleChange}
                    name="name"
                    required
                    type="text"
                    placeholder="Full Name"
                />

                <input
                    value={info.email}
                    disabled={!isEditing}
                    onChange={handleChange}
                    name="email"
                    required
                    type="email"
                    placeholder="Email"
                />

                <input
                    value={info.phone}
                    disabled={!isEditing}
                    onChange={handleChange}
                    name="phone"
                    required
                    type="tel"
                    placeholder="Contact Number"
                />

                <input
                    value={info.address}
                    disabled={!isEditing}
                    onChange={handleChange}
                    name="address"
                    required
                    type="text"
                    placeholder="Address"
                />

                <div className="location-row">

                    <input
                        value={info.city}
                        disabled={!isEditing}
                        onChange={handleChange}
                        name="city"
                        required
                        type="text"
                        placeholder="City"
                    />

                    <input
                        value={info.zipcode}
                        disabled={!isEditing}
                        onChange={handleChange}
                        name="zipcode"
                        required
                        type="number"
                        placeholder="Zipcode"
                    />

                </div>

                <textarea
                    value={info.summary}
                    disabled={!isEditing}
                    onChange={handleChange}
                    name="summary"
                    required
                    placeholder="Professional Summary"
                />

            </div>

            <button
                className="general-button"
                onClick={isEditing ? handleSave : handleEdit}
            >
                {isEditing ? 'Save Information' : 'Edit Information'}
            </button>

        </section>
    )
}

export default GeneralInformation