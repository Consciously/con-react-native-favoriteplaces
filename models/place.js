export class Place {
	constructor(title, imageUri, location, id) {
		this.title = title;
		this.imageUri = imageUri;
		this.address = location.address;
		this.location = { lat: location.lat, lng: location.lng }; // {lat: 0.2422424, lng: 0.335353535}
		this.id = id;
	}
}
