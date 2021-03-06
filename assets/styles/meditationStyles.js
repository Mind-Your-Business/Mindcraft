import { StyleSheet, Dimensions } from "react-native";
import colors from './color'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'

  },
  singlemeditationcontainer:{
    flex: 1,
    justifyContent: "flex-end"
  },
  text: {
    color: "white",
    fontSize: 20,
    opacity: 0.8,
    fontFamily: "Avenir-Medium",
    fontWeight: "800",
    marginBottom: 15,
    justifyContent: 'center',
    alignContent: 'center'
  },
  image: {
    width: "100%",
    height: "100%"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 180,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 2,
    opacity: 0.8
  },
  header: {
    fontSize: 20,
    marginLeft: 1,
    marginRight: 1,
    fontFamily: "Avenir-Medium",
    color: "black",
    backgroundColor: "white",
    fontWeight: "800",
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
    padding: 2
  },
  pickercontainer: {
    height: "25%",
    alignContent: "flex-start"
  },
  Spherecontainer: {
    height: "55%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  textcontainer: {
    padding: 12,
    alignItems: "center"
  },
  timeContainer: {
    height: "10%",
    padding: 20,
    margin: 10
  },
  circle: {
    backgroundColor: "blue",
    borderRadius: 200 / 2
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
