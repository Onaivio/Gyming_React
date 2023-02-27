import { Link } from "react-router-dom"
import "./notFound.css"

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        {/* <img src="../../images/404 error with portals-pana.svg" className="404-Error" alt="Page Not Found" /> */}
        <h1>404 Error</h1>
        <h2>Page Not Found</h2>
        <Link to = "/"  className = "btn">Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound