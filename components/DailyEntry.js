import React from "react";
import { SafeAreaView, Button, StyleSheet, TextInput } from "react-native";

const DailyEntry = () => {
  const [entryText, onChangeEntryText] = React.useState(null);
  const [weight, onChangeWeight] = React.useState(null);
  const [caloriesBurned, onChangeCaloriesBurned] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        multiline
        textAlignVertical={"top"}
        style={styles.input}
        onChangeText={onChangeEntryText}
        value={entryText}
        placeholder="Tell us how it went today, working on your goals"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeWeight}
        value={weight}
        placeholder="Enter Current Weight"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeCaloriesBurned}
        value={caloriesBurned}
        maxLength={4}
        placeholder="Enter Calories Burned"
        keyboardType="numeric"
      />

      <Button
        onPress={onPressLearnMore}
        title="Done"
        color="#841584"
        accessibilityLabel="Submit Diary Entry"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;
