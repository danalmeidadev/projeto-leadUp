import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {View, ActivityIndicator} from 'react-native';
import { useSelector } from 'react-redux';
import { IAplicationState } from '../store';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { isLoggedIn } = useSelector((state: IAplicationState) => state.auth);
  return isLoggedIn === true ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
