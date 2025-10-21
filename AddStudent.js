import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import axios from "axios";
import styles from "./styles";

const AddStudent = ({ navigation, refreshStudents }) => {
  const [fullName, setFullName] = useState("");
  const [course, setCourse] = useState("");
  const [yearLevel, setYearLevel] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/students/", {
        full_name: fullName,
        course: course,
        year_level: yearLevel,
      });

      navigation.navigate("SubmissionConfirmation");
      setFullName("");
      setCourse("");
      setYearLevel("");
    } catch (error) {
      console.error("Error adding student:", error);
      Alert.alert("Error", "Failed to add student.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add New Student</Text>
      <TextInput
        placeholder="Full Name"
        style={styles.inputBox}
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        placeholder="Course"
        style={styles.inputBox}
        value={course}
        onChangeText={(text) => setCourse(text)}
      />
      <TextInput
        placeholder="Year Level"
        style={styles.inputBox}
        value={yearLevel}
        onChangeText={(text) => setYearLevel(text)}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} style={styles.button} />
    </View>
  );
};

export default AddStudent;
