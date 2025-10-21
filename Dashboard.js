import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./Homepage";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import SubmissionConfirmation from "./SubmissionConfirmation";
import styles from "./styles";
import axios from "axios";

const Stack = createStackNavigator();

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/students/");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="StudentList">
          {(props) => <StudentList {...props} students={students} />}
        </Stack.Screen>
        <Stack.Screen name="AddStudent">
          {(props) => <AddStudent {...props} refreshStudents={fetchStudents} />}
        </Stack.Screen>
        <Stack.Screen
          name="SubmissionConfirmation"
          component={SubmissionConfirmation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Dashboard;
