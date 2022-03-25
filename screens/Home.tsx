import { Image, StyleSheet , TouchableOpacity, ScrollView  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
  <ScrollView>
   <View  style={styles.buttonContainer}>
       <TouchableOpacity
                  onPress={() => navigation.navigate("Home")}>
                  <Image
                        style={styles.sportsButton}
                        source={require('../assets/images/FB_Sport_Button.png')}
                        />
                  <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
           </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}>
                <Image
                   style={styles.sportsButton}
                   source={require('../assets/images/BSB_Sport_Button.png')}
                    />
                    <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
                      </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}>
               <Image
               style={styles.sportsButton}
               source={require('../assets/images/MBB_Sport_Button.png')}
                />
                <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                      onPress={() => navigation.navigate("Home")}>
                      <Image
                         style={styles.sportsButton}
                         source={require('../assets/images/WBB_Sport_Button.png')}
                         />
                          <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
                          </TouchableOpacity>
             <TouchableOpacity
                onPress={() => navigation.navigate("Home")}>
                       <Image
                           style={styles.sportsButton}
                           source={require('../assets/images/MSOC_Sport_Button.png')}
                           />
                           <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => navigation.navigate("Home")}>
                       <Image
                        style={styles.sportsButton}
                        source={require('../assets/images/WSOC_Sport_Button.png')}
                        />
                        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                   onPress={() => navigation.navigate("Home")}>
                   <Image
                    style={styles.sportsButton}
                    source={require('../assets/images/VB_Sport_Button.png')}
                    />
                   <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
                   </TouchableOpacity>
                   <TouchableOpacity
                         onPress={() => navigation.navigate("Home")}>
                           <Image
                             style={styles.sportsButton}
                               source={require('../assets/images/sign-in.jpg')}
                                />
                                 <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
                                  </TouchableOpacity>
        </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sportsButton:{
  width: 115,
  height: 115,
  borderRadius: 4,
  padding: 5,
  margin: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
    buttonContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
    },
});