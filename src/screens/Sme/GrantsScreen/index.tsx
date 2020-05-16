import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Route } from "@common/Route";
import { RouteProp } from "@react-navigation/native";
import { Text } from "@components/Text";
import { ScreenHeader } from "@components/ScreenHeader";
import { HorizontalTabs } from "@components/HorizontalTabs";
import { Expander } from "@components/Expander";
import { Searchbar, Card, IconButton } from "react-native-paper";
import { ScrollView } from "react-native";
import { Section } from "./Section";
import { Row } from "@components/Row";

interface GrantsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeGrants>;
  route: RouteProp<RootStackParamList, Route.SmeGrants>;
}

export const GrantsScreen: React.FunctionComponent<GrantsScreenProps> = ({
  navigation,
  route,
}) => {
  const NewTab = () => {
    const [value, setValue] = useState("");
    return (
      <>
        <Expander size={20}>
          <Expander vertical size={30} />
          <Text>Hey Name,</Text>
          <Text h4>Here are the grants you are eligible for:</Text>
          <Expander vertical size={30} />
        </Expander>
        <Searchbar
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholder="Search"
        />
        <Expander vertical size={12} />
        <Card>
          <Card.Content>
            <Row>
              <Text numberOfLines={1} style={{ width: "80%" }}>
                Filtered by: Industry Covered, Eligibility and Funding Size
              </Text>
              <Expander />
              <IconButton icon="filter" />
            </Row>
          </Card.Content>
        </Card>
        <ScrollView>
          <Expander size={20}>
            <Expander vertical size={20} />
            <Section />
            <Expander vertical size={20} />
            <Section />
            <Expander vertical size={20} />
            <Section />
            <Expander vertical size={20} />
            <Section />
          </Expander>
        </ScrollView>
      </>
    );
  };

  const AppliedPendingTab = () => {
    const [value, setValue] = useState("");
    return (
      <>
        <Expander size={20}>
          <Expander vertical size={30} />
          <Text>Hey Name,</Text>
          <Text h4>Here are the grants you have applied for:</Text>
          <Expander vertical size={30} />
        </Expander>
        <Searchbar
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholder="Search"
        />
        <Expander vertical size={12} />
        <Card>
          <Card.Content>
            <Row>
              <Text numberOfLines={1} style={{ width: "80%" }}>
                Filtered by: Industry Covered, Eligibility and Funding Size
              </Text>
              <Expander />
              <IconButton icon="filter" />
            </Row>
          </Card.Content>
        </Card>
        <ScrollView>
          <Expander size={20}>
            <Expander vertical size={20} />
            <Section applied />
          </Expander>
        </ScrollView>
      </>
    );
  };
  return (
    <>
      <ScreenHeader title="grants" onBack={() => navigation.pop()} />
      <HorizontalTabs
        tab1={{
          title: "new",
          component: NewTab,
        }}
        tab2={{
          title: "applied / pending",
          component: AppliedPendingTab,
        }}
      />
    </>
  );
};
