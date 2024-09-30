/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import  Router  from 'router/Router';

import {colors} from 'theme/colors';
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View style={styles.root}>
        <Router />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
