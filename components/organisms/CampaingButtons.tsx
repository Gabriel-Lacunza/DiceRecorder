import { View, StyleSheet } from "react-native";
import React from "react";
import CampaingButton from "../molecules/CampaingButton";

type Props = {
  data: string[];
};

const CampaingButtons = ({ data }: Props) => {
  return (
    <View>
      {data.map((campaing) => (
        <CampaingButton
          onClick={() => console.log(campaing)}
          text={campaing}
          key={campaing}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CampaingButtons;
