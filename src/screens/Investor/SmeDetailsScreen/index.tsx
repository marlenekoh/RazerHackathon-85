import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Route } from "@common/Route";
import { RouteProp } from "@react-navigation/native";
import { CompanyCard } from "../CompanyCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Card, IconButton, Button, List } from "react-native-paper";
import { Row } from "@components/Row";
import { Expander } from "@components/Expander";
import { Text } from "@components/Text";
import { Divider } from "@components/Divider";
import { DataGroup } from "@components/DataGroup";
import { ScrollView } from "react-native-gesture-handler";
import { ScreenContainer } from "@components/ScreenContainer";
import { Color } from "@common/Color";

interface SmeDetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.InvestorSmeDetails>;
  route: RouteProp<RootStackParamList, Route.InvestorSmeDetails>;
}

export const SmeDetailsScreen: React.FunctionComponent<SmeDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const cardDetails = route.params;
  const { invested } = cardDetails;
  return (
    <ScreenContainer>
      <ScreenHeader title="Details" onBack={() => navigation.pop()} />
      <ScrollView>
        <CompanyCard {...cardDetails} showActions={false} />
        <Expander vertical size={8} />
        <Expander size={18}>
          <List.Accordion
            title="View Company Full Profile"
            theme={{
              colors: {
                text: Color.TextPrimary,
                primary: Color.Highlight1,
              },
            }}
            style={{ backgroundColor: Color.Foreground1 }}
          >
            <Expander vertical size={8} />
            <Card style={{ backgroundColor: Color.Foreground1 }}>
              <Card.Content>
                <Text h6>Founders</Text>
                <Text p2>Tan Yuan Qi, Benedict Tan, Yang Guokang</Text>
                <Expander vertical size={8} />
                <Text h6>Funding Size (SGD)</Text>
                <Text p2>S$8,000.00</Text>
                <Expander vertical size={8} />
                <Text h6>Company Background</Text>
                <Text p2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Expander vertical size={8} />
                <Text h6>Wensote</Text>
                <Text p2 underline color={Color.Highlight2}>
                  www.tanyuanqi.co
                </Text>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Expander vertical size={12} />
          <Card style={{ backgroundColor: Color.Foreground1 }}>
            <Card.Content>
              <Row>
                <Expander>
                  <DataGroup label="Funded" value="5K" />
                </Expander>
                <Expander>
                  <DataGroup label="Goal" value="50K" />
                </Expander>
              </Row>
              <Expander vertical size={6}>
                <Divider />
              </Expander>
              <Row>
                <Expander>
                  <DataGroup label="Per annum" value="12%" />
                </Expander>
                <Expander>
                  <DataGroup label="Month" value="12" />
                </Expander>
              </Row>
            </Card.Content>
          </Card>
          <Card style={{ backgroundColor: Color.Foreground3 }}>
            <Card.Content>
              <Row>
                <Expander>
                  <DataGroup label="Min. Investment" value="500" />
                </Expander>
                <Expander>
                  <DataGroup label="Max. Investment" value="1.5K" />
                </Expander>
              </Row>
              <Expander vertical size={8} />
              <DataGroup
                large
                label="Investment Amount (SGD)"
                value={invested ? "S$1,200.00" : "S$0.00"}
              />
            </Card.Content>
          </Card>
          <Expander vertical size={12} />
          <Button
            mode="contained"
            color={invested ? Color.HighlightDisabled : Color.Highlight1}
          >
            Invest{invested && "ed"}
          </Button>
          {invested && (
            <>
              <Expander vertical size={12} />
              <Button
                mode="outlined"
                icon="chat"
                style={{ borderWidth: 2, borderColor: Color.Highlight1 }}
                labelStyle={{ color: Color.Highlight1 }}
                onPress={() => {}}
              >
                Chat with Company
              </Button>
            </>
          )}
          <Expander vertical size={40} />
        </Expander>
      </ScrollView>
    </ScreenContainer>
  );
};
