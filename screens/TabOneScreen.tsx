import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { RootTabScreenProps } from '../types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />

       <TouchableOpacity
              onPress={() => navigation.navigate("home")}
              style={{ backgroundColor: 'blue' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
       </TouchableOpacity>
       <TouchableOpacity
                     onPress={() => navigation.navigate("home")}
                     style={{ backgroundColor: 'blue' }}>
                     <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
       </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button:{
  backgroundColor: "green",
  borderRadius:5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
