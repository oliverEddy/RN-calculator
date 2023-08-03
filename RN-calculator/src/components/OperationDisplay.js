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
    <>
      <View style={styles.accordion}>
        <TouchableOpacity onPress={toggleAccordion}>
          <Collapse isCollapsed={!isAccordionOpen}>
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
      <Text style={styles.label}>Current Calculation:</Text>
      <Text style={styles.currentCalculation}>{d}</Text>
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
    borderColor: "black", // border color
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "lightgray", // background color
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
