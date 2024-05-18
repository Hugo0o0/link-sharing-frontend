import { FC } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Text } from "components/UI";
import { PlatformName } from "types/types";
import { platformPreview } from "constants/constants";
import styles from "./PlatformPreview.module.css";

interface PlatformPreviewProps {
  platform: PlatformName;
}
const PlatformPreview: FC<PlatformPreviewProps> = ({ platform }) => {
  const isFrontendMentor = platform === "frontendmentor";
  const iconColor = isFrontendMentor ? "black" : "white";
  return (
    <button
      className={`${styles["platform-preview"]} ${
        styles["platform-preview-" + platform]
      }`}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".8rem",
        }}
      >
        {platformPreview[platform].icon}
        <Text color={iconColor}>{platformPreview[platform].name}</Text>
      </div>
      <BiRightArrowAlt color={iconColor} size={20} />
    </button>
  );
};

export default PlatformPreview;
