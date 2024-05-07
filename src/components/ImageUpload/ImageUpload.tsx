import { FC, useState } from "react";
import { Heading, Text } from "../UI";
import { IoImagesOutline } from "react-icons/io5";
import styles from "./ImageUpload.module.css";

interface ImageUploadProps {
  message?: string;
  image?: string;
}

interface ButtonWithImageProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  image: string;
}

const UploadImageInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0,
        cursor: "pointer",
      }}
      type="file"
      accept="image/png, image/jpeg"
      {...props}
    />
  );
};

const ButtonWithImage: FC<ButtonWithImageProps> = ({ image, ...props }) => {
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
      <UploadImageInput {...props} />
      <IoImagesOutline size={32} />
      <Heading color="white" size="s">
        Change Image
      </Heading>
    </button>
  );
};

const ButtonWithNoImage: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <button
      data-testid="image-upload-button-no-image"
      className={`${styles["image-upload__button"]}`}
    >
      <UploadImageInput {...props} />
      <IoImagesOutline size={32} />
      <Heading color="primary" size="s">
        + Upload Image
      </Heading>
    </button>
  );
};

const ImageUpload: FC<ImageUploadProps> = ({ message, image }) => {
  const [fileImage, setFileImage] = useState<any>(image);
  const handleChooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div data-testid="image-upload" className={styles["image-upload"]}>
      {fileImage ? (
        <ButtonWithImage onChange={handleChooseImage} image={fileImage} />
      ) : (
        <ButtonWithNoImage onChange={handleChooseImage} />
      )}
      {message && <Text data-testid="text">{message}</Text>}
    </div>
  );
};

export default ImageUpload;
