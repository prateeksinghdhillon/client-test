import TreeImage from "../assets/tree-image.png";
import statue from "../assets/statue.png";
interface TextDisplayItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const textDisplayItems: TextDisplayItem[] = [
  {
    id: "crypto-values",
    title: "The crypto space has drifted from its core values",
    description:
      "Modern tokenomics of crypto projects, including quest platforms, have shifted from the core principle of publicly owned money, diminishing the fairness that Bitcoin originally stood for.",
    imageUrl: TreeImage,
  },
  {
    id: "decentralization",
    title: "We are here to fix it",
    description:
      "Today, truly fair tokenomics models - apart from Proof of Work - are virtually non-existent, not due to malice, but because designing them is extraordinarily hard.\n \nDespite the difficulty, we accepted the challenge and, after several years of dedicated work, developed an innovative approach to tokenomics, which became the cornerstone of Questfall.",
    imageUrl: statue,
  },
];

// Grid background is shared across all items
export const GRID_BACKGROUND_URL = "/assets/grid-background.png";
