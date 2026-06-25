import {
  BriefcaseBusiness,
  CircleCheckBig,
  FolderBookmark,
  Pin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { id: 1, value: "1+", label: "Anos de experiência", icon: BriefcaseBusiness },
  { id: 2, value: "15+", label: "Projetos completos", icon: CircleCheckBig },
  { id: 3, value: "15+", label: "Projetos completos", icon: FolderBookmark },
  { id: 4, value: "100%", label: "Commitment", icon: Pin },
];
