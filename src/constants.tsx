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
import { Color } from "./@types/types";

export const platforms = [
  {
    name: "Github",
    icon: <PiGithubLogoFill size={20} />,
  },

  {
    name: "X",
    icon: <FaSquareXTwitter size={20} />,
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    name: "Youtube",
    icon: <FaYoutube size={20} />,
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
  },
  {
    name: "Facebook",
    icon: <FaFacebook size={20} />,
  },
  {
    name: "Twitch",
    icon: <FaTwitch size={20} />,
  },
  {
    name: "Dev.to",
    icon: <BiLogoDevTo size={20} />,
  },
  {
    name: "Codewars",
    icon: <SiCodewars size={20} />,
  },
  {
    name: "Codepen",
    icon: <FaCodepen size={20} />,
  },
  {
    name: "freeCodeCamp",
    icon: <FaFreeCodeCamp size={20} />,
  },
  {
    name: "Frontend Mentor",
    icon: <SiFrontendmentor size={20} />,
  },
  {
    name: "Gitlab",
    icon: <FaGitlab size={20} />,
  },
  {
    name: "Hashnode",
    icon: <FaHashnode size={20} />,
  },
  {
    name: "Stack Overflow",
    icon: <FaStackOverflow size={20} />,
  },
];
