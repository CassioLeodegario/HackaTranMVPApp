import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import Notificar from '../pages/Notificar';

const App = createStackNavigator();

const AppStackRoutes: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <App.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#0c3270',
        },
      }}
    >
      <App.Screen
        options={{
          headerLeft: () => (
            <RectButton
              onPress={() => navigate('Dashboard')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
              }}
            >
              <Icon name="arrow-left" size={24} color="#fff" />
            </RectButton>
          ),
        }}
        name="Notificar"
        component={Notificar}
      />
    </App.Navigator>
  );
};

export default AppStackRoutes;
