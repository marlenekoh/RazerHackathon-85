import React from "react";
import { Expander } from "@components/Expander";
import { Button, Card, ProgressBar, Chip } from "react-native-paper";
import { Row } from "@components/Row";
import { Text } from "@components/Text";
import { Color } from "@common/Color";

interface CompanyCardProps {
  company: string;
  country: string;
  industryName: string;
  fundsRequired: number;
  perAnnum: number;
  risk: string;
  invested?: boolean;
  onPress?: () => void;
  showActions?: boolean;
}

export const CompanyCard: React.FunctionComponent<CompanyCardProps> = ({
  company,
  country,
  fundsRequired,
  perAnnum,
  risk,
  invested,
  showActions,
  industryName,
  onPress = () => {},
}) => {
  return (
    <Expander size={18}>
      <Expander vertical size={6}>
        <Card style={{ backgroundColor: Color.Foreground1 }} onPress={onPress}>
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
                <Text h5 color={Color.Highlight1}>
                  {fundsRequired}%
                </Text>{" "}
                of <Text h5>funds required</Text>
              </Text>
              <ProgressBar
                progress={fundsRequired / 100}
                color={Color.Highlight1}
              />
              <Expander vertical size={12} />
              <Row>
                <Chip
                  textStyle={{ fontWeight: "bold" }}
                  style={{ backgroundColor: Color.Highlight2 }}
                >
                  {industryName}
                </Chip>
                <Expander size={12} />
                <Chip
                  textStyle={{ fontWeight: "bold" }}
                  style={{
                    backgroundColor:
                      risk === "Low" ? Color.Highlight2 : Color.Highlight1,
                  }}
                >
                  {risk} Risk
                </Chip>
                <Expander />
              </Row>
            </Expander>
            <Expander vertical size={12} />
          </Card.Content>
          {showActions && (
            <Card.Actions
              style={invested ? { backgroundColor: Color.Foreground3 } : {}}
            >
              {invested && (
                <>
                  <Expander size={12} />
                  <Text p2 numberOfLines={1}>
                    You invested <Text h5>$1,200</Text> in this loan.
                  </Text>
                </>
              )}
              <Expander />
              <Button color={Color.Highlight1}>Learn More</Button>
            </Card.Actions>
          )}
        </Card>
      </Expander>
    </Expander>
  );
};
