import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonContainer({ onButton, onClear, onDelete }) {
  return (
    <View style={styles.btnContainer}>
      <View style={styles.numericBtnContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => onButton("7")}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("8")}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("9")}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("/")}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => onButton("4")}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("5")}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("6")}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("*")}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => onButton("1")}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("2")}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("3")}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("-")}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => onButton("0")}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton(".")}>
            <Text>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "red" }]}
            onPress={onDelete}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("+")}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "blue" }]}
            onPress={() => onButton("=")}
            testID="equalsButton"
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.calculatorControls}>
        <TouchableOpacity style={styles.controlButton} onPress={onClear}>
          <Text>Clear history</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  numericBtnContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#DBD8AE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  operatorButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 40,
    marginTop: 10,
  },
  controlButton: {
    width: 120,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#CA907E",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
