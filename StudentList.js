import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import styles from "./styles";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/students/");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Student List</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.student_id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>{item.full_name}</Text>
            <Text style={styles.text}>Course: {item.course}</Text>
            <Text style={styles.text}>Year: {item.year_level}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default StudentList;
