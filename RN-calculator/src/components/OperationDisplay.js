import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

export default function OperationDisplay({ h, d }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculationHistory}>
        <TouchableOpacity onPress={toggleAccordion}>
          <Collapse>
            <CollapseHeader>
              <View style={styles.accordionHeader}>
                <Text style={styles.headerText}>Past Calculations:</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <ScrollView style={styles.accordionDetails}>
                {h?.map((operation, index) => (
                  <Text key={index} style={styles.operationText}>
                    {operation}
                  </Text>
                ))}
              </ScrollView>
            </CollapseBody>
          </Collapse>
        </TouchableOpacity>
      </View>

      <View style={[styles.calculationArea]}>
        <Text style={[styles.label, { textAlign: "center" }]}>
          Current Calculation:
        </Text>
        <Text style={[styles.currentCalculation, { textAlign: "center" }]}>
          {d}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
    paddingHorizontal: 20,
    width: "100%",
  },
  calculationArea: {
    width: "97%",
    height: 65,
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  currentCalculation: {
    color: "black",
    fontSize: 20,
  },
  calculationHistory: {
    width: "97%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#BA9D9F",
    marginBottom: 10,
    marginTop: 10,
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#CA907E",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  accordionDetails: {
    maxHeight: 150,
    padding: 10,
  },
  operationText: {
    fontSize: 14,
    marginBottom: 5,
    color: "black",
  },
});
