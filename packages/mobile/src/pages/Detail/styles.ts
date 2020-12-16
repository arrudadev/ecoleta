import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
	container: {
		flex: 1,

		padding: 32,
		paddingTop: 20 + Constants.statusBarHeight,
	},

	containerErrorLoadingPoint: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	errorLoadingPointMessage: {
		color: '#322153',

		fontSize: 18,
		fontFamily: 'Ubuntu_700Bold',
	},

	pointImage: {
		width: '100%',
		height: 120,

		resizeMode: 'cover',

		borderRadius: 10,

		marginTop: 32,
	},

	pointName: {
		color: '#322153',

		fontSize: 28,
		fontFamily: 'Ubuntu_700Bold',

		marginTop: 24,
	},

	pointItems: {
		fontFamily: 'Roboto_400Regular',
		fontSize: 16,

		lineHeight: 24,

		marginTop: 8,

		color: '#6C6C80',
	},

	address: {
		marginTop: 32,
	},

	addressTitle: {
		color: '#322153',

		fontFamily: 'Roboto_500Medium',
		fontSize: 16,
	},

	addressContent: {
		fontFamily: 'Roboto_400Regular',

		lineHeight: 24,

		marginTop: 8,

		color: '#6C6C80',
	},

	footer: {
		borderTopWidth: StyleSheet.hairlineWidth,
		borderColor: '#999',

		paddingVertical: 20,
		paddingHorizontal: 32,

		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	button: {
		height: 50,
		width: '48%',

		backgroundColor: '#34CB79',

		borderRadius: 10,

		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		marginLeft: 8,

		color: '#FFF',

		fontSize: 16,
		fontFamily: 'Roboto_500Medium',
	},
});
