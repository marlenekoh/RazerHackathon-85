import React from "react";
import { IconButton } from "react-native-paper";

import { Expander } from "@components/Expander";
import { Center } from "@components/Center";
import { Text } from "@components/Text";

import { ScreenHeaderContainer } from "./ScreenHeaderContainer";
import { BackButtonContainer } from "./BackButtonContainer";
import { Color } from "@common/Color";

interface ScreenHeaderProps {
  title?: string;
  onBack?: () => void;
}

export const ScreenHeader: React.FunctionComponent<ScreenHeaderProps> = ({
  title = "",
  onBack,
}) => {
  return (
    <ScreenHeaderContainer>
      <BackButtonContainer>
        <IconButton
          icon="arrow-left"
          color={Color.TextPrimary}
          onPress={onBack}
        />
      </BackButtonContainer>
      <Expander vertical size={12}>
        <Center>
          <Text h5 color={Color.TextPrimary}>
            {title}
          </Text>
        </Center>
      </Expander>
    </ScreenHeaderContainer>
  );
};
