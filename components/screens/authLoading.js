import React from 'react'
import { View } from 'react-native'
import { loadUser } from '../storage/userStorage'

class AuthLoading extends React.Component {
  componentDidMount() {
    this.checkId()
  }

  checkId = async () => {
    const user = await loadUser()

    if (user.id !== null) {
      this.props.navigation.navigate('App')
    }
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View>
        <h1>{'why'}</h1>
      </View>
    )
  }
}

export default AuthLoading
