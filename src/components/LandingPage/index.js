import { ThreeDots } from 'react-loader-spinner'
import { useState, useEffect, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import DoctorCard from '../DoctorCard';
import { DoctorContext } from '../../context/doctorsContext';
import Footer from '../Footer';
import "./index.css"

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}

const LandingPage = () => {
    const {apiStatus, filteredDoctorsList, searchInput, setSearchInput} = useContext(DoctorContext)

    const renderLoadingView = () => (
        <div className="loader-container" data-testid="loader">
          <ThreeDots type="ThreeDots" color="black" height="50" width="50" />
        </div>
    )

    const renderFailureView = () => (
        <div className="failure-container">
            <h1>There is an error loading the details. Please try again later.</h1>
        </div>
    )

    const renderSuccessView = () => {
        return (    
            <ul className='doctors-list'>
                {filteredDoctorsList.map(eachDoctor => (
                    <li key={eachDoctor.doctorId}>
                        <DoctorCard doctorDetails={eachDoctor} />
                    </li>
                ))}
            </ul>
        )
    }

    const renderNoSearchResultsView = () => (
        <div className='no-search-results-view'>
            <img src='https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696458.jpg' 
                alt='No Search Results Found'
                className='no-results-found-image' />
            <p>No results found.</p>
            <p>Please Try Again.</p>
        </div>
    )

    const renderDoctorsList = () => {
        switch (apiStatus){
            case apiStatusConstants.success:
                if (filteredDoctorsList.length === 0){
                    return renderNoSearchResultsView()
                }
                else{
                    return renderSuccessView()
                }
            case apiStatusConstants.failure:
                return renderFailureView()
            case apiStatusConstants.inProgress:
                return renderLoadingView()
            default:
                return null
        }
    }

    

    return (
        <>
            <div className="landing-page">
                <p className="landing-page-matter">Welcome to <strong>NirogGyan</strong></p>
                <p className='landing-page-matter'>Your trusted platform for effortless doctor appointments.
                    Connect with experienced specialists across multiple departments, all in one place.
                </p>
                <p className='landing-page-matter quality-text'>Quality care, simplified.</p>
                <div className="search-container">
                    <div className="search-icon-container">
                        <IoSearch className="search-icon" />
                    </div>
                    <input type="search" placeholder="Search by Doctor name or Speciality" className="search-box" 
                        value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
                </div>

                <p className='landing-page-matter'>Trusted and Verified doctors.</p>
                <p className='landing-page-matter'>Book appointment now.</p>
                {renderDoctorsList()}
            </div>
            <Footer />
        </>
    )
}

export default LandingPage