import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors, textStyles } from "@constants";

const styles = StyleSheet.create({
  headerText: {
    ...textStyles.header,
    color: colors.textPrimary,
  },
  headerHighlightedText: {
    ...textStyles.headerBold,
    color: colors.blue,
  },
});

interface HeaderProps {
  headerFirstLine: string;
  headerHighlightedText: string;
  headerSecondLine?: string;
  textColor?: string;
  highlightedTextColor?: string;
}

const Header = ({
  headerFirstLine,
  headerSecondLine,
  headerHighlightedText,
  textColor = colors.textPrimary,
  highlightedTextColor = colors.blue,
}: HeaderProps) => (
  <>
    <Text style={[styles.headerText, !!textColor && { color: textColor }]}>
      {headerFirstLine}
    </Text>
    <Text style={styles.headerText}>
      {headerSecondLine && `${headerSecondLine} `}
      <Text
        style={[
          styles.headerHighlightedText,
          !!highlightedTextColor && { color: highlightedTextColor },
        ]}
      >
        {headerHighlightedText}
      </Text>
    </Text>
  </>
);

export default Header;
