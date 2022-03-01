import React from 'react'
import './Opener.css'
export default function Opener() {
    return (
        < >
            <section className='showcase'>
                <div className='container grid'>
                    <div className="showcase-text">
                        <div className='header'>שזירות שיער בכל הצבעים</div>
                        <p>  להיות מיוחדת
                            <br />
                            .להרגיש נוצצת.. מהרגע שאת קמה... ולאורך כל היום
                            <br />
                            .להיות זוהרת לכל אירוע, מסיבה או הופעה
                            <br />
                            .שזירת חוטים נוצצים שיתנו לך הרגשה של פיה, משתלבים בתוך השיער, לכל סוגי השיער, לכל צבע ובהתאמה אישית.
                            <br />
                            נשארים עד חודש ימים ללא צורך לשנות דבר משגרת הטיפוח היומיומית
                            <div className="callContainer">
                                <div className='btn contact'>
                                    <div>
                                        <a href="https://wa.me/+972544587669?text=היי , אני מעוניינת לקבוע תור לצבע לשיער">
                                            <span className="btnLabel"> 054-4587-669</span>
                                        </a>
                                    </div>
                                    <div className='nameDiv'>רויטל</div>
                                    <div className='phoneDiv'>לחיצה על המספר תעביר אותך לצאט ווטצאפ</div>
                                </div>
                                <div className='callDiv'>
                                    :קבעי עכשיו
                                </div>
                            </div>

                        </p>
                    </div>
                    <div className="showcase-card card">
                        Video
                    </div>
                </div>
            </section>

        </>
    )
}
