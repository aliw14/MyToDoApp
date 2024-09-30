import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {NavigationParamList} from 'types/navigation.types';
import {HomeScreen} from '../screens/Home.Screen';
import {defaultScreenOptions} from 'configs/navigation.config';

const MainStack = createNativeStackNavigator<NavigationParamList>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator
      initialRouteName={Routes.home}
      screenOptions={defaultScreenOptions}>
      <MainStack.Screen name={Routes.home} component={HomeScreen} />
    </MainStack.Navigator>
  );
};
