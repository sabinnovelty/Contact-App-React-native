
import React from 'react';
import {
  StyleSheet,
  View,
  Text, TouchableOpacity
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Login, Register, ContactList, Header, EditContact, ContactCreate, LocateMap } from './src/app/screens'
import Ionicons from 'react-native-vector-icons/FontAwesome'
import { Provider } from './src/app/context/ContactContext';


const Auth = createSwitchNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  }, {
  navigationOptions: {
    header: null
  }

}
)

const ContactStack = createStackNavigator({
  Contact: {
    screen: ContactList, navigationOptions: ({ navigation }) => {
      return {
        header: <View style={{ backgroundColor: '#375da1', height: 50, flexDirection: 'row', alignItems: 'center', }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="bars" style={{ fontSize: 30, color: '#fff', padding: 10 }} />
          </TouchableOpacity>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 30, paddingLeft: 30 }}>Contact List</Text>
        </View>
      }
    }
  },
  EditContact: { screen: EditContact },
  ContactCreate: { screen: ContactCreate }
}, {

});


const App = createDrawerNavigator({
  Contact: ContactStack
}, {
  navigationOptions: {
    header: null
  }
});

const AppTabNavigation = createBottomTabNavigator({
  Contact: { screen: App },
  LocateMap: { screen: LocateMap }
}, {
  navigationOptions: {
    header: null
  }
})



const AppRoute = createStackNavigator({
  Auth: { screen: Auth },
  App: { screen: AppTabNavigation }
}, {
  navigationOptions: {
    header: null
  }
})

const styles = StyleSheet.create({

});





const MainApp = createAppContainer(AppRoute);


export default () => {
  return (
    <Provider>
      <MainApp />
    </Provider>
  )
}