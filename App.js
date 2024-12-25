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
