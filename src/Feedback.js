
import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';

const Feedback = () => {
    const [formx, setFormx] = useState({
        uname: '',
        uemail: '',
        answer: ''
    })

    const handleChange = (e)=>{
        e.preventDefault()
        setFormx({...formx,[e.target.id]:e.target.value})
        console.log(formx)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:7778/feedback/add",formx)

    };

    return (
        <div className="feedback-container">
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="uname"
                        onChange={handleChange}

                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="uemail"
                        onChange={handleChange}

                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea
                        id="answer"

                        required
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;