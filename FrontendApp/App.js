import { ExpoRouter } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <ExpoRouter />;
    </PaperProvider>
  )
}
