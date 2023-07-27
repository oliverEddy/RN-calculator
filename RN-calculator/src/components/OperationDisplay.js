import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function OperationDisplay({ h, d }) {
  return (
    <>
      <Text style={styles.label}>Current Calculation:</Text>
      <Text style={styles.currentCalculation}>{d}</Text>
      <View style={styles.accordion}>
        <TouchableOpacity style={styles.accordionHeader}>
          <Text style={styles.headerText}>Past Calculations:</Text>
        </TouchableOpacity>
        <ScrollView style={styles.accordionDetails}>
          {h?.map((operation, index) => (
            <Text key={index} style={styles.operationText}>
              {operation}
            </Text>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  currentCalculation: {
    color: "black",
    fontSize: 20,
  },
  accordion: {
    marginTop: 10,
    borderColor: "black", //  border color
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "lightgray", //  background color
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  accordionDetails: {
    maxHeight: 150,
    padding: 10,
  },
  operationText: {
    fontSize: 14,
    marginBottom: 5,
  },
});
