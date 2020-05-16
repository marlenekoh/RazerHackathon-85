import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Button, Searchbar, Card, ProgressBar, Chip } from "react-native-paper";

import { Text } from "@components/Text";
import { Expander } from "@components/Expander";
import { Row } from "@components/Row";

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
      <Searchbar value={value} placeholder="Search" />
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
          renderItem={({ item }) => {
            const { company, country, fundsRequired, perAnnum, risk } = item;
            return (
              <Expander size={18}>
                <Expander vertical size={6}>
                  <Card>
                    <Card.Content>
                      <Row>
                        <Text h3>{company}</Text>
                        <Expander />
                        <Text h3>@{perAnnum}% p.a.</Text>
                      </Row>
                      <Text p1>{country}</Text>
                      <Expander vertical size={8} />
                      <Expander size={12}>
                        <Text>
                          <Text h5 color="blue">
                            {fundsRequired}%
                          </Text>{" "}
                          of <Text h5>funds required</Text>
                        </Text>
                        <ProgressBar progress={fundsRequired / 100} />
                        <Expander vertical size={12} />
                        <Row>
                          <Chip>Industry Name</Chip>
                          <Expander size={12} />
                          <Chip>{risk} Risk</Chip>
                          <Expander />
                        </Row>
                      </Expander>
                    </Card.Content>
                    <Card.Actions>
                      <Expander />
                      <Button>Learn More</Button>
                    </Card.Actions>
                  </Card>
                </Expander>
              </Expander>
            );
          }}
        />
      </View>
    </>
  );
};
