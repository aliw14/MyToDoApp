import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {NavigationParamList} from 'types/navigation.types';
import {HomeScreen} from '../screens/Home.Screen';
import {authStackScreenOption} from '../configs/navigation.config';
import {SafeAreaView} from 'react-native';
import {CommonStyles} from '../theme/common.styles';

const AuthStack = createNativeStackNavigator<NavigationParamList>();

export const AuthRouter = () => {
  return (
    <SafeAreaView style={CommonStyles.flex}>
      <AuthStack.Navigator
        screenOptions={authStackScreenOption}
        initialRouteName={Routes.test}>
        <AuthStack.Screen name={Routes.home} component={HomeScreen} />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};