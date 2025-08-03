import AppointmentForm from "../AppointmentForm"
import { DoctorContext } from "../../context/doctorsContext"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import "./index.css"
import { IoLanguage } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import Footer from "../Footer"

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}

const DoctorSpecificPage = () => {
    const {doctorId} = useParams()
    const {filteredDoctorsList} = useContext(DoctorContext)

    const doctor = filteredDoctorsList.find(doc => doc.doctorId === Number(doctorId))

    if (!doctor){
        return (
            <div className="doctor-not-found-view">
                <p className="no-results-found">No Results Found.</p>
                <p>The page you have requested could not be found.</p>
            </div>
        )
    }

    const services = doctor.services.split(",")

    return (
        <>
            <div className="doctor-details-view">
                <div className="doctor-information-container">
                    <div className="doctor-brief-card">
                        <img src="https://static.vecteezy.com/system/resources/previews/036/453/521/large_2x/ai-generated-medical-hospital-doctor-image-by-ai-generator-free-photo.jpg" 
                            alt="doctor image" className="doctor-details-image" />
                        <div>
                            <p className="doc-name">{doctor.doctorName}</p>
                            <p className="doc-info"><strong>{doctor.experience}+</strong> years experience as 
                                <strong> {doctor.specialization}</strong></p>
                            <p className="doc-info"><IoLanguage className="lang-icon" /> {doctor.languages}</p>
                            <p className="doc-info"><MdEventAvailable className="lang-icon" />{doctor.availability}</p>
                        </div>
                    </div>
                    <div className="description-container">
                        <h2>Profile</h2>
                        <p>{doctor.description}</p>
                    </div>
                    <div className="services-container">
                        <h2>Medical Conditions Treated</h2>
                        <ul>
                            {services.map(eachService => (
                                <li key={eachService}>{eachService.trim()}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <AppointmentForm />
            </div>
            <Footer />
        </>
    )
}

export default DoctorSpecificPage