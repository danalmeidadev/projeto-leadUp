import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../pages/Posts';
import PostCreate from '../pages/PostCreate';
import PostEdit from '../pages/postEdit';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <App.Screen name="posts" component={Posts} />
    <App.Screen name="postCreate" component={PostCreate} />
    <App.Screen name="postEdit" component={PostEdit} />
  </App.Navigator>
);

export default AppRoutes;
