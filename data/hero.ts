import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { IconType } from "react-icons";

export interface Social {
  icon: IconType;
  href: string;
  label: string;
}

export const socials: Social[] = [
  { icon: FaGithub, href: "https://github.com/seuuser", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/seuuser",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com/seuuser", label: "Twitter" },
  { icon: MdEmail, href: "mailto:seu@email.com", label: "Email" },
];
