import { PiGithubLogoFill } from "react-icons/pi";
import { SiFrontendmentor } from "react-icons/si";
import { FaSquareXTwitter, FaHashnode } from "react-icons/fa6";
import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebook,
  FaTwitch,
  FaCodepen,
  FaFreeCodeCamp,
  FaGitlab,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";
import { BiLogoDevTo } from "react-icons/bi";
import { SiCodewars } from "react-icons/si";
import {
  PlatformPreview,
  PlatformSelect,
  ValidationByPlatform,
} from "./@types/types";

export const platforms: PlatformSelect[] = [
  {
    label: "Github",
    name: "github",
    icon: <PiGithubLogoFill size={20} />,
  },

  {
    label: "X",
    name: "x",
    icon: <FaSquareXTwitter size={20} />,
  },
  {
    label: "Linkedin",
    name: "linkedin",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    label: "Youtube",
    name: "youtube",
    icon: <FaYoutube size={20} />,
  },
  {
    label: "Instagram",
    name: "instagram",
    icon: <FaInstagram size={20} />,
  },
  {
    label: "Facebook",
    name: "facebook",
    icon: <FaFacebook size={20} />,
  },
  {
    label: "Twitch",
    name: "twitch",
    icon: <FaTwitch size={20} />,
  },
  {
    label: "Devto",
    name: "devto",
    icon: <BiLogoDevTo size={20} />,
  },
  {
    label: "Codewars",
    name: "codewars",
    icon: <SiCodewars size={20} />,
  },
  {
    label: "Codepen",
    name: "codepen",
    icon: <FaCodepen size={20} />,
  },
  {
    label: "Freecodecamp",
    name: "freecodecamp",
    icon: <FaFreeCodeCamp size={20} />,
  },
  {
    label: "Frontendmentor",
    name: "frontendmentor",
    icon: <SiFrontendmentor size={20} />,
  },
  {
    label: "Gitlab",
    name: "gitlab",
    icon: <FaGitlab size={20} />,
  },
  {
    label: "Hashnode",
    name: "hashnode",
    icon: <FaHashnode size={20} />,
  },
  {
    label: "Stackoverflow",
    name: "stackoverflow",
    icon: <FaStackOverflow size={20} />,
  },
];

export const platformPreview: PlatformPreview = {
  github: {
    name: "Github",
    icon: <PiGithubLogoFill size={20} />,
  },
  x: {
    name: "X",
    icon: <FaSquareXTwitter size={20} />,
  },
  linkedin: {
    name: "Linkedin",
    icon: <FaLinkedinIn size={20} />,
  },
  youtube: {
    name: "Youtube",
    icon: <FaYoutube size={20} />,
  },

  instagram: {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
  },
  facebook: {
    name: "Facebook",
    icon: <FaFacebook size={20} />,
  },
  twitch: {
    name: "Twitch",
    icon: <FaTwitch size={20} />,
  },
  devto: {
    name: "Devto",
    icon: <BiLogoDevTo size={20} />,
  },

  codewars: {
    name: "Codewars",
    icon: <SiCodewars size={20} />,
  },
  codepen: {
    name: "Codepen",
    icon: <FaCodepen size={20} />,
  },
  freecodecamp: {
    name: "Freecodecamp",
    icon: <FaFreeCodeCamp size={20} />,
  },
  frontendmentor: {
    name: "Frontendmentor",
    icon: <SiFrontendmentor color="black" size={20} />,
  },
  gitlab: {
    name: "Gitlab",
    icon: <FaGitlab size={20} />,
  },
  hashnode: {
    name: "Hashnode",
    icon: <FaHashnode size={20} />,
  },
  stackoverflow: {
    name: "Stackoverflow",
    icon: <FaStackOverflow size={20} />,
  },
};

