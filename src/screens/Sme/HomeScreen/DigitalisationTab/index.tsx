import React from "react";

import { Text } from "@components/Text";
import { ScrollView } from "react-native";
import { Expander } from "@components/Expander";
import { Card, IconButton } from "react-native-paper";
import { Row } from "@components/Row";

import { Section } from "./Section";

export const DigitalisationTab: React.FunctionComponent = () => {
  return (
    <ScrollView>
      <Expander vertical size={20} />
      <Expander size={18}>
        <Text>Finish any 4 modules to get a $2K grant from Razer!</Text>
        <Text color="blue">Terms and Conditions apply.</Text>
        <Expander vertical size={20} />
        <Section
          completed
          title="Accounting Systems"
          text="Digital accounting refers to the formation, and representation of
        financial data in an electronic format."
        />
        <Expander vertical size={12} />
        <Section
          title="AI Inventory Management"
          text="Help to predict consumer demand, manage supplier backorders and to optimise inventory stock levels."
        />
        <Expander vertical size={12} />
        <Section
          title="Digital Marketing & Retailing"
          text="Innovation that combines content design software, remote management and data analytics."
        />
        <Expander vertical size={12} />
        <Section
          title="Cloud-based Data Management"
          text="Software-as-a-service (Saas) provides the core of the cloud computing experience."
        />
        <Expander vertical size={12} />
        <Section
          title="Customer Management"
          text="Automate the processes of demand forecasting and validation to align with customer requirements."
        />
        <Expander vertical size={12} />
        <Section
          title="Project Management & Quality Assurance"
          text="Using devices to capture data and generate reports, eliminating manual entry and errors."
        />
        <Expander vertical size={12} />
        <Section
          title="Workflow Tracking & Management"
          text="Ensure right items are collected and delivered to the right customer on-time."
        />
        <Expander vertical size={12} />
        <Section
          title="Ship Agency & HarbourCraft"
          text="Gives port agents complete control and visibility over all their port agency and husbandry activities."
        />
      </Expander>
      <Expander vertical size={40} />
    </ScrollView>
  );
};
