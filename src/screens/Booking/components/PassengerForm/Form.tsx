import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { t } from "@translations";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@store/store";
import { buy } from "@modules/ticket";
import type { ViewStyle } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InputField } from "@components";
import { colors, responsive, textStyles } from "@constants";

const innerMargin = responsive.isSmallScreen ? 0 : 24;

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
    margin: 15,
  },
  mainContainer: {
    width: "100%",
  },
  //   field: {
  //     borderColor: "gray",
  //     borderWidth: 1,
  //     width: "90%",
  //     height: 30,
  //     padding: 15,
  //     borderRadius: 5,
  //     margin: 10,
  //   },
  //   subtotalContainer: {
  //     flexDirection: "row",
  //     margin: 15,
  //   },
  detailsButton: {
    ...buttonCommonStyles,
    backgroundColor: colors.blue,
    marginTop: 20,
  },
  detailsButtonText: {
    ...textStyles.modalButtonText,
    color: colors.white,
  },
  textInput: {
    marginVertical: 5,
  },
  sectionTitle: {
    marginVertical: 10,
    fontWeight: "bold",
  },
});

interface FormProps {
  flightId: string;
}

const Form = ({ flightId }: FormProps) => {
  const initialValues = {
    name: "",
    surname: "",
    passport: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(`${t.form.validations.required}`),
    surname: Yup.string().required(`${t.form.validations.required}`),
    passport: Yup.string()
      .max(9, `${t.form.validations.passportTooLong}`)
      .min(9, `${t.form.validations.passportTooShort}`)
      .required(`${t.form.validations.required}`),
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = () => {
    dispatch(buy(flightId));
  };

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  const onPress = () => {
    handleSubmit();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>{t.myBooking.title}</Text>
        <InputField
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          value={values.name}
          placeholder={t.form.fields.namePlaceholder}
          label={t.form.fields.name}
          mode={"outlined"}
          style={styles.textInput}
          error={errors.name}
          touched={touched.name}
        />
        <InputField
          onChangeText={handleChange("surname")}
          onBlur={handleBlur("surname")}
          value={values.surname}
          placeholder={t.form.fields.surnamePlaceholder}
          label={t.form.fields.surname}
          mode={"outlined"}
          style={styles.textInput}
          error={errors.surname}
          touched={touched.surname}
        />
        <InputField
          onChangeText={handleChange("passport")}
          onBlur={handleBlur("passport")}
          value={values.passport}
          placeholder={t.form.fields.passportPlaceholder}
          label={t.form.fields.passport}
          mode={"outlined"}
          style={styles.textInput}
          blurOnSubmit
          error={errors.passport}
          touched={touched.passport}
        />
        <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
          <Text style={styles.detailsButtonText}>{t.myBooking.continue}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;
