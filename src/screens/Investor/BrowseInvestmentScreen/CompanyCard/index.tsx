import React from "react";
import { Expander } from "@components/Expander";
import { Button, Card, ProgressBar, Chip } from "react-native-paper";
import { Row } from "@components/Row";
import { Text } from "@components/Text";

interface CompanyCardProps {
  company: string;
  country: string;
  fundsRequired: number;
  perAnnum: number;
  risk: string;
  invested?: boolean;
}

export const CompanyCard: React.FunctionComponent<CompanyCardProps> = ({
  company,
  country,
  fundsRequired,
  perAnnum,
  risk,
  invested,
}) => {
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
            <Expander vertical size={12} />
          </Card.Content>
          <Card.Actions>
            {invested && (
              <>
                <Expander size={12} />
                <Text p2>
                  You invested <Text h5>$1,200</Text> in this loan.
                </Text>
              </>
            )}
            <Expander />
            <Button>Learn More</Button>
          </Card.Actions>
        </Card>
      </Expander>
    </Expander>
  );
};
