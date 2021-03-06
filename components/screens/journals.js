import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../../assets/styles/journalStyles'

export default class Journals extends React.Component{
    static navigationOptions = { title : 'Journals',  headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}

      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/brain.jpg')}>
                  <View style={styles.container}>
                  <View style={styles.header}>
                      <TouchableOpacity style={styles.header} onPress={()=>this.props.navigation.navigate('DailyCheckIn')}>
                      <Text style={styles.header} > Complete Daily Check-In</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.header}>
                      <TouchableOpacity style={styles.header} onPress={()=>this.props.navigation.navigate('JournalEntry')}>
                      <Text style={styles.header} > Make a new entry</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.header}>
                      <TouchableOpacity style={styles.header} onPress={()=>this.props.navigation.navigate('JournalsList')}>
                      <Text style={styles.header}> View my Previous Entries</Text>
                      </TouchableOpacity>
                      </View>
                      </View>
              </ImageBackground>
              
          )
      }
}
