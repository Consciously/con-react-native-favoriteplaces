class Place {
	constructor(title, imageUri, address, location) {
		this.title = title;
		this.imageUri = imageUri;
		this.address = address;
		this.location = location; // {lat: 0.2422424, lng: 0.335353535}
		this.id = new Date().toString() + Math.random().toString();
	}
}
