import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import "./index.css"

const DoctorCard = ({doctorDetails}) => {
    const {doctorName, specialization, doctorId, availability} = doctorDetails
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate(`/doctor/${doctorId}`)
    }
    return (
        <div className="doctor-card">
            <img src="https://static.vecteezy.com/system/resources/previews/036/453/521/large_2x/ai-generated-medical-hospital-doctor-image-by-ai-generator-free-photo.jpg" 
                alt="Doctor image" className="doctor-image" />
            <div className="doctor-card-details">
                <h3 className="doctor-name">{doctorName}</h3>
                <p className="specialization">{specialization}</p>
                <p className="availability">{availability}</p>
            </div>
            <hr />
            <button onClick={onClickHandler} type="button">Book Appointment</button>
        </div>
    )
}

export default DoctorCard