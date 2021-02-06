import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './components/Navigation/Navigation'
function App(){
  return(
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  )
}
export default App;
