export interface AboutProps {
  image: string;
  tag: string;
  title: string;
  description: string[];
  listOfTags: string[];
  cards: {
    tag: string;
    title: string;
    description: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

export interface WhyZenEventProps {
  tag: string;
  title: string;
  cards: {
    title: string;
    description: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}
