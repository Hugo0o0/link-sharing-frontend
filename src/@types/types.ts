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
export {};
