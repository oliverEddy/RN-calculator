import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonContainer({ onButton, onClear, onDelete }) {
  return (
    <>
      <View style={styles.btnContainer}>
        <View style={styles.numericBtnContainer}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("1")}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("2")}
            >
              <Text>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("3")}
            >
              <Text>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("4")}
            >
              <Text>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("5")}
            >
              <Text>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("6")}
            >
              <Text>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("7")}
            >
              <Text>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("8")}
            >
              <Text>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("9")}
            >
              <Text>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton("0")}
            >
              <Text>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButton(".")}
            >
              <Text>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "blue" }]}
              onPress={() => onButton("=")}
            >
              <Text>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.calculatorControls}>
          <TouchableOpacity style={styles.controlButton} onPress={onDelete}>
            <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlButton, { backgroundColor: "red" }]}
            onPress={onClear}
          >
            <Text>Clear history</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    //  container styles
  },
  numericBtnContainer: {
    //  numeric button container styles
  },
  buttonGroup: {
    //  button group styles
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    //  button styles
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  calculatorControls: {
    //  calculator controls styles
    flexDirection: "row",
    justifyContent: "space-around",
  },
  controlButton: {
    //  control button styles
    width: 120,
    height: 40,
    borderRadius: 20,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
