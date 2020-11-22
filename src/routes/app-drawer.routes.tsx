import React from 'react';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';

import { useWindowDimensions } from 'react-native';

import DrawerMenuContent from '../components/DrawerMenuContent';
import ListarNotificacoes from '../pages/ListarNotificacoes';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Sucesso from '../pages/Sucesso';
import AppStackRoutes from './app-stack.routes';

const App = createDrawerNavigator();

const DrawerRoutes: React.FC = () => {
  const dimensions = useWindowDimensions();

  return (
    <App.Navigator
      drawerContent={props => <DrawerMenuContent />}
      screenOptions={{
        swipeEnabled: false,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#0c3270',
        },
      }}
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
    >
      <App.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <App.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen name="Notificar" component={AppStackRoutes} />
      <App.Screen name="ListarNotificacoes" component={ListarNotificacoes} />
      <App.Screen
        options={{ headerShown: false }}
        name="Sucesso"
        component={Sucesso}
      />
    </App.Navigator>
  );
};

export default DrawerRoutes;
