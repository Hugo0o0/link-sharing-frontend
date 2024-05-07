import { FC } from "react";
import { Heading, Text } from "../UI";
import { IoImagesOutline } from "react-icons/io5";
import styles from "./ImageUpload.module.css";

interface ImageUploadProps {
  message?: string;
  image?: string;
}

const ButtonWithImage: FC<{ image: string }> = ({ image }) => {
  return (
    <button
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-testid="image-upload-button-with-image"
      className={`${styles["image-upload__button"]} ${styles["image-upload__button-with-image"]}`}
    >
      <IoImagesOutline size={32} />
      <Heading color="white" size="s">
        Change Image
      </Heading>
    </button>
  );
};

const ButtonWithNoImage: FC = () => {
  return (
    <button
      data-testid="image-upload-button-no-image"
      className={`${styles["image-upload__button"]}`}
    >
      <IoImagesOutline size={32} />
      <Heading color="primary" size="s">
        + Upload Image
      </Heading>
    </button>
  );
};

const ImageUpload: FC<ImageUploadProps> = ({ message, image }) => {
  return (
    <div data-testid="image-upload" className={styles["image-upload"]}>
      {image ? <ButtonWithImage image={image} /> : <ButtonWithNoImage />}
      {message && <Text data-testid="text">{message}</Text>}
    </div>
  );
};

export default ImageUpload;
