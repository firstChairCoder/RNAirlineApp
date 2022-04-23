import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { t } from "@translations";
import { colors, textStyles } from "@constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.whiteBackground,
  },
  contentContiner: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    ...textStyles.emptyTitle,
    color: colors.textPrimary,
    marginBottom: 8,
    marginTop: 24,
    textAlign: "center",
  },
  emptyDescription: {
    ...textStyles.emptyDescription,
    color: colors.textSecondary,
    textAlign: "center",
    maxWidth: 256,
  },
});

const EmptyState = () => {
  return (
    <ScrollView
      alwaysBounceVertical={false}
      style={styles.container}
      contentContainerStyle={styles.contentContiner}
    >
      <Image source={require("../../../../assets/images/empty.png")} />
      <Text style={styles.emptyTitle}>{t.connections.emptyTitle}</Text>
      <Text style={styles.emptyDescription}>
        {t.connections.emptyDescription}
      </Text>
    </ScrollView>
  );
};

export default React.memo(EmptyState);
