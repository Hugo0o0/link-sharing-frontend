export enum ColorToHex {
  "primary" = "var(--clr-primary)",
  "secondary" = "var(--clr-secondary)",
  "black" = "var(--clr-black)",
  "white" = "var(--clr-white)",
  "grey" = "var(--clr-smokey-grey)",
  "dark-grey" = "var(--clr-dark)",
  "danger" = "var(--clr-danger)",
}

export enum LinkPageDescription {
  title = "Customize your links",
  description = "Add/edit/remove links below and then share all your profiles with the world!",
}

export enum ProfilePageDescription {
  title = "Profile Details",
  description = "Add your details to create a personal touch to your profile.",
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
export interface Link {
  platform: PlatformName;
  url: string;
  id: number;
}
