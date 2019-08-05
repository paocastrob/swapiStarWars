import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class Home extends React.Component {
	render() {
		return (
			<div className="jumbotron paolabg">
				<h1 className="display-1 text-white">The best is yet to come!</h1>
				<p className="lead text-white">Believe in yourself and the universe will conspire in your favor.</p>
				<hr className="my-4 text-white" />
				<p className="lead text-white">Be positive!</p>
				<p className="lead">
					<Link to="/people">
						<button className="btn btn-primary m-1">People</button>
					</Link>
					<Link to="/vehicles">
						<button className="btn btn-primary m-1">Vehicles</button>
					</Link>
					<Link to="/planets">
						<button className="btn btn-primary m-1">Planets</button>
					</Link>
				</p>
			</div>
		);
	}
}
