import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#55acee",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputBox: {
    width: "80%",
    height: 40,
    borderColor: "#55acee",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#ffffff",
  },
});

export default styles;
