import type { LucideIcon } from "lucide-react";
import { Blocks, BrainCircuit, Code2, ShieldCheck, Sparkles, Workflow } from "lucide-react";

export type Solution = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export const solutions: Solution[] = [
  {
    title: "AI products",
    description: "Useful, human-first AI experiences that move from idea to adoption.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Vibrant abstract gradient in blue and pink",
  },
  {
    title: "Digital systems",
    description: "Connected platforms that make your operations feel effortless.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Satellite view of a connected world",
  },
  {
    title: "Growth engines",
    description: "Experiments, data, and intelligent automation designed to compound.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Colourful analytics visualisation",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Applied AI",
    description: "From the right model to the right workflow, we create AI your team can actually use.",
    icon: BrainCircuit,
    accent: "aqua",
  },
  {
    title: "Product design",
    description: "We turn complicated systems into clear, memorable product experiences.",
    icon: Sparkles,
    accent: "pink",
  },
  {
    title: "Modern engineering",
    description: "Fast, resilient software built to evolve with the opportunities ahead.",
    icon: Code2,
    accent: "violet",
  },
  {
    title: "Automation",
    description: "Intelligent handoffs that remove the repetitive work holding teams back.",
    icon: Workflow,
    accent: "orange",
  },
  {
    title: "Platform strategy",
    description: "The roadmap, operating model, and technical choices to create real momentum.",
    icon: Blocks,
    accent: "mint",
  },
  {
    title: "Responsible by design",
    description: "Security, quality, and people stay at the centre of everything we make.",
    icon: ShieldCheck,
    accent: "blue",
  },
];

export const journey = [
  ["01", "Find the signal", "We look past the noise to frame the opportunity worth solving."],
  ["02", "Shape the system", "We design the customer experience and technical blueprint together."],
  ["03", "Build in the open", "Small releases, meaningful feedback, and a clear view of progress."],
  ["04", "Launch with confidence", "A polished product, a prepared team, and metrics that matter."],
  ["05", "Keep compounding", "We stay close to help you learn, optimise, and create the next advantage."],
] as const;
