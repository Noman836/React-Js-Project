import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const MyForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        selectedOption: '',
        errors: {},
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, selectedOption } = formData;
        const errors = {};

        if (!username.trim()) {
            errors.username = 'Username is required';
        }

        if (!selectedOption) {
            errors.selectedOption = 'Please select an option';
        }

        if (Object.keys(errors).length === 0) {
            console.log('Form is valid');
        } else {
            setFormData({
                ...formData,
                errors,
            });
        }
    };

    const { username, selectedOption, errors } = formData;

    return (
        <>
            <div className='container-form'>
                <div className='Form-title'><h1>Add Sector Details</h1></div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleInputChange}
                        />
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>
                    <div>
                        <label htmlFor="selectOption">Select an option:</label>
                        <select
                            id="selectOption"
                            name="selectedOption"
                            value={selectedOption}
                            onChange={handleInputChange}
                        >
                            <option value="">-- Please select --</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        {errors.selectedOption && <span className="error">{errors.selectedOption}</span>}
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className='form-btn-container'>
                        <button type="submit">Submit</button>
                        <Link className="edit-btn" to="/">Back</Link>
                    </div>
                </form>
            </div>
        </>
    );

};

export default MyForm;
