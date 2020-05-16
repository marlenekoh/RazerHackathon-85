import React from "react";
import { Text } from "@components/Text";
import { ScreenHeader } from "@components/ScreenHeader";
import { Card, Chip, Button, Avatar, IconButton } from "react-native-paper";
import { Expander } from "@components/Expander";
import { Row } from "@components/Row";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Route } from "@common/Route";
import { RouteProp } from "@react-navigation/native";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Color } from "@common/Color";
import { ScreenContainer } from "@components/ScreenContainer";

interface ProfileScreenProps {
  navigation: StackNavigationProp<RootStackParamList, Route.SmeProfile>;
  route: RouteProp<RootStackParamList, Route.SmeProfile>;
}

export const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <ScreenContainer>
      <ScreenHeader onBack={() => navigation.pop()} />
      <ScrollView>
        <Expander size={30}>
          <Row>
            <Avatar.Image
              source={{
                uri:
                  "https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png",
              }}
              size={70}
            />
            <Expander size={20} />
            <View>
              <Text h5>Really Long Name</Text>
              <Text>Really Long Company Name</Text>
            </View>
            <Expander />
            <IconButton
              color={Color.Highlight1}
              icon="pencil"
              onPress={() => {}}
            />
          </Row>
        </Expander>
        <Expander vertical size={30} />
        <Row>
          <Expander size={30} />
          <Text h4>Industry</Text>
        </Row>
        <Expander vertical size={10} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <Row>
              <Expander size={14} />
              <Text>Food and Beverage etc.</Text>
            </Row>
          </Card.Content>
        </Card>

        <Expander vertical size={20} />
        <Row>
          <Expander size={30} />
          <Text h4>Bank Account No.</Text>
        </Row>
        <Expander vertical size={10} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <Row>
              <Expander size={14} />
              <Text>OCBC XXX-XXXXXX-XXX</Text>
            </Row>
          </Card.Content>
        </Card>

        <Expander vertical size={20} />
        <Row>
          <Expander size={30} />
          <Text h4>Loan Proposal Status</Text>
        </Row>
        <Expander vertical size={10} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <Row>
              <Expander size={14} />
              <Text>Submitted</Text>
            </Row>
          </Card.Content>
        </Card>
        <Expander vertical size={4} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <Row>
              <Expander size={14} />
              <Text>Link to RazerPay</Text>
              <Expander />
              <Text color={Color.HighlightDisabled}>Linked</Text>
              <Expander size={14} />
            </Row>
          </Card.Content>
        </Card>

        <Expander vertical size={20} />
        <Row>
          <Expander size={30} />
          <Text h4>Goal Amount Set S$</Text>
        </Row>
        <Expander vertical size={10} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <Row>
              <Expander size={14} />
              <Text>****</Text>
              <Expander />
              <Text color={Color.Highlight1}>Tap to View</Text>
              <Expander size={14} />
            </Row>
          </Card.Content>
        </Card>

        <Expander vertical size={20} />
        <Row>
          <Expander size={30} />
          <Text h4>Razer's Credit Scoring</Text>
          <IconButton icon="information" color={Color.Highlight1} />
        </Row>
        <Expander vertical size={10} />
        <Card style={{ backgroundColor: Color.Foreground1 }}>
          <Card.Content>
            <Row>
              <Expander size={14} />
              <Text>-</Text>
            </Row>
          </Card.Content>
        </Card>
        <Expander vertical size={30} />
        <Expander size={80}>
          <Text align="center">
            Head to the web platform to edit your detailed overview.
          </Text>
        </Expander>
        <Expander vertical size={30} />
      </ScrollView>
    </ScreenContainer>
  );
};
