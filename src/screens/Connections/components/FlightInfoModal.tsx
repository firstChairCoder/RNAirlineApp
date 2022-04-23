import type { Ref } from "react";
import React from "react";
import type { ViewStyle } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { t } from "@translations";
import { FlightData } from "@components";
import { colors, responsive, textStyles } from "@constants";

// const innerBoxHeight = 118;
const innerMargin = responsive.isSmallScreen ? 0 : 24;
// const innerRightMargin = responsive.isSmallScreen ? 0 : 16;

const buttonCommonStyles: ViewStyle = {
  height: 56,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  marginHorizontal: innerMargin,
  marginBottom: 16,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  //   boxesRow: {
  //     flexDirection: "row",
  //   },
  //   leftOuterBox: {
  //     flex: 1,
  //   },
  //   leftInnerBox: {
  //     height: innerBoxHeight,
  //     justifyContent: "center",
  //     borderBottomWidth: 1,
  //     borderColor: colors.modalBorder,
  //     backgroundColor: colors.white,
  //     paddingLeft: innerMargin,
  //   },
  //   rightBox: {
  //     width: 95,
  //     marginRight: innerRightMargin,
  //     backgroundColor: colors.priceBg,
  //     borderTopLeftRadius: 8,
  //     borderTopRightRadius: 8,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   priceLabel: {
  //     ...textStyles.priceLabel,
  //     color: colors.textSecondary,
  //   },
  //   oldPrice: {
  //     ...textStyles.oldPrice,
  //     color: colors.textPrimary,
  //   },
  //   newPrice: {
  //     ...textStyles.newPrice,
  //     color: colors.textPrimary,
  //   },
  transferRow: {
    paddingLeft: innerMargin,
    height: 56,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: colors.modalBorder,
    marginBottom: 20,
  },
  transferLabel: {
    ...textStyles.transferLabel,
    color: colors.textSecondary,
  },
  transferValue: {
    color: colors.transferValue,
  },
  guideButton: {
    ...buttonCommonStyles,
    backgroundColor: colors.whiteBackground,
  },
  guideButtonText: {
    ...textStyles.modalButtonText,
    color: colors.blue,
  },
});

const modalStyles = StyleSheet.create({
  modalContainer: {
    borderRadius: 8,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: colors.modalOverlay,
  },
  modalDraggableIcon: {
    width: 24,
    height: 4,
    backgroundColor: colors.textPrimary,
    borderRadius: 2,
    opacity: 0.1,
  },
});

const modalHeight = 510;

interface FlightInfoModalProps {
  destination: string;
  destinationIata: string;
  time: string;
  origin: string;
  originIata: string;
  modalRef: Ref<RBSheet>;
}

const FlightInfoModal = ({
  modalRef,
  destination,
  destinationIata,
  origin,
  originIata,
  time,
}: FlightInfoModalProps) => {
  return (
    <>
      <RBSheet
        height={modalHeight}
        ref={modalRef}
        closeOnDragDown
        closeOnPressMask
        customStyles={{
          container: modalStyles.modalContainer,
          wrapper: modalStyles.modalWrapper,
          draggableIcon: modalStyles.modalDraggableIcon,
        }}
      >
        <View style={styles.container}>
          <FlightData
            destination={destination}
            destinationIata={destinationIata}
            origin={origin}
            originIata={originIata}
            time={time}
          />
          <View style={styles.transferRow}>
            <Text style={styles.transferLabel}>
              {t.flightInfoModal.transferLabel}
              <Text style={styles.transferValue}>
                {t.flightInfoModal.transferValue}
              </Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.guideButton}>
            <Text style={styles.guideButtonText}>
              {t.flightInfoModal.buttonFirst}
            </Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView />
      </RBSheet>
    </>
  );
};

export default React.memo(FlightInfoModal);
