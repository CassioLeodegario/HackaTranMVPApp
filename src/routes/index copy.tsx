import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notificar from '../pages/Notificar';
import ListarNotificacoes from '../pages/ListarNotificacoes';
import Dashboard from '../pages/Dashboard';
import Sucesso from '../pages/Sucesso';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0c3270',
      },
    }}
  >
    <App.Screen
      options={{ headerShown: false }}
      name="Dashboard"
      component={Dashboard}
    />
    <App.Screen name="Notificar" component={Notificar} />
    <App.Screen name="ListarNotificacoes" component={ListarNotificacoes} />
    <App.Screen
      options={{ headerShown: false }}
      name="Sucesso"
      component={Sucesso}
    />
  </App.Navigator>
);

export default AppRoutes;
