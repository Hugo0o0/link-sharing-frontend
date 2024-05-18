import { useFormikContext } from "formik";
import PlatformPreview from "components/PlatformPreview/PlatformPreview";
import { Link } from "types/types";
import phoneMockup from "./phone-mockup.svg";

const IllustrationPhone = () => {
  const { values } = useFormikContext<{ links: Link[] | null }>();
  return (
    <div style={{ position: "relative" }}>
      <img src={phoneMockup} alt="Phone Mockup" />
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          top: "36.5rem",
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        {values.links?.map((link, i) => (
          <PlatformPreview key={i} platform={link.platform} />
        ))}
      </div>
    </div>
  );
};

export default IllustrationPhone;
