import React from "react";
import { Card, IconButton } from "react-native-paper";
import { Row } from "@components/Row";
import { Expander } from "@components/Expander";
import { Text } from "@components/Text";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Color } from "@common/Color";

interface SectionProps {
  title: string;
  text: string;
  completed?: boolean;
  onPress?: (sectionProps: {
    title: string;
    subtitle: string;
    description: string;
    industryName: string;
    suggestedSoftware: string;
    discountSoftware: string;
    completed: boolean;
  }) => void;
}

export const Section: React.FunctionComponent<SectionProps> = ({
  title,
  text,
  completed,
  onPress = () => {},
}) => {
  const textProps = completed ? { color: Color.TextTertiary } : {};
  const sectionProps = completed
    ? {
        title,
        subtitle: text,
        description:
          "COMPANY X did the following in phases: \n\n1) Adopting cashless payment facilities \n\n2) Automation of manual process – eg Software that can automate data entry. Take a photo of invoice/ receipt and it will insert data to the software. \n\n3) Automation of transaction – Software that can create rules for certain transactions, eg chasing debtors for outstanding debts \n\n4) Cloud storage – Ensure accounting data is constantly backed and stored in multiple locations",
        industryName: "Industry Name",
        suggestedSoftware: "SafeAreaProvider, Xero, finacio",
        discountSoftware: "SAP Accounting Cloud Software",
        completed: true,
      }
    : {
        title,
        subtitle: text,
        description:
          "COMPANY X did the following in phases:\r\n\r\n1) Hiring of manpower to build digital campaigns and ecommerce sites\r\n\r\n2) Procuring data analytics tools to assess performance of digital campaigns\r\n\r\n3) Investments in equipment for video marketing\r\n\r\n4) VR and AR creation to improve customer experience\r\n",
        industryName: "Food & Manufacturing Services",
        suggestedSoftware: "Salesforce",
        discountSoftware: "Salesforce",
        completed: false,
      };

  return (
    <Card
      style={{ backgroundColor: Color.Foreground1 }}
      onPress={() => onPress(sectionProps)}
    >
      <Card.Content>
        <Row>
          <Text h1 {...textProps} wrap>
            {title}
          </Text>
          <IconButton
            color={Color.TextPrimary}
            icon="arrow-right"
            {...textProps}
          />
        </Row>
        <Text {...textProps}>{text}</Text>
        <Expander vertical size={12} />
      </Card.Content>
      {completed && (
        <Card.Actions style={{ backgroundColor: Color.Foreground3 }}>
          <Row>
            <Expander />
            <Text h5 color={Color.TextTertiary}>
              100% completed
            </Text>
            <IconButton
              icon="checkbox-marked-circle"
              color={Color.HighlightDisabled}
              style={{ marginTop: -2, marginBottom: -2 }}
            />
            <Expander />
          </Row>
        </Card.Actions>
      )}
    </Card>
  );
};
