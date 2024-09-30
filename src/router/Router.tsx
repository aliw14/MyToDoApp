import React, {useState} from 'react';
import {MainRouter} from './Main.Router';
import {AuthRouter} from './Auth.Router';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

const Router = () => {
  const [user] = useState(null);

  return (
    <SafeAreaView>
      <NavigationContainer>
        {user ? <MainRouter /> : <AuthRouter />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Router;
