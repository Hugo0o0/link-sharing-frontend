import styles from "./AddNewLink.module.css";
import { HiOutlineMenu } from "react-icons/hi";
import { FormInput, Text } from "../UI";
import PlatformSelect from "../PlatformSelect/PlatformSelect";
import { FC, useEffect, useState } from "react";
import { validationByPlatform } from "../../constants";
import { useFormik } from "formik";
import { PlatformSelect as PlatformSelectType } from "../../@types/types";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

interface AddNewLinkProps {
  listeners: SyntheticListenerMap | undefined;
}
const AddNewLink: FC<AddNewLinkProps> = ({ listeners }) => {
  const [platform, setPlatform] = useState<PlatformSelectType | null>(null);

  const { values, errors, handleChange, handleBlur, resetForm } = useFormik({
    initialValues: {
      platformLink: "",
    },
    onSubmit: () => {},
    validate(values) {
      if (!platform) return;
      const errors: Record<string, string> = {};
      const validation = validationByPlatform[platform.name].validate(
        values.platformLink
      );
      if (!validation) {
        errors.platformLink = validationByPlatform[platform.name].message;
      }
      return errors;
    },
  });

  return (
    <>
      <div className={styles["new-link-head"]}>
        <div className={styles["new-link-head__left"]}>
          <HiOutlineMenu {...listeners} />
          <p>Link #1</p>
        </div>
        <button>Remove</button>
      </div>

      <div className={styles["new-link__input"]}>
        <Text size="s">Platform</Text>
        <PlatformSelect
          onChange={(v) => {
            setPlatform(v);
            resetForm();
          }}
        />
      </div>
      <div className={styles["new-link__input"]}>
        <Text size="s">Link</Text>
        <FormInput
          value={values.platformLink}
          placeholder={
            validationByPlatform[platform ? platform.name : "x"].example
          }
          onChange={(e) => {
            handleChange(e);
          }}
          error={errors.platformLink}
          onBlur={handleBlur}
          name="platformLink"
        />
      </div>
    </>
  );
};

export default AddNewLink;
