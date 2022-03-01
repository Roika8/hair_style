import React, { useState } from 'react'
import './Contact.css'
export default function Contact() {
    const [message, setMessage] = useState('');
    return (
        <div className="form card">
            <h2>צור קשר</h2>
            <form>
                <div className="form-control">
                    <input type="text" value={message} name='name'
                        placeholder='תוכן הודעה' required
                        onChange={(e) => setMessage(e.target.value)} maxLength={50} />
                </div>

                <div className="form-control submit">
                    <div className='btn'>
                        <a href={`https://wa.me/+972544587669?text=${message}`} type='submit'>
                            <span className='btnLabel'> שלח הודעת ווטאצפ</span>
                        </a>
                    </div>
                </div>
            </form >
        </div >
    )
}
