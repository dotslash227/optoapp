import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppStack from './DrawerNavigator';
import tabNavigation from './TabNavigation';

const mainRouter = createSwitchNavigator({
    tabNavigation: tabNavigation,
    AppStack: AppStack,
},{
    initialRouteName: "AppStack"
})

const AppContainer = createAppContainer(mainRouter);

export default AppContainer;