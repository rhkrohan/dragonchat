import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const myName = 'Rohan';
	return (
		<View>
			<Text style={styles.textStyle}>
				Getting started with react Native!
			</Text>
			<Text style={styles.subTextStyle}>My name is {myName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
		color: 'brown',
	},
	subTextStyle: {
		fontSize: 30,
		color: 'green',
	},
});

export default ComponentsScreen;
