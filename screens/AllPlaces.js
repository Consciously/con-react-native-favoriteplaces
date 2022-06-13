import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import PlacesList from '../components/places/PlacesList';
import { fetchPlaces } from '../util/database';

const AllPlaces = ({ route }) => {
	const [loadedPlaces, setLoadedPlaces] = useState([]);
	const isFocused = useIsFocused();
	useEffect(() => {
		const loadPlaces = async () => {
			const places = await fetchPlaces();
			setLoadedPlaces(places);
		};

		if (isFocused) {
			loadPlaces();
			// setLoadedPlaces(currentPlaces => [...currentPlaces, route.params.place]);
		}
	}, [isFocused]);

	return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
