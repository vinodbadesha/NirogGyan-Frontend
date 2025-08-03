import { createContext, useState, useEffect } from "react";

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}

const formattedDate = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth()+1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")

    return `${day}/${month}/${year}`
}

const formattedTime = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")

    return `${hours}:${minutes}`
}

export const today = formattedDate()
export const presentTime = formattedTime()

export const DoctorContext = createContext()

export const DoctorProvider = ({children}) => {
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
    const [doctorsList, setDoctorsList] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [patientName, setPatientName] = useState("")
    const [patientEmail, setPatientEmail] = useState("")
    const [appointmentDate, setAppointmentDate] = useState(today)
    const [appointmentTime, setAppointmentTime] = useState(presentTime)
  
    useEffect(() => {
        allDoctorsList()
    }, [])
  
    const allDoctorsList = async () => {
        setApiStatus(apiStatusConstants.inProgress)
        const apiUrl = "https://niroggyan-es0u.onrender.com/doctors"
          
        const data = await fetch(apiUrl)
  
        if (data.ok === true){
        const doctorsData = await data.json()
        const updatedData = doctorsData.map(each => ({
            doctorId: each.doctor_id,
            doctorName: each.doctor_name,
            specialization: each.specialization,
            availability: each.availability,
            experience: each.experience,
            languages: each.languages,
            description: each.description,
            services: each.services
        }))
        setApiStatus(apiStatusConstants.success)
        setDoctorsList(updatedData)
        }
        else{
        setApiStatus(apiStatusConstants.failure)
    }
  }
  
  const filteredDoctorsList = doctorsList.filter(each => {
    return (
      each.doctorName.toLowerCase().includes(searchInput.toLowerCase()) || 
      each.specialization.toLowerCase().includes(searchInput.toLowerCase())
      )
    })

    return (
        <DoctorContext.Provider 
            value={{
                apiStatus, filteredDoctorsList, searchInput, setSearchInput, patientName, setPatientName, 
                setPatientEmail, patientEmail, appointmentTime, setAppointmentTime,
                appointmentDate, setAppointmentDate
            }}>
            {children}
        </DoctorContext.Provider>
    )
}
