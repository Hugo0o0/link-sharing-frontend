import { FC, useEffect, useState } from "react";
import { Select, Text } from "../UI";
import { platforms } from "../../constants";
import { motion } from "framer-motion";
import {
  PlatformName,
  PlatformSelect as PlatformSelectType,
} from "../../@types/types";

interface PlatformSelectProps {
  onChange?: (val: PlatformSelectType) => void;
  platform?: PlatformName;
}
const PlatformSelect: FC<PlatformSelectProps> = ({ onChange, platform }) => {
  const [selectedPlatform, setSelectedPlatform] =
    useState<PlatformSelectType | null>(null);

  useEffect(() => {
    if (platform) {
      const findedPlatform = platforms.find((item) => item.name === platform);
      if (findedPlatform) {
        setSelectedPlatform(findedPlatform);
        onChange && onChange(findedPlatform);
      }
    }
  }, []);

  return (
    <Select
      onChange={(e) => {
        const findedPlatform = platforms.find((item) => item.name === e);
        if (findedPlatform) {
          setSelectedPlatform(findedPlatform);
          onChange && onChange(findedPlatform);
        }
      }}
      value={selectedPlatform?.name}
    >
      <Select.Button>
        <motion.div
          style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}
          animate={{ opacity: [0, 1] }}
          key={selectedPlatform?.name}
        >
          {selectedPlatform ? (
            <>
              {selectedPlatform.icon}
              <Text>{selectedPlatform.label}</Text>
            </>
          ) : (
            <Text>Select a platform</Text>
          )}
        </motion.div>
      </Select.Button>
      <Select.Items>
        {platforms.map((platform, i) => (
          <Select.Item value={platform.name} key={i}>
            {platform.icon}
            <Text>{platform.label}</Text>
          </Select.Item>
        ))}
      </Select.Items>
    </Select>
  );
};

export default PlatformSelect;
