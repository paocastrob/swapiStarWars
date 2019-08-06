import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Planet extends React.Component {
	render() {
		return (
			<div className="container mt-5">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								store.planets &&
								store.planets.map((item, index) => {
									return (
										<div key={index} className="col-4 mb-5">
											<div className="card">
												<img
													src="http://www.facetheforce.today/random/400"
													className="card-img-top"
													alt="..."
												/>
												<div className="card-body">
													<h5 className="card-title">{item.name}</h5>
													<p className="card-text">
														<a href={item.url}>Visit {item.name}s Home Planet</a>
													</p>
													<a href="#" className="btn btn-primary">
														{item.climate}
													</a>
												</div>
											</div>
										</div>
									);
								})
							);
						}}
					</Context.Consumer>
				</div>

				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div>
									{store.planets &&
										store.planets &&
										store.planets[5].name + " " + store.planets[5].name}
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
