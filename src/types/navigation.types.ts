import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from 'router/routes';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
    [Routes.authRouter]: { isAuth: boolean };
    [Routes.home]: undefined;
    [Routes.test]: undefined;
};
