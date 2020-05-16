import React, { useState } from "react";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Searchbar, Card } from "react-native-paper";
import { CompanyCard } from "../../CompanyCard";
import { RootStackParamList } from "@common/Route";

interface InvestedTabProps {
  navigateToCard: (cardProps: {
    company: string;
    country: string;
    fundsRequired: number;
    perAnnum: number;
    risk: string;
    invested?: boolean;
    industryName: string;
    onPress?: () => void;
  }) => void;
}

export const InvestedTab: React.FunctionComponent<InvestedTabProps> = ({
  navigateToCard,
}) => {
  const [value, setValue] = useState("");
  const cardData = {
    id: 1,
    company: "Company Yuan Qi",
    country: "Singapore",
    fundsRequired: 10,
    perAnnum: 12,
    risk: "Low",
    industryName: "Food Manufacturing & Services",
  };

  return (
    <>
      <Expander vertical size={20} />
      <Searchbar
        value={value}
        placeholder="Search"
        onChangeText={(text) => setValue(text)}
      />
      <Card>
        <Card.Content>
          <Text>Filtered by: Industry Covered</Text>
        </Card.Content>
      </Card>
      <CompanyCard
        invested
        {...cardData}
        onPress={() => navigateToCard({ invested: true, ...cardData })}
      />
    </>
  );
};
