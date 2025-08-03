import { DoctorContext } from "../../context/doctorsContext"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { today, presentTime } from "../../context/doctorsContext"
import "./index.css"

const AppointmentForm = () => {
    const {
        patientName, setPatientName, setPatientEmail, 
        patientEmail, appointmentTime, setAppointmentTime, 
        appointmentDate, setAppointmentDate
    } = useContext(DoctorContext)

    const [showPopup, setShowPopup] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()

        if (patientName.trim() === "" || patientEmail.trim() === "" || appointmentDate === "" || appointmentTime === ""){
            setErrorMessage("All Fields Are Required")
            return 
        }
        
        setErrorMessage("")
        setShowPopup(true)

       setTimeout(() => {
        setShowPopup(false)
        setPatientName("")
        setPatientEmail("")
        setAppointmentDate(today)
        setAppointmentTime(presentTime)

        navigate("/")
       }, 2000)
        
    }

    return (
        <>
        <form onSubmit={onSubmitForm}>
            <h1>Book Your Doctor.</h1>
            <label htmlFor="patientName">Name</label>
            <input id="patientName" type="text" placeholder="Enter Your Name" value={patientName} onChange={event => setPatientName(event.target.value)} />
            <label htmlFor="patientEmail">Email</label>
            <input id="patientEmail" type="email" placeholder="Enter Your Email" value={patientEmail} onChange={event => setPatientEmail(event.target.value)} />
            <label htmlFor="appointmentDate">Select Appointment Date</label>
            <input type="date" id="appointmentDate" value={appointmentDate} onChange={event => setAppointmentDate(event.target.value)} />
            <label htmlFor="appointmentTime">Choose Time Slot</label>
            <input type="time" id="appointmentTime" value={appointmentTime} onChange={event => setAppointmentTime(event.target.value)} />
            <button type="submit">Book Appointment</button>
            {errorMessage && <p>{errorMessage}</p>}
        </form>
        {showPopup && (
            <div className="popup-container">
                <div className="popup-content">
                <img src="https://img.freepik.com/premium-photo/3d-checkbox-check-mark-3d-illustration_115990-1426.jpg" 
                    alt="successful" className="success-image" />
                <p>Appointment Booked Successfully</p>
                </div>
            </div>
        )}
        </>
    )
}

export default AppointmentForm