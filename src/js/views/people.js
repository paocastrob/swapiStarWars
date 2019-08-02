
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class People extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<h1 className="text-center text-info">Peoples names</h1>
							<ul className="list-group">
								{store.people &&
									store.people.map((e, i) => {
										return (
											<li key={i} className="list-group-item d-flex justify-content-between">
												{e.name}
												<i
													className="far fa-star"
													onClick={star => actions.addToFavoritePeople(star, e)}
												/>
											</li>
										);
									})}
							</ul>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

