import { FC } from "react";
import { platformPreview } from "../../constants";
import styles from "./PlatformPreview.module.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { Text } from "../UI";

interface PlatformPreviewProps {
  platform: keyof typeof platformPreview;
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
