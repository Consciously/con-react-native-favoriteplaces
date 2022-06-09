import { View, Button, Alert, Image, Text, StyleSheet } from 'react-native';
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus
} from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from '../../constants/colors';

const ImagePicker = () => {
	const [pickedImage, setPickedImage] = useState();

	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions();

	const verifyPermissions = async () => {
		if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();

			return permissionResponse.granted;
		}

		if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Insufficient Permission!',
				'You need camera permissions to use this app.'
			);

			return false;
		}

		return true;
	};

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermissions();

		if (!hasPermission) {
			returns;
		}

		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5
		});

		setPickedImage(image.uri);
	};

	let imagePreview = <Text>No image taken yet.</Text>;

	if (pickedImage) {
		imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
	}

	return (
		<View>
			<View style={styles.imagePreview}>{imagePreview}</View>
			<Button title='Take Image' onPress={takeImageHandler} />
		</View>
	);
};

export default ImagePicker;

const styles = StyleSheet.create({
	imagePreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 4
	},
	image: {
		width: '100%',
		height: '100%'
	}
});