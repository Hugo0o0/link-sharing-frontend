import { FC } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { useFormikContext } from "formik";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { FormInput, Text } from "components/UI";
import PlatformSelect from "components/PlatformSelect/PlatformSelect";
import { validationByPlatform } from "constants/constants";
import { Link } from "types/types";
import styles from "./SelectLink.module.css";
interface AddNewLinkProps {
  index: number;
  remove: <T = any>(index: number) => T | undefined;
  listeners: SyntheticListenerMap | undefined;
}

const AddNewLink: FC<AddNewLinkProps> = ({ index, remove, listeners }) => {
  const { values, setFieldValue, errors } = useFormikContext<{
    links: Link[];
  }>();

  const inputPlaceHolder =
    validationByPlatform[values.links[index].platform].example;
  const inputErrorMessage = errors.links ? errors.links[index] : null;
  return (
    <>
      <div className={styles["new-link-head"]}>
        <div className={styles["new-link-head__left"]}>
          <HiOutlineMenu {...listeners} />
          <p>Link #{index + 1}</p>
        </div>
        <button type="button" onClick={() => remove(index)}>
          Remove
        </button>
      </div>

      <div className={styles["new-link__input"]}>
        <Text size="s">Platform</Text>
        <PlatformSelect
          onChange={(v) => {
            setFieldValue(`links[${index}].platform`, v);
          }}
          platform={values.links[index].platform}
        />
      </div>
      <div className={styles["new-link__input"]}>
        <Text size="s">Link</Text>
        <FormInput
          name={`links[${index}].url`}
          type="text"
          placeholder={inputPlaceHolder}
          value={values.links[index].url}
          error={inputErrorMessage as string}
          onChange={(e) => {
            setFieldValue(`links[${index}].url`, e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default AddNewLink;
