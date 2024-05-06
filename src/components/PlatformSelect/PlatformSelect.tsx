import { useState } from "react";
import { Select, Text } from "../UI";
import { platforms } from "../../constants";
import { motion } from "framer-motion";

const PlatformSelect = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  return (
    <Select
      onChange={(e) => {
        const findedPlatform = platforms.find((item) => item.name === e);
        if (findedPlatform) {
          setSelectedPlatform(findedPlatform);
        }
      }}
      value={selectedPlatform.name}
    >
      <Select.Button>
        <motion.div
          style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}
          animate={{ opacity: [0, 1] }}
          key={selectedPlatform.name}
        >
          {selectedPlatform.icon}
          {selectedPlatform.name}
        </motion.div>
      </Select.Button>
      <Select.Items>
        {platforms.map((platform, i) => (
          <Select.Item value={platform.name} key={i}>
            {platform.icon}
            <Text>{platform.name}</Text>
          </Select.Item>
        ))}
      </Select.Items>
    </Select>
  );
};

export default PlatformSelect;