export const validationByPlatform: ValidationByPlatform = {
  github: {
    validate: (val: string) => {
      return val.match(/^(https?:\/\/)?(www\.)?github.com\/[a-zA-Z0-9-]+\/?$/);
    },
    message: "Invalid Github URL",
    example: "https://github.com/elonmusk/",
  },
  x: {
    validate: (val: string) => {
      return val.match(/^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9_]+\/?$/);
    },
    message: "Invalid Twitter URL",
    example: "https://twitter.com/elonmusk/",
  },
  linkedin: {
    validate: (val: string) => {
      return val.match(
        /^(https?:\/\/)?(www\.)?linkedin.com\/in\/[a-zA-Z0-9-]+\/?$/
      );
    },
    message: "Invalid LinkedIn URL",
    example: "https://linkedin.com/in/elonmusk/",
  },
  youtube: {
    validate: (val: string) => {
      return val.match(
        /^(https?:\/\/)?(www\.)?youtube.com\/@[a-zA-Z0-9-]+\/?$/
      );
    },
    message: "Invalid Youtube URL",
    example: "https://youtube.com/@elonmusk",
  },
  instagram: {
    validate: (val: string) => {
      return val.match(
        /^(https?:\/\/)?(www\.)?instagram.com\/[a-zA-Z0-9_]+\/?$/
      );
    },
    message: "Invalid Instagram URL",
    example: "https://instagram.com/elonmusk/",
  },
  facebook: {
    validate: (val: string) => {
      return val.match(
        /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9.]+\/?$/
      );
    },
    message: "Invalid Facebook URL",
    example: "https://www.facebook.com/elonmusk/",
  },
  twitch: {
    validate: (val: string) => {
      return val.match(/^(https?:\/\/)?(www\.)?twitch.tv\/[a-zA-Z0-9_]+\/?$/);
    },
    message: "Invalid Twitch URL",
    example: "https://www.twitch.tv/elonmusk/",
  },
  devto: {
    validate: (val: string) => {
      return val.match(/^(https?:\/\/)?(www\.)?dev.to\/[a-zA-Z0-9_]+\/?$/);
    },
    message: "Invalid Dev.to URL",
    example: "https://dev.to/elonmusk/",
  },
  codewars: {
    validate: (val: string) => {
      return val.match(
        /^(https?:\/\/)?(www\.)?codewars.com\/users\/[a-zA-Z0-9_]+\/?$/
      );
    },
    message: "Invalid Codewars URL",
    example: "https://www.codewars.com/users/elonmusk/",
  },
  codepen: {
    validate: (val: string) => {
      return val.match(/^(https?:\/\/)?(www\.)?codepen.io\/[a-zA-Z0-9_]+\/?$/);
    },
    message: "Invalid Codepen URL",
    example: "https://codepen.io/elonmusk/",
  },
  freecodecamp: {
    validate: (val: string) => {
      return val.match(
        /^(https?:\/\/)?(www\.)?freecodecamp.org\/[a-zA-Z0-9_]+\/?$/
      );
    },
    message: "Invalid freeCodeCamp URL",
    example: "https://www.freecodecamp.org/elonmusk/",
  },
  frontendmentor: {
    validate: (val: string) => {
      return val.match(
        /^(https?:\/\/)?(www\.)?frontendmentor.io\/profile\/[a-zA-Z0-9_]+\/?$/
      );
    },
    message: "Invalid Frontend Mentor URL",
    example: "https://www.frontendmentor.io/profile/elonmusk/",
  },
  gitlab: {
    message: "Invalid Gitlab URL",
    validate: (val: string) => {
      return val.match(/^(https?:\/\/)?(www\.)?gitlab.com\/[a-zA-Z0-9_]+\/?$/);
    },
    example: "https://gitlab.com/elonmusk/",
  },
  hashnode: {
    validate: (val: string) => {
      return val.match(
        /^(https?:\/\/)?(www\.)?hashnode.com\/[a-zA-Z0-9_]+\/?$/
      );
    },
    message: "Invalid Hashnode URL",
    example: "https://hashnode.com/elonmusk/",
  },
  stackoverflow: {
    validate: (val: string) => {
      return val.match(
        /^(https?:\/\/)?(www\.)?stackoverflow.com\/users\/[a-zA-Z0-9_]+\/?$/
      );
    },
    message: "Invalid Stackoverflow URL",
    example: "https://stackoverflow.com/users/elonmusk/",
  },
};
