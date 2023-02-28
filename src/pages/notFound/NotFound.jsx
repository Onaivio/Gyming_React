import { Link } from "react-router-dom"
import "./notFound.css"
// import ErrorPhoto from "../../images/error.png"

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        {/* <img src={ErrorPhoto} className="404-Error" alt="Page Not Found" /> */}
        <h1>404 Error</h1>
        <h2>Page Not Found</h2>
        <Link to = "/"  className = "btn">Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound