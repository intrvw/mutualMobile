import { NavigationContainer} from '@react-navigation/native'
import React from 'react'
import HomePage from '../Posts/HomePage'
import { createStackNavigator } from '@react-navigation/stack'
import IndividualPost from '../Posts/IndividualPost'

const Stack = createStackNavigator()

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="HomePage">
                <Stack.Screen name="HomePage" component={HomePage}/>
                <Stack.Screen name="IndividualPost" component={IndividualPost}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
