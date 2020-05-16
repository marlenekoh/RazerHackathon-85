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
import { ScreenContainer } from "@components/ScreenContainer";
import { Color } from "@common/Color";

interface GrantsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeGrants>;
  route: RouteProp<RootStackParamList, Route.SmeGrants>;
}

export const GrantsScreen: React.FunctionComponent<GrantsScreenProps> = ({
  navigation,
  route,
}) => {
  const navigateToLoans = (applied: boolean, approved?: boolean) =>
    navigation.navigate(Route.SmeGrantLoans, { applied, approved });

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
          style={{ backgroundColor: Color.Foreground3 }}
          inputStyle={{ color: Color.TextPrimary }}
          iconColor={Color.TextPrimary}
          placeholderTextColor={Color.TextSecondary}
        />
        <Expander vertical size={12} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <Row>
              <Text numberOfLines={1} style={{ width: "80%" }}>
                <Text bold>Filtered by: </Text>
                Industry Covered, Eligibility and Funding Size
              </Text>
              <Expander />
              <IconButton color={Color.Highlight1} icon="filter" />
            </Row>
          </Card.Content>
        </Card>
        <ScrollView>
          <Expander size={20}>
            <Expander vertical size={20} />
            <Section onPress={() => navigateToLoans(false)} />
            <Expander vertical size={20} />
            <Section onPress={() => navigateToLoans(false)} />
            <Expander vertical size={20} />
            <Section onPress={() => navigateToLoans(false)} />
            <Expander vertical size={20} />
            <Section onPress={() => navigateToLoans(false)} />
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
          style={{ backgroundColor: Color.Foreground3 }}
          inputStyle={{ color: Color.TextPrimary }}
          iconColor={Color.TextPrimary}
          placeholderTextColor={Color.TextSecondary}
        />
        <Expander vertical size={12} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <Row>
              <Text numberOfLines={1} style={{ width: "80%" }}>
                <Text bold>Filtered by: </Text>
                Industry Covered, Eligibility and Funding Size
              </Text>
              <Expander />
              <IconButton color={Color.Highlight1} icon="filter" />
            </Row>
          </Card.Content>
        </Card>
        <ScrollView>
          <Expander size={20}>
            <Expander vertical size={20} />
            <Section applied onPress={() => navigateToLoans(true)} />
            <Expander vertical size={20} />
            <Section
              applied
              approved
              onPress={() => navigateToLoans(true, true)}
            />
          </Expander>
          <Expander vertical size={30} />
        </ScrollView>
      </>
    );
  };
  return (
    <ScreenContainer>
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
    </ScreenContainer>
  );
};
