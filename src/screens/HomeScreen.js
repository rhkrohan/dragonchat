import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Footer from '../Components/ Footer';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<View style={chatSection.upWindow}>
				<Text>Hello</Text>
			</View>

			<View style={chatSection.downWindow}>
				<Text>Hello</Text>
			</View>

			<Footer navigation={navigation} />
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
});

export default HomeScreen;
