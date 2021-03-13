import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import AppointmentCreated from '../pages/AppointmentCreated';
import CreateAppointment from '../pages/CreateAppointment';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Dashboard" component={CreateAppointment} />
      <App.Screen name="Dashboard" component={AppointmentCreated} />

      <App.Screen name="Dashboard" component={Profile} />
    </App.Navigator>
  );
};

export default AppRoutes;
