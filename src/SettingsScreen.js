import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Footer from './Components/ Footer';

const SettingsScreen = ({ navigation }) => {
	return (
		<View style={styles.body}>
			<View style={styles.mainArea}>
				<View style={styles.circlePic} />
			</View>

			<Footer navigation={navigation} />
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: 'blue',
		flex: 1,
	},
	mainArea: {
		flex: 0.92,
		backgroundColor: 'yellow',
	},
	circlePic: {
		borderRadius: 50,
		marginVertical: 50,
		alignSelf: 'center',
		padding: 50,
		backgroundColor: 'grey',
	},
});

export default SettingsScreen;
