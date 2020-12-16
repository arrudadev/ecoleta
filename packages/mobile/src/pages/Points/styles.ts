import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
	container: {
		flex: 1,

		paddingHorizontal: 32,
		paddingTop: 20 + Constants.statusBarHeight,
	},

	title: {
		fontSize: 20,
		fontFamily: 'Ubuntu_700Bold',

		marginTop: 24,
	},

	description: {
		color: '#6C6C80',

		fontSize: 16,
		fontFamily: 'Roboto_400Regular',

		marginTop: 4,
	},

	mapContainer: {
		flex: 1,

		width: '100%',

		borderRadius: 10,

		overflow: 'hidden',
		marginTop: 16,
	},

	map: {
		width: '100%',
		height: '100%',
	},

	mapMarker: {
		width: 90,
		height: 80,
	},

	mapMarkerContainer: {
		width: 90,
		height: 70,

		backgroundColor: '#34CB79',

		flexDirection: 'column',
		alignItems: 'center',

		borderRadius: 8,
		overflow: 'hidden',
	},

	mapMarkerImage: {
		width: 90,
		height: 45,

		resizeMode: 'cover',
	},

	mapMarkerTitle: {
		flex: 1,

		fontFamily: 'Roboto_400Regular',
		fontSize: 13,

		color: '#FFF',

		lineHeight: 23,
	},

	itemsContainer: {
		flexDirection: 'row',

		marginTop: 16,
		marginBottom: 32,
	},

	item: {
		backgroundColor: '#fff',

		borderWidth: 2,
		borderColor: '#eee',
		borderRadius: 8,

		height: 120,
		width: 120,

		paddingHorizontal: 16,
		paddingTop: 20,
		paddingBottom: 16,
		marginRight: 8,

		alignItems: 'center',
		justifyContent: 'space-between',

		textAlign: 'center',
	},

	selectedItem: {
		borderColor: '#34CB79',
		borderWidth: 2,
	},

	itemTitle: {
		fontFamily: 'Roboto_400Regular',
		fontSize: 13,

		textAlign: 'center',
	},
});
