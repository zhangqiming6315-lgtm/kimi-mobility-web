export const productSlugs = [
  "delivery",
  "utility",
  "urban",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export type ProductCategory = {
  slug: ProductSlug;
  number: string;
  name: string;
  platformName: string;
  headline: string;
  shortTitle: string;
  summary: string;
  purpose: {
    operatingEnvironment: string;
    userScenario: string;
    commercialValue: string;
  };
  applications: readonly {
    title: string;
    description: string;
  }[];
};

export const productCategories: Record<ProductSlug, ProductCategory> = {
  delivery: {
    slug: "delivery",
    number: "01",
    name: "Delivery",
    platformName: "KIMI Delivery Platform",
    headline: "Built for everyday delivery operations.",
    shortTitle: "Last-mile delivery vehicles",
    summary:
      "Purpose-built mobility for courier, food delivery, and local logistics operations.",
    purpose: {
      operatingEnvironment:
        "Dense urban routes, repeated stops, changing traffic conditions, and the daily pace of local delivery work.",
      userScenario:
        "Riders and operators moving goods through neighborhoods, commercial districts, and local distribution routes.",
      commercialValue:
        "A mobility category centered on practical cargo use, rider confidence, and dependable day-to-day operation.",
    },
    applications: [
      {
        title: "Food delivery",
        description:
          "Daily mobility for restaurants, platforms, and local food-delivery operators.",
      },
      {
        title: "Courier services",
        description:
          "Purpose-led movement for parcels, documents, and repeated urban stops.",
      },
      {
        title: "Local logistics",
        description:
          "Electric mobility for short routes connecting businesses, hubs, and customers.",
      },
      {
        title: "Commercial operations",
        description:
          "A practical vehicle category for organizations running regular delivery work.",
      },
    ],
  },
  utility: {
    slug: "utility",
    number: "03",
    name: "Utility",
    platformName: "KIMI Utility Platform",
    headline: "Built for practical work across commercial sites.",
    shortTitle: "Commercial utility mobility",
    summary:
      "Practical electric solutions for service teams, industrial sites, and specialized work.",
    purpose: {
      operatingEnvironment:
        "Commercial facilities, industrial locations, service areas, and worksites where teams move between active tasks.",
      userScenario:
        "Service personnel and site teams carrying tools, supplies, and work essentials across an operation.",
      commercialValue:
        "A practical mobility category designed to support useful carrying needs, straightforward operation, and service access.",
    },
    applications: [
      {
        title: "Facility services",
        description:
          "Everyday movement for teams supporting commercial buildings and sites.",
      },
      {
        title: "Maintenance teams",
        description:
          "Utility-focused mobility for personnel, tools, and recurring service tasks.",
      },
      {
        title: "Industrial sites",
        description:
          "Practical transport within controlled commercial and industrial environments.",
      },
      {
        title: "Specialized work",
        description:
          "A flexible mobility category for defined operational roles and site needs.",
      },
    ],
  },
  urban: {
    slug: "urban",
    number: "04",
    name: "Urban",
    platformName: "KIMI Urban Platform",
    headline: "Built for daily movement through the city.",
    shortTitle: "Urban electric mobility",
    summary:
      "Compact solutions designed for daily city movement and commercial commuting.",
    purpose: {
      operatingEnvironment:
        "Busy city streets, neighborhood routes, commercial districts, and the compact spaces of daily urban travel.",
      userScenario:
        "Commercial users and working riders moving efficiently between city destinations and everyday responsibilities.",
      commercialValue:
        "A focused urban category that prioritizes approachable use, practical dimensions, and everyday mobility.",
    },
    applications: [
      {
        title: "Commercial commuting",
        description:
          "Daily city mobility for working riders and commercial teams.",
      },
      {
        title: "Urban services",
        description:
          "Compact movement for organizations providing services across city areas.",
      },
      {
        title: "Local business",
        description:
          "Practical mobility connecting shops, customers, and neighborhood tasks.",
      },
      {
        title: "Daily city movement",
        description:
          "Electric mobility shaped around frequent, purposeful urban travel.",
      },
    ],
  },
};

export const productPrinciples = [
  {
    title: "Cargo capability",
    description:
      "Vehicle architecture considered around the equipment, goods, and essentials required for commercial work.",
  },
  {
    title: "Rider ergonomics",
    description:
      "A rider-focused approach to everyday access, control, comfort, and repeated use.",
  },
  {
    title: "Reliability",
    description:
      "Product decisions guided by the demands of consistent commercial operation.",
  },
  {
    title: "Serviceability",
    description:
      "A practical approach to vehicle access and the ongoing needs of operators and service partners.",
  },
] as const;
