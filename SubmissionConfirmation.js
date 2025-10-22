import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const SubmissionConfirmation = ({ navigation, route }) => { 
  const { student } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please Review the Following Information:</Text>
      <Text style={styles.text}>Full Name: {student.full_name}</Text>
      <Text style={styles.text}>Course: {student.course}</Text>
      <Text style={styles.text}>Year Level: {student.year_level}</Text>

      <Text style={styles.text}>Is this information correct?</Text>

      <Button
        title="Back to Add Student"
        onPress={() => navigation.navigate("AddStudent")} 
      />
      <Button
        title="Confirm and Submit"
        onPress={() => navigation.navigate("StudentList")}
      />
    </View>
  );
};

export default SubmissionConfirmation;