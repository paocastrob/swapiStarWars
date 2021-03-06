import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class Vehicles extends React.Component {
	render() {
		return (
			<div className="container mt-5">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								store.vehicles &&
								store.vehicles.map((item, index) => {
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
														<a href={item.homeworld}>Visit {item.name}s Home Planet</a>
													</p>
													<a href="#" className="btn btn-primary">
														{item.vehicle_class}
													</a>
													<a className="btn btn-primary m-5">
														{" "}
														<i className="far fa-star " />
														Fav{" "}
													</a>
													<Link to={"/single/" + index}>
														Single View <span> Link to: {item.name}</span>
													</Link>
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
									{store.vehicles &&
										store.vehicles &&
										store.vehicles[5].name + " " + store.vehicles[5].name}
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
