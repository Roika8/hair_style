import React from 'react'
import smaple from '../images/sample.png'
import './Description.css';
export default function Description() {
    return (
        <section className='description'>
            <div className="container">
                <h3 className="description-heading text-center my-1 ">
                    הינה כמה תמונת שיכולות למשממ אתכם לדוגמאות
                </h3>
                <div className="grid grid-3 text-center my-4">
                    <img src={smaple} alt="image" className="image" />
                    <img src={smaple} alt="image" className="image" />
                    <img src={smaple} alt="image" className="image" />
                    <img src={smaple} alt="image" className="image" />
                    <img src={smaple} alt="image" className="image" />
                    <img src={smaple} alt="image" className="image" />

                </div>
            </div>
        </section>
    )
}
