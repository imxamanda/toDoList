import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import DrawerRoutes from './src/routes/DrawerRoutes';


export default function App() {
  return (
   <PaperProvider>
     {/* <Router></Router> */}
     <DrawerRoutes></DrawerRoutes>
     {/* <Routes></Routes> */}

   </PaperProvider>
  );
}

const styles = StyleSheet.create({
});