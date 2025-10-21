import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Student App</Text>
      <Button
        title="View Students"
        onPress={() => navigation.navigate("StudentList")}
        style={styles.button}
      />
      <Button
        title="Add Student"
        onPress={() => navigation.navigate("AddStudent")}
        style={styles.button}
      />
    </View>
  );
};

export default Homepage;
