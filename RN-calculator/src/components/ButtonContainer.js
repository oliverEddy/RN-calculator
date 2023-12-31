import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonContainer({ onButton, onClear, onDelete }) {
  return (
    <View style={styles.btnContainer}>
      <View style={styles.clearButtonRow}>
        <TouchableOpacity
          style={[styles.button, styles.clearButton]}
          onPress={onClear}
        >
          <Text style={styles.clearButtonText}>Clear History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numericBtnContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => onButton("7")}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("8")}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("9")}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => onButton("/")}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => onButton("4")}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("5")}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("6")}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => onButton("*")}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => onButton("1")}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("2")}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onButton("3")}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => onButton("-")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => onButton("0")}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.dotButton]}
            onPress={() => onButton(".")}
          >
            <Text style={styles.dotButtonText}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={onDelete}
          >
            <Text style={styles.buttonText}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => onButton("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.equalButton]}
            onPress={() => onButton("=")}
            testID="equalsButton"
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
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
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#DBD8AE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },

  operatorButton: {
    backgroundColor: "#CA907E",
  },
  equalButton: {
    flex: 1,
    backgroundColor: "#BA9D9F",
  },
  clearButtonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  clearButton: {
    flex: 1,
    backgroundColor: "#9E2A2B",
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  deleteButton: {
    backgroundColor: "#B6636E",
  },
  dotButton: {
    backgroundColor: "#DBD8AE",
  },
  dotButtonText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "black",
  },
});
