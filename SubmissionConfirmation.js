import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const SubmissionConfirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Student Added Successfully!</Text>
      <Button
        title="Go to Student List"
        onPress={() => navigation.navigate("StudentList")}
      />
    </View>
  );
};

export default SubmissionConfirmation;
