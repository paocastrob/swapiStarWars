import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	render() {
		return (
			<div className="jumbotron paolabg">
				<h1 className="display-1 text-white">The best is yet to come!</h1>
				<p className="lead text-white">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4 text-white" />
				<p className="lead text-white">
					It uses utility classNamees for typography and spacing to space content out within the larger
					container.
				</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Learn more
					</a>
				</p>
			</div>
		);
	}
}
