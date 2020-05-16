import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Route } from "@common/Route";
import { RouteProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Text } from "@components/Text";
import { ScreenHeader } from "@components/ScreenHeader";
import { Card, Chip, Button } from "react-native-paper";
import { Expander } from "@components/Expander";
import { Row } from "@components/Row";
import { Section } from "./Section";
import { Color } from "@common/Color";
import { ScreenContainer } from "@components/ScreenContainer";

interface DigitalisationDetailsScreenProps {
  navigation: StackNavigationProp<
    RootStackParamList,
    Route.SmeDigitalisationDetails
  >;
  route: RouteProp<RootStackParamList, Route.SmeDigitalisationDetails>;
}

export const DigitalisationDetailsScreen: React.FunctionComponent<DigitalisationDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    title,
    subtitle,
    description,
    industryName,
    suggestedSoftware,
    discountSoftware,
    completed,
  } = route.params;
  return (
    <ScreenContainer>
      <ScreenHeader onBack={() => navigation.pop()} title="digitalisation" />
      <ScrollView>
        <Expander size={18}>
          <Section title={title} text={subtitle} completed={completed} />
          <Expander vertical size={12} />
          <Card style={{ backgroundColor: Color.Foreground1 }}>
            <Card.Content>
              <Text h4>Best in-Class Practices from</Text>
              <Row>
                <Chip
                  textStyle={{ fontWeight: "bold" }}
                  style={{ backgroundColor: Color.Highlight2 }}
                >
                  {industryName}
                </Chip>
                <Expander />
              </Row>
              <Expander vertical size={18} />
              <Text>{description}</Text>
            </Card.Content>
          </Card>
          <Expander vertical size={12} />
          <Card style={{ backgroundColor: Color.Foreground1 }}>
            <Card.Content>
              <Text h5>Are you all set?</Text>
              <Expander vertical size={18} />
              <Text>
                You’re in luck! We have special discounted bundles for{" "}
                <Text h5>{discountSoftware}</Text> when you purchase it through
                RazerPay!
              </Text>
            </Card.Content>
          </Card>
          <Expander vertical size={12} />
          {completed ? (
            <Button mode="contained" color={Color.HighlightDisabled}>
              Purchased
            </Button>
          ) : (
            <>
              <Button mode="contained" color={Color.Highlight1}>
                Buy through RazerPay
              </Button>
              <Expander vertical size={12} />
              <Button
                mode="outlined"
                style={{ borderWidth: 2, borderColor: Color.Highlight1 }}
                labelStyle={{ color: Color.Highlight1 }}
              >
                Upload Proof of Purchase
              </Button>
            </>
          )}
        </Expander>
        <Expander vertical size={30} />
      </ScrollView>
    </ScreenContainer>
  );
};
