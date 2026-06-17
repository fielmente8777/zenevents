import { contact } from "@/utils/constent";
import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";

interface FooterData {
  logo: string;
  description: string;
  cta: {
    label: string;
    href: string;
  }[];
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

// interface WebsiteFooterData {
//   logo: string;
//   description: string[];

//   lists: {
//     title?: string;
//     subtitle?: string;
//     links: {
//       title?: string;
//       icon?: React.ReactNode;
//       label: string;
//       href?: string;
//       label2?: string;
//       href2?: string;
//     }[];
//   }[];
// }

export const footerData: FooterData = {
  logo: "/logo.png",
  description:
    "Elevating events with premium sushi artistry and refined Japanese hospitality since 2012.",
  cta: [
    {
      label: "ENQUIRE NOW",
      href: contact.WhatsappCta,
    },
    {
      label: "BOOK NOW",
      href: "#form",
    },
  ],
  lists: [
    {
      title: "Contact Info",
      links: [
        {
          icon: <FillLocationIcon />,
          label: contact.address,
          href: contact.addressLink,
        },
        {
          title: "Call: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },

        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};
