export enum ColorToHex {
  "primary" = "var(--clr-primary)",
  "secondary" = "var(--clr-secondary)",
  "black" = "var(--clr-black)",
  "white" = "var(--clr-white)",
  "grey" = "var(--clr-smokey-grey)",
  "dark-grey" = "var(--clr-dark)",
  "danger" = "var(--clr-danger)",
}
export type Color = keyof typeof ColorToHex;
export type PlatformName =
  | "github"
  | "x"
  | "linkedin"
  | "youtube"
  | "instagram"
  | "facebook"
  | "twitch"
  | "devto"
  | "codewars"
  | "codepen"
  | "freecodecamp"
  | "frontendmentor"
  | "gitlab"
  | "hashnode"
  | "stackoverflow";

export type PlatformPreview = {
  [key in PlatformName]: {
    name: Capitalize<PlatformName>;
    icon: React.ReactNode;
  };
};

export type PlatformSelect = {
  label: Capitalize<PlatformName>;
  name: PlatformName;
  icon: React.ReactNode;
};

export type ValidationByPlatform = {
  [key in PlatformName]: {
    validate: (url: string) => RegExpMatchArray | null;
    example: string;
    message: string;
  };
};
