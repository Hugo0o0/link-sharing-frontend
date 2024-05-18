import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Select, Text } from "components/UI";
import { platforms } from "constants/constants";
import {
  PlatformName,
  PlatformSelect as PlatformSelectType,
} from "types/types";

interface PlatformSelectProps {
  onChange?: (val: PlatformName) => void;
  platform: PlatformName;
}
const PlatformSelect: FC<PlatformSelectProps> = ({ onChange, platform }) => {
  const [selectedPlatform, setSelectedPlatform] =
    useState<PlatformSelectType | null>(null);

  useEffect(() => {
    const findedPlatform = platforms.find((item) => item.name === platform);
    if (findedPlatform) {
      setSelectedPlatform(findedPlatform);
      onChange && onChange(findedPlatform.name);
    }
  }, [platform]);

  return (
    <Select
      onChange={(e) => {
        const findedPlatform = platforms.find((item) => item.name === e);
        if (findedPlatform) {
          setSelectedPlatform(findedPlatform);
          onChange && onChange(findedPlatform.name);
        }
      }}
      value={selectedPlatform?.name}
    >
      <Select.Button>
        <motion.div
          style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}
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
