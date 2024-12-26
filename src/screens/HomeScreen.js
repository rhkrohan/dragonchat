import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={chatSection.upWindow}>
				<Text>Hello</Text>
			</View>

			<View style={chatSection.downWindow}>
				<Text>Hello</Text>
			</View>

			<View style={chatSection.footerWindow}>
				<TouchableOpacity style={chatSection.footerLeft}>
					<Icon name="smart-display" size={30} color="white" />
				</TouchableOpacity>

				<TouchableOpacity style={chatSection.footerRight}>
					<Icon name="settings" size={30} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const chatSection = StyleSheet.create({
	upWindow: {
		backgroundColor: '#fcba03',
		flex: 0.46,
	},
	downWindow: {
		backgroundColor: '#020e5c',
		flex: 0.46,
	},
	footerWindow: {
		backgroundColor: 'black',
		flex: 0.08,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 10,
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

export default HomeScreen;
