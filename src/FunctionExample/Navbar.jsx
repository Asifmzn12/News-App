import React from 'react'
import "./mystyle.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light background fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">News App</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className=" nav-item active">
                                <Link className="nav-link text-light" to="/politics">Politics</Link>
                            </li>
                            <li className=" nav-item active">
                                <Link className="nav-link text-light" to="/education">Education</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/technology">technology</Link>
                            </li>
                            <li className=" nav-item active">
                                <Link className="nav-link text-light" to="/sports">Sports</Link>
                            </li>
                            <li className=" nav-item active">
                                <Link className="nav-link text-light" to="/covid19">Covid19</Link>
                            </li>
                            <li className=" nav-item active">
                                <Link className="nav-link text-light" to="/crime">Crime</Link>
                            </li>
                            <li className=" nav-item active">
                                <Link className="nav-link text-light" to="/jokes">Jokes</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}
