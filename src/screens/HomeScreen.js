import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

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
				<Text>Hello</Text>
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
	},
});

export default HomeScreen;
