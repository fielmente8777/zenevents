import { contact } from "@/utils/constent";

export const landingPageData = {
  bannerData: {
    image: "/landing-page/banner.png",
    tag: "LUXURY EVENT CATERING",
    title: "Bringing Blossom <i class='text-secondary'>to Every Celebration</i>",
    description:
      "Where premium sushi meets beautifully styled, Zen-inspired events.",
    cards: [
      {
        title: "Weddings ",
        description: "& Celebrations",
      },
      {
        title: "Sushi",
        description: "Handcrafted",
      },
      {
        title: "Sakura-Inspired Styling",
        description: "Cherry blossom elegance",
      },
    ],
    benefit:
      "Save 15% on Event Bookings · Instant Confirmation · Flexible Cancellation",
  },

  aboutData: {
    image: "/landing-page/about-us.jpg",
    tag: "Our Story",
    title: "Where Zen Meets Celebration",
    description: [
      "Zen Events & Sushi was created for those who believe that every occasion deserves something extraordinary. We combine Japanese artistry with the timeless beauty of the cherry blossom to create events that are visually stunning and truly unforgettable.",
    ],
    listOfTags: [
      "Elegance",
      "Sophistication",
      "Warmth",
      "Light",
      "Timeless Beauty",
    ],
    cards: [
      {
        tag: "禅",
        title: "Zen",
        description:
          "Peace, mindfulness, simplicity, and balance. The art of creating calm within beautiful surroundings and finding elegance in every detail.",
      },
      {
        tag: "鮨",
        title: "Sushi",
        description:
          "More than food, it is craftsmanship, presentation, and celebration. Each piece carefully prepared with precision and creativity.",
      },
      {
        tag: "桜",
        title: "Sakura",
        description:
          "The cherry blossom symbolises beauty, renewal, joy, and the celebration of special moments. Our guiding aesthetic.",
      },
    ],
    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  events: {
    tag: "Events We Cater For",
    title: "Every Occasion, Beautifully Catered",
    description:
      "From intimate gatherings to grand celebrations, we bring the same care, quality, and elegance every time.",

    cards: [
      {
        title: "Weddings",
        tags: ["WEDDING Receptions", "Engagement"],
        image: "/landing-page/wedding.png",
      },
      {
        title: "Corporate & Commercial",
        tags: ["Conferences", "Networking Events"],
        image: "/landing-page/corporate.png",
      },
      {
        title: "Private Parties",
        tags: ["Birthday Parties", "Anniversaries"],
        image: "/landing-page/private.png",
      },
      {
        title: "Childrens Parties",
        tags: ["Themed Parties", "Custom Themes"],
        image: "/landing-page/childrens.png",
      },
      {
        title: "Retail & Brand Events",
        tags: ["Corporate Launches", "Marketing Events"],
        image: "/landing-page/retail.png",
      },
      {
        title: "Seasonal & Community Events",
        tags: ["Summer Events", "Parties", "Cultural Celebrations"],
        image: "/landing-page/seasonal.png",
      },
    ],

    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  whyZenEvent: {
    tag: "Why Choose Us",
    title: "Why Zen Events & Sushi",

    cards: [
      {
        title: "Handcrafted Excellence",
        description:
          "Every piece of sushi prepared with precision, creativity, and pride. Our food is not produced, it is crafted.",
      },
      {
        title: "Blossom-Inspired Elegance",
        description:
          "The Sakura guides our aesthetic: delicate, beautiful, and full of meaning. Our styling turns catering into decor.",
      },
      {
        title: "An Experience, Not a Service",
        description:
          "Our illuminated stations and considered presentation become a defining feature of every occasion.",
      },
      {
        title: "Versatile Luxury",
        description:
          "From intimate gatherings to grand celebrations, we bring the same care, quality, and elegance every time.",
      },
      {
        title: "Freshly Prepared Ingredients",
        description:
          "Premium ingredients sourced with care, prepared on-site for peak quality and presentation.",
      },
      {
        title: "Warmth at the Heart",
        description:
          "Luxury hospitality that feels genuinely welcoming, joyful, and human, every guest valued.",
      },
      {
        title: "Fully Customisable Menus",
        description:
          "Every menu tailored to your occasion, dietary needs, and vision. No two events are the same.",
      },
    ],

    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  slidingGallery: [
    "/landing-page/1.jpg",
    "/landing-page/2.jpg",
    "/landing-page/3.jpg",
  ],

  ourPromise: {
    tag: "OUR PROMISE",

    title: "Every Celebration Deserves Something Extraordinary",

    description:
      "At Zen Events & Sushi, we combine exquisite food, elegant presentation, and thoughtful service to create unforgettable moments. From intimate gatherings to grand celebrations, we bring harmony, flavour, and sophistication to every event.",

    buttons: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],

    tagLine: "Bringing Blossom to Every Celebration!",
  },
};
