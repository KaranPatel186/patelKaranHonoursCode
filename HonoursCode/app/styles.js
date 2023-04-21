import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    padding: 24,
  },

  main: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
    marginVertical: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0062cc",
    
  },

  textBody: { 
    fontSize: 14,
    fontWeight: "light",
    color: "#0062cc",
    padding: 10,
  
    marginTop: 30,
  },

  buttonText: {
    fontSize: 28,
    marginTop: 100,
    padding: 10,
    fontWeight: "bold",
    color: "#0062cc",
    borderRadius: 10,
    justifyContent: "center",
  },

  buttonTextSmall: {
    fontSize: 20,
    padding: 10,
    fontWeight: "light",
    color: "white",
    backgroundColor: "#0062cc",
    borderRadius: 10,
  },

  imageStyle: {
    width: 300  /* 100% */,
    height: 300 /* 100% */,
    margin: 20,
    borderRadius: 10,
    borderColor: "#0062cc",
    borderWidth: 2,
  },
  
  unsplashImageStyle: {
    width: 400,
    height: 300,
    margin: 10,
    padding: 5,
  
   
  },



  


});

export default styles;
