import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
     backgroundColor: 'rgba(125, 143, 105, 0.51)' 
  },

  modalContainer: {
    backgroundColor: '#7D8F69',
    borderRadius: 20,
    padding: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "86%",
    maxHeight: "76%",
  },

  recipeName: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
  },

  recipeType: {
    alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
  },

  icon: {
    alignSelf: 'center',
    width: 280,
    height: 170,
    borderRadius: 20,
    margin: 10
  },

  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
  },

  subTitleView: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D8E1CE',
    width: 140

  },

  text: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: 2
  },

  buttonView: {
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 30
  },

  button: {
    width: 120,
    backgroundColor: "#D8E1CE",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    color: '#000'

  },

  closeIcon: {
   alignSelf: 'flex-end',
   position: 'absolute',
   margin: 8
  
  }


});