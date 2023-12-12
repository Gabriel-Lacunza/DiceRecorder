import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CampaingSelection from "../templates/CampaingSelection";

const CampaingSelectionPage = () => {
  return (
    <View style={styles.container}>
      <CampaingSelection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default CampaingSelectionPage;
