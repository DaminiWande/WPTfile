import { Link } from "react-router-dom"
import { logout } from "./reduxExamples/login/LoginSlicer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Menu() {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.loginReducer.auth)
    const signOut = useSelector((state) => state.loginReducer.signOut)
    const navigate = useNavigate()
    useEffect(() => {
        if (signOut) {
            navigate("/login")
        }
    }, [signOut])

    return (<>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <Link className="navbar-brand" to={"/"}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/career">Career</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calc">Calculator</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">Counter</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Reducers
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/reducercounter">Counter</a></li>
                                <li><a class="dropdown-item" href="/reducereo">Even odd</a></li>

                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Redux
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/redux">Counter</a></li>
                                {/* <li><a class="dropdown-item" href="/reducereo">Even odd</a></li> */}

                            </ul>
                        </li>

                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                        {auth ? <li className="nav-item">
                            <button className="btn btn-outline-danger" onClick={() => dispatch(logout())}>Logout</button>
                        </li>
                            : <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/forget">Forget Password</Link>
                                </li>
                            </>}




                    </ul>
                </div>
            </div>
        </nav>
    </>)
}