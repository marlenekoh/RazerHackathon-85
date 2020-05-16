import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Button, Searchbar, Card, ProgressBar, Chip } from "react-native-paper";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Row } from "@components/Row";

import { CompanyCard } from "../CompanyCard";

export const OngoingTab: React.FunctionComponent = () => {
  const [value, setValue] = useState("");
  const cardData = [
    {
      id: 1,
      company: "Company Yuan Qi",
      country: "Singapore",
      fundsRequired: 10,
      perAnnum: 12,
      risk: "Low",
    },
    {
      id: 2,
      company: "Company Benedict",
      country: "Singapore",
      fundsRequired: 30,
      perAnnum: 10,
      risk: "High",
    },
    {
      id: 3,
      company: "Company Guo Kang",
      country: "Singapore",
      fundsRequired: 15,
      perAnnum: 50,
      risk: "Low",
    },
  ];

  return (
    <>
      <Expander vertical size={20} />
      <Searchbar
        value={value}
        placeholder="Search"
        onChangeText={(text) => setValue(text)}
      />
      <Card onPress={() => {}}>
        <Card.Content>
          <Text>Filtered by: Industry Covered</Text>
        </Card.Content>
      </Card>
      <Expander vertical size={12} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={cardData}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          ListFooterComponent={() => <Expander vertical size={40} />}
          renderItem={({ item }) => <CompanyCard {...item} />}
        />
      </View>
    </>
  );
};
