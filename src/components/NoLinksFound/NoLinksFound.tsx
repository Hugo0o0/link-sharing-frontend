import styles from "./NoLinksFound.module.css";
import IllustrationEmpty from "../IllustrationEmpty/IllustrationEmpty";
import { Heading, Text } from "../UI";

const NoLinksFound = () => {
  return (
    <div className={styles.nolink}>
      <IllustrationEmpty />
      <div className={styles.nolink__text}>
        <Heading color="dark-grey">Let’s get you started</Heading>
        <Text color="grey">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </Text>
      </div>
    </div>
  );
};

export default NoLinksFound;
