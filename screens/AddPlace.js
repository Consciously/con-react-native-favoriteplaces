import PlaceForm from '../components/places/PlaceForm';

const AddPlace = () => {
	const createPlaceHandler = place => {
		NavigationPreloadManager.navigate('AllPlaces', { place });
	};

	return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
