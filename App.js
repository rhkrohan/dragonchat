import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'Dragon Chat',
			headerBackground: () => {
				return <View style={styles.headerBackground}></View>;
			},
			headerTitleStyle: {
				color: 'white', // Title color
				fontSize: 20, // Title font size
				fontWeight: 'bold', // Title font weight
				textAlign: 'center', // Center align the title
			},
		},
	},
);

const styles = StyleSheet.create({
	headerBackground: {
		flex: 1,
		backgroundColor: 'red',
	},
});

export default createAppContainer(navigator);
