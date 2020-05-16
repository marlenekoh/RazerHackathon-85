import React, { useState } from "react";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Searchbar, Card } from "react-native-paper";
import { CompanyCard } from "../CompanyCard";

export const InvestedTab: React.FunctionComponent = () => {
  const [value, setValue] = useState("");
  const cardData = {
    id: 1,
    company: "Company Yuan Qi",
    country: "Singapore",
    fundsRequired: 10,
    perAnnum: 12,
    risk: "Low",
  };

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
      <CompanyCard invested {...cardData} />
    </>
  );
};
