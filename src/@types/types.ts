export enum ColorToHex {
  "primary" = "var(--clr-primary)",
  "secondary" = "var(--clr-secondary)",
  "black" = "var(--clr-black)",
  "white" = "var(--clr-white)",
  "grey" = "var(--clr-grey)",
}
export type Color = keyof typeof ColorToHex;
export {};
