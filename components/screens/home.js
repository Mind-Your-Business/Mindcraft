import React from 'react';
import {View, Text,ImageBackground ,TouchableOpacity, ScrollView} from 'react-native';
import styles from '../../assets/styles/homeStyles'

export default class HomePage extends React.Component{
    static navigationOptions = { title : 'Mindcraft',  headerStyle: {
        backgroundColor: '#72788d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}
      render(){
          return(
              <ImageBackground style={styles.image} source={require('../../assets/images/home.jpg')}>
                  <ScrollView>
                  <View style={styles.container}>
                      <Text style={styles.header}>Welcome</Text>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Meditations')}>
                          <Text style={styles.text}>Explore Meditations</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Journals')}>
                       <Text style={styles.text}>View Journals</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Quizzes')}>
                          <Text style={styles.text}>Quizzes</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                          <Text style={styles.text}>User Profile</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.journals}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('NewDay')}>
                          <Text style={styles.text}>New Day</Text>
                      </TouchableOpacity>
                      </View>
                  </View>
                  </ScrollView>
              </ImageBackground>
          )
      }
}
