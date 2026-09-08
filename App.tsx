import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculator from './Calculator';
import History from './History';

type RootStackParamList = {
  Calculator: undefined;
  History: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [history, setHistory] = useState<string[]>([]);

  const addToHistory = (calculation: string) => {
    setHistory((currentHistory) => [
      ...currentHistory,
      calculation,
    ]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" options={{ title: 'Laskin' }}>
          {() => (
            <Calculator onCalculate={addToHistory} />
          )}
        </Stack.Screen>

        <Stack.Screen name="History" options={{ title: 'History' }}>
          {() => (
            <History history={history} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}