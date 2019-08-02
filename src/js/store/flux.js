const getState = ({ getStore, setStore }) => {
	return {
		store: {
			favorites: ["ciao"]
		},
		actions: {
			addToFavoritePeople: (star, object) => {
				star.target.style.color = "yellow";
				let store = getStore();
				setStore({ favorites: store.favorites.concat(object) });
				//console.log(store.favorites);
			}
		}
	};
};

export default getState;
