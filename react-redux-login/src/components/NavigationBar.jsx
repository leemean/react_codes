import  React  from "react";
import { Link } from 'react-router-dom'

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/">主页</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        
                        <div className="collapse navbar-collapse" id="navbarsExample05">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">注册</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationBar