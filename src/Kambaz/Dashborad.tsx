import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
        <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course">
                <Link to="/Kambaz/Courses/1234/Home"
                      className="wd-dashboard-course-link" >
                    <img src="/images/reactjs.jpg" width={200} />
                <div>
                    <h5> CS1234 React JS </h5>
                    <p className="wd-dashboard-course-title">
                        Full Stack software developer </p>
                    <button> Go </button>
                </div>
                </Link>
            </div>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5002/Home" className="wd-dashboard-course-link">
                        <img src="/images/CS5002.jpg" width={200} />
                        <div>
                            <h5>CS5002: Discrete Structures</h5>
                            <p className="wd-dashboard-course-title">Introduction to discrete mathematics for computer science.</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5004/Home" className="wd-dashboard-course-link">
                        <img src="/images/CS5004.jpg" width={200} />
                        <div>
                            <h5>CS5004: Object-Oriented Design</h5>
                            <p className="wd-dashboard-course-title">Principles and patterns of object-oriented programming.</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5008/Home" className="wd-dashboard-course-link">
                        <img src="/images/CS5008.jpg" width={200} />
                        <div>
                            <h5>CS5008: Data Structures, Algorithms, and Computer Systems</h5>
                            <p className="wd-dashboard-course-title">Foundational concepts in data structures and algorithms.</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5200/Home" className="wd-dashboard-course-link">
                        <img src="/images/CS5200.jpg" width={200} />
                        <div>
                            <h5>CS5200: Database Management</h5>
                            <p className="wd-dashboard-course-title">Comprehensive study of database systems and design.</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5340/Home" className="wd-dashboard-course-link">
                        <img src="/images/CS5340.jpg" width={200} />
                        <div>
                            <h5>CS5340: Human-Computer Interaction</h5>
                            <p className="wd-dashboard-course-title">Design and evaluation of user-centered systems.</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5610/Home" className="wd-dashboard-course-link">
                        <img src="/images/CS5610.jpg" width={200} />
                        <div>
                            <h5>CS5610: Web Development</h5>
                            <p className="wd-dashboard-course-title">Building modern web applications using frameworks.</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5780/Home" className="wd-dashboard-course-link">
                        <img src="/images/CS5780.jpg" width={200} />
                        <div>
                            <h5>CS5780: Advanced Data Analytics</h5>
                            <p className="wd-dashboard-course-title">Techniques and tools for analyzing complex datasets.</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
    </div>
    </div>
);}