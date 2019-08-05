import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Paola Wars</span>
				</Link>
				<div className="ml-auto">
					<Link to="/people">
						<button className="btn btn-primary m-1">People</button>
					</Link>
					<Link to="/vehicles">
						<button className="btn btn-primary m-1">Vehicles</button>
					</Link>
					<Link to="/planets">
						<button className="btn btn-primary m-1">Planets</button>
					</Link>
				</div>
			</nav>
		);
	}
}
