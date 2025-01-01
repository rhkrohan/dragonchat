import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Footer = ({ navigation }) => {
	return (
		<View style={footer.footerWindow}>
			<TouchableOpacity
				style={footer.footerLeft}
				onPress={() => {
					navigation.navigate('Home');
				}}
			>
				<Icon name="smart-display" size={30} color="white" />
			</TouchableOpacity>

			<TouchableOpacity
				style={footer.footerRight}
				onPress={() => {
					navigation.navigate('Settings');
				}}
			>
				<Icon name="settings" size={30} color="white" />
			</TouchableOpacity>
		</View>
	);
};

const footer = StyleSheet.create({
	footerWindow: {
		backgroundColor: 'black',
		flex: 0.08,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 10,
		alignSelf: 'flex-end',
	},
	footerLeft: {
		flex: 0.5,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	footerRight: {
		flex: 0.5,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

export default Footer;
