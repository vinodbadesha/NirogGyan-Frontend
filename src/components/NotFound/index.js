import './index.css'

const NotFound = () => (
    <div className="not-found-container">
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696455.jpg"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We’re sorry, the page you requested could not be found
      </p>
    </div>
)

export default NotFound