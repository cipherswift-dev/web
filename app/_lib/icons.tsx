// Icon registry — string names in content data map to lucide-react components,
// keeping the data layer plain and CMS-portable.
import {
  Bot, Cpu, Code2, Cloud, Compass, GraduationCap, Sparkles, Smartphone,
  ShieldCheck, Workflow, LineChart, Rocket, Layers, Database, Globe2,
  Users, Star, Target, TrendingUp, PenTool, Search, Settings, Zap,
  type LucideIcon, type LucideProps,
} from "lucide-react";

export {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Mail, MapPin, Phone, Menu, X,
  Bot, Sparkles, LineChart, ShieldCheck, Sun, Moon,
} from "lucide-react";

const REGISTRY: Record<string, LucideIcon> = {
  Bot, Cpu, Code2, Cloud, Compass, GraduationCap, Sparkles, Smartphone,
  ShieldCheck, Workflow, LineChart, Rocket, Layers, Database, Globe2,
  Users, Star, Target, TrendingUp, PenTool, Search, Settings, Zap,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = REGISTRY[name] ?? Sparkles;
  return <Cmp {...props} />;
}
