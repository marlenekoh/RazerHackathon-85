import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Button, Searchbar, Card, ProgressBar, Chip } from "react-native-paper";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Row } from "@components/Row";

import { CompanyCard } from "../../CompanyCard";
import { Color } from "@common/Color";

interface OngoingTabProps {
  navigateToCard: (cardProps: {
    company: string;
    country: string;
    fundsRequired: number;
    industryName: string;
    perAnnum: number;
    risk: string;
    invested?: boolean;
    onPress?: () => void;
  }) => void;
}

export const OngoingTab: React.FunctionComponent<OngoingTabProps> = ({
  navigateToCard,
}) => {
  const [value, setValue] = useState("");
  const cardData = [
    {
      id: 1,
      company: "Company Yuan Qi",
      country: "Singapore",
      fundsRequired: 10,
      perAnnum: 12,
      risk: "Low",
      invested: false,
      industryName: "Food Manufacturing & Services",
    },
    {
      id: 2,
      company: "Company Benedict",
      country: "Singapore",
      fundsRequired: 30,
      perAnnum: 10,
      risk: "High",
      invested: false,
      industryName: "Industry Name",
    },
    {
      id: 3,
      company: "Company Guo Kang",
      country: "Singapore",
      fundsRequired: 15,
      perAnnum: 50,
      risk: "Low",
      invested: false,
      industryName: "Industry Name",
    },
  ];

  return (
    <>
      <Expander vertical size={20} />
      <Searchbar
        value={value}
        placeholder="Search"
        onChangeText={(text) => setValue(text)}
        style={{ backgroundColor: Color.Foreground3 }}
        inputStyle={{ color: Color.TextPrimary }}
        iconColor={Color.TextPrimary}
        placeholderTextColor={Color.TextSecondary}
      />
      <Card style={{ backgroundColor: Color.Foreground1 }} onPress={() => {}}>
        <Card.Content>
          <Text bold>Filtered by: Industry Covered</Text>
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
          renderItem={({ item }) => (
            <CompanyCard {...item} onPress={() => navigateToCard(item)} />
          )}
        />
      </View>
    </>
  );
};
