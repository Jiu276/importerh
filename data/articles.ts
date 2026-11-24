import { unsplash } from "@/lib/utils";

export const categories = [
  "Product Reviews",
  "Platform Guides",
  "Sourcing",
  "Market Insights",
] as const;

export type Category = (typeof categories)[number];

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  cover: string;
  coverAlt: string;
  author: { name: string; role: string };
  featured?: boolean;
  relatedProducts?: string[];
  content: ContentBlock[];
};

export const articles: Article[] = [
  {
    slug: "kitchen-gadgets-that-keep-winning-in-dropshipping",
    title: "Kitchen Gadgets That Keep Winning in Dropshipping",
    excerpt:
      "Air fryers, milk frothers, and compact prep tools still convert. We mapped the SKUs, landed costs, and listing angles that held up through spring 2026.",
    category: "Product Reviews",
    date: "2026-05-11",
    readTime: "9 min",
    cover: unsplash("photo-1556912173-3bb406ef7e77"),
    coverAlt: "Warm kitchen counter with cookware and fresh ingredients",
    author: { name: "Lina Ortiz", role: "Product Reviewer" },
    featured: true,
    relatedProducts: ["ninja-air-fryer-pro-xl"],
    content: [
      {
        type: "p",
        text: "Kitchen is unforgiving. Shoppers compare photos, reviews, and wattage before they ever add to cart. That is also why a tight kitchen catalog remains one of the most reliable dropshipping lanes: the demand is daily, the reorder cycle is short, and a single hero photo can carry a listing if the product actually performs.",
      },
      {
        type: "p",
        text: "We spent eight weeks sampling compact appliances that importers keep relisting. The winners were not the cheapest units on 1688. They were the ones that survived a week of real cooking, photographed cleanly, and had spare parts a freight forwarder could actually source.",
      },
      {
        type: "h2",
        text: "What still sells after the 2025 glut",
      },
      {
        type: "p",
        text: "Air fryers remain the volume leader, but the market has split. Shoppers now want a windowed basket, a dishwasher-safe tray, and a claimed capacity that matches the interior. Undersized 3-quart units with 6-quart photography get returned. Dual-zone models still command a premium if the app is optional rather than mandatory.",
      },
      {
        type: "image",
        src: unsplash("photo-1556909114-f6e7ad7d3136"),
        alt: "Stainless kitchen appliances arranged on a marble counter",
        caption: "Clean, well-lit product photography still outperforms lifestyle clutter in this category.",
      },
      {
        type: "list",
        items: [
          "Windowed air fryers in the 5–7 quart range, 1500–1700W, with a removable crisper plate.",
          "Milk frothers with a metal whisk that can be replaced without a full unit swap.",
          "Handheld vegetable choppers that do not crack after 30 cycles of onions and carrots.",
          "Silicone baking mats sold as two-packs — the margin holds even after Amazon ads.",
        ],
      },
      {
        type: "h2",
        text: "Landed-cost notes",
      },
      {
        type: "p",
        text: "A 5.5-quart air fryer that invoices at $28 FOB Ningbo lands closer to $41 after ocean freight, ISF, and last-mile into a US 3PL. Retail between $69 and $89 is still viable if returns stay under 8%. Anything with a glass lid and a cheap hinge will blow that number.",
      },
      {
        type: "quote",
        text: "If you cannot explain the wattage, the basket size, and the spare-part story in one paragraph, do not list it.",
        cite: "Lina Ortiz",
      },
      {
        type: "p",
        text: "Pair the listing with a short recipe card PDF. Kitchen buyers collect proof that the gadget will earn counter space. That extra asset is cheap to produce and still rare among dropship catalogs.",
      },
    ],
  },
  {
    slug: "amazon-fba-vs-your-own-store-margin-math-2026",
    title: "Amazon FBA vs Your Own Store: Margin Math for 2026",
    excerpt:
      "Referral fees, storage, and ads have shifted again. We ran the same three SKUs through FBA and a Shopify storefront to see where cash actually survives.",
    category: "Market Insights",
    date: "2026-04-03",
    readTime: "11 min",
    cover: unsplash("photo-1553413077-190dd305871c"),
    coverAlt: "Warehouse aisles stacked with fulfillment cartons",
    author: { name: "Owen Hart", role: "Platform Analyst" },
    featured: true,
    content: [
      {
        type: "p",
        text: "Operators still treat Amazon as the default front door. That made sense when ads were cheaper and storage was a rounding error. In 2026 the same carton can look profitable in Seller Central and thin once you add aged inventory surcharges, inbound placement, and a 15% referral on a $42 gadget.",
      },
      {
        type: "p",
        text: "We modeled three live SKUs — a mid-tier earbud, a portable power station accessory, and a kitchen chopper — through FBA and through a Shopify store with a 3PL. The question was not which channel is “better.” It was where contribution margin stays above 18% after ads.",
      },
      {
        type: "h2",
        text: "The FBA stack, itemized",
      },
      {
        type: "list",
        items: [
          "Referral fee: 15% on most consumer electronics and kitchen, 8–15% depending on category.",
          "Fulfillment fee: $4.30–$7.80 for the units we tested, size-tier dependent.",
          "Inbound placement and inventory: $0.20–$0.55 per unit once you leave the low-inventory discount.",
          "Ads: $0.80–$1.90 TACOS on competitive keywords in Q1 2026.",
        ],
      },
      {
        type: "h2",
        text: "The independent storefront stack",
      },
      {
        type: "p",
        text: "Shopify plus a US 3PL looks more expensive on paper until you remove Amazon ads. Payment processing, theme, and apps ran about $0.90 per order. Outbound pick-pack was $3.40–$4.10. The real cost is traffic: Meta and Google do not replace the Amazon search box. For branded accessories with reviews already in the wild, the storefront won. For unbranded commodities, FBA still cleared faster.",
      },
      {
        type: "image",
        src: unsplash("photo-1460925895917-afdab827c52f"),
        alt: "Laptop displaying analytics charts on a wooden desk",
        caption: "Run contribution margin weekly. Channel mix that worked in October can stall by March.",
      },
      {
        type: "quote",
        text: "Use Amazon to learn the keyword. Use your store to keep the customer. Mixing those jobs is how catalogs leak cash.",
        cite: "Owen Hart",
      },
      {
        type: "p",
        text: "Our working rule for 2026: if a SKU needs more than 12% TACOS to rank, move the hero offer off Amazon and keep FBA as a convenience channel. If it ranks on organic with TACOS under 8%, keep feeding FBA and treat the store as a retention layer.",
      },
    ],
  },
  {
    slug: "portable-power-stations-tested-for-outdoor-retail",
    title: "Portable Power Stations We Tested for Outdoor Retail",
    excerpt:
      "Seven compact stations, three weekends of camping loads, and a clear split between units you can import and units you should leave on the factory floor.",
    category: "Product Reviews",
    date: "2026-02-16",
    readTime: "10 min",
    cover: unsplash("photo-1504280390367-361c6d9f38f4"),
    coverAlt: "Canvas tents at a campsite beside forest at dusk",
    author: { name: "Lina Ortiz", role: "Product Reviewer" },
    relatedProducts: ["ecoflow-river-2-pro", "anker-737-power-bank"],
    content: [
      {
        type: "p",
        text: "Portable power is no longer a niche for overlanders. Hardware stores, outdoor catalogs, and Amazon storefronts all want a 300–800Wh unit that can run a mini fridge, charge phones, and survive a weekend without a generator’s noise. The import market is crowded with lookalikes that share the same battery cells and wildly different BMS firmware.",
      },
      {
        type: "p",
        text: "We ran seven units through a camping load: a 40W fridge, two phones, a camera battery, and a string of LED lights. We also checked UN38.3 paperwork, cycle claims against a 200-cycle sample, and whether the AC inverter clipped under a 600W kettle.",
      },
      {
        type: "h2",
        text: "What separated the keepers",
      },
      {
        type: "list",
        items: [
          "Honest capacity: a labeled 768Wh that delivered at least 700Wh at 25°C.",
          "Pass-through charging that did not throttle the inverter.",
          "A screen that shows input, output, and remaining time without an app login.",
          "Replacement AC cables and Anderson connectors available as spare SKUs.",
        ],
      },
      {
        type: "image",
        src: unsplash("photo-1509391366360-2e959784a276"),
        alt: "Solar panels installed in a sunny outdoor field",
        caption: "Solar input ratings are often optimistic. Test with a real 100–200W panel, not a bench PSU.",
      },
      {
        type: "h2",
        text: "Import flags",
      },
      {
        type: "p",
        text: "Lithium stations need UN38.3, MSDS, and — for the US — a clear path through a battery-savvy forwarder. Do not book these as general cargo. Several factories will still quote LCL without mentioning that the carrier will refuse the booking. Build that extra week into your calendar.",
      },
      {
        type: "quote",
        text: "If the factory cannot send the UN38.3 PDF before they send a sample, there is no order.",
        cite: "James Okonkwo",
      },
      {
        type: "p",
        text: "For outdoor retail, we would import the EcoFlow-class compact units and a high-capacity power bank as an add-on. Skip no-name 1000W inverters in plastic shells that flex when you lift them. Returns will erase the extra margin.",
      },
    ],
  },
  {
    slug: "freight-forwarding-guide-for-small-importers",
    title: "Freight Forwarding Without the Headache: A Small Importer’s Guide",
    excerpt:
      "How to choose a forwarder, read a quote, and keep a 2–8 CBM shipment moving when you do not have a logistics team.",
    category: "Sourcing",
    date: "2026-01-09",
    readTime: "12 min",
    cover: unsplash("photo-1578575437130-527eed3abbec"),
    coverAlt: "Stacked shipping containers at a commercial port",
    author: { name: "James Okonkwo", role: "Logistics Lead" },
    featured: true,
    content: [
      {
        type: "p",
        text: "Most first-year importers lose money in the gap between the factory gate and the warehouse dock. Not because ocean freight is mysterious, but because quotes hide origin fees, destination fees, and a week of demurrage that nobody mentioned on WeChat.",
      },
      {
        type: "p",
        text: "This is the working guide we give operators who ship 2–8 CBM at a time — too big for a courier, too small for a dedicated FCL team.",
      },
      {
        type: "h2",
        text: "What a complete quote must include",
      },
      {
        type: "list",
        items: [
          "Pickup inland (factory to warehouse or port).",
          "Export customs and documentation.",
          "Ocean or air freight, named carrier, named routing.",
          "Destination THC, ISF or AMS, customs clearance, and last-mile to your 3PL.",
          "Free time at destination, in writing.",
        ],
      },
      {
        type: "image",
        src: unsplash("photo-1601584115197-04ecc0da31d7"),
        alt: "Freight truck on a highway carrying a shipping container",
        caption: "Last-mile is where “cheap” quotes usually break. Confirm the delivery ZIP before you book.",
      },
      {
        type: "h2",
        text: "How we pick a forwarder",
      },
      {
        type: "p",
        text: "Ask for two recent arrival notices with the shipper’s name removed. A serious desk can show you how they handle holds, ISF filings, and a missed cutoff. If the salesperson can only send a rate sheet, keep looking. For battery and kitchen appliances, confirm they have actually cleared those HS codes.",
      },
      {
        type: "quote",
        text: "A $180 cheaper quote that sits four days at the terminal is not cheaper.",
        cite: "James Okonkwo",
      },
      {
        type: "p",
        text: "Keep a simple tracker: PO number, carton count, CBM, estimated departure, actual departure, arrival, and delivery. Share it with the factory and the forwarder. Most delays are just nobody owning the next step.",
      },
    ],
  },
  {
    slug: "smart-home-gadgets-with-fastest-q4-turnaround",
    title: "Smart Home Gadgets With the Fastest Turnaround in Q4",
    excerpt:
      "Hubs, plugs, and sensors that factories could actually produce before the holiday cutoff — plus the certification traps that stalled everyone else.",
    category: "Product Reviews",
    date: "2025-11-14",
    readTime: "8 min",
    cover: unsplash("photo-1558002038-1055907df827"),
    coverAlt: "Modern living room with smart lighting and connected devices",
    author: { name: "Lina Ortiz", role: "Product Reviewer" },
    relatedProducts: ["aqara-hub-m3"],
    content: [
      {
        type: "p",
        text: "Q4 smart home is a timing problem disguised as a product problem. Matter support, 2.4GHz reliability, and a clean app screenshot matter, but none of it helps if the factory cannot ship before the October ocean cutoff.",
      },
      {
        type: "p",
        text: "We asked four Shenzhen and two Hangzhou suppliers for realistic lead times on hubs, plugs, and contact sensors in September 2025. The units that made it onto US shelves by mid-November shared three traits: existing FCC IDs, a Matter-over-Thread or well-known Wi-Fi stack, and packaging that was already in the warehouse.",
      },
      {
        type: "h2",
        text: "SKUs that cleared the calendar",
      },
      {
        type: "list",
        items: [
          "Thread/Matter hubs with a display — slower to sell through, higher AOV.",
          "Two-packs of energy-monitoring plugs with UL-style housings.",
          "Door and window sensors that pair without a proprietary bridge.",
          "Smart bulbs only if you already have the SKU live; new bulb molds missed the cutoff.",
        ],
      },
      {
        type: "image",
        src: unsplash("photo-1543512214-318c7553f230"),
        alt: "Smart speaker on a wooden side table in a living room",
        caption: "Voice-assistant compatibility still influences conversion even when Matter is on the box.",
      },
      {
        type: "h2",
        text: "Certification is the real lead time",
      },
      {
        type: "p",
        text: "A new radio layout is not a two-week job. If a factory offers to “put your logo on our certified board,” that is often the only path that hits Q4. Custom firmware with a new cloud is a spring project, not a holiday project.",
      },
      {
        type: "p",
        text: "We still like the hub-plus-sensor bundle as a catalog anchor. Attach a simple setup card and a 30-day swap policy. Smart home returns are usually pairing failures, not hardware failures.",
      },
    ],
  },
  {
    slug: "alibaba-global-sources-made-in-china-showdown",
    title: "Alibaba, Global Sources, or Made-in-China? Marketplace Showdown",
    excerpt:
      "Where serious importers still find factories, how gold-supplier badges mislead, and which desk we use for which category.",
    category: "Platform Guides",
    date: "2025-09-22",
    readTime: "10 min",
    cover: unsplash("photo-1587293852726-70cdb56c2866"),
    coverAlt: "Aerial view of colorful shipping containers in a cargo yard",
    author: { name: "Maya Chen", role: "Sourcing Editor" },
    featured: true,
    content: [
      {
        type: "p",
        text: "B2B marketplaces are not interchangeable catalogs. Alibaba is a discovery engine with a lot of trading companies. Global Sources still behaves like a trade-show directory. Made-in-China is quieter, often more factory-direct, and slower to message back. We use all three. We do not treat them the same.",
      },
      {
        type: "h2",
        text: "How we start a search",
      },
      {
        type: "p",
        text: "For a known product — earbuds, air fryers, power stations — we start on Alibaba to map price bands, then verify the same company on a second platform and on the Chinese business registry. For a new mold or a quieter industrial SKU, Global Sources and Made-in-China surface factories that never bought Alibaba ads.",
      },
      {
        type: "list",
        items: [
          "Alibaba: fastest sampling, heaviest trading-company noise, Trade Assurance is useful for first POs under $8k.",
          "Global Sources: better for verified manufacturers in electronics and home, especially around fair season.",
          "Made-in-China: fewer glossy storefronts, more OEM plants, slower English-language support.",
        ],
      },
      {
        type: "image",
        src: unsplash("photo-1586528116311-ad8dd3c8310d"),
        alt: "Warehouse worker reviewing inventory among pallet racks",
        caption: "A Gold Supplier badge is a marketing spend. A factory audit is a decision.",
      },
      {
        type: "quote",
        text: "If the only person who answers is a salesperson with twelve unrelated categories in their signature, you are not talking to the plant.",
        cite: "Maya Chen",
      },
      {
        type: "h2",
        text: "A practical split",
      },
      {
        type: "p",
        text: "Use Alibaba to learn the market. Use Global Sources to shortlist plants before a Canton Fair or Hong Kong Electronics Fair. Use Made-in-China when you already know the HS code and want OEM capacity, not a branded storefront. Then leave the platforms and move to email, a video walk-through of the line, and a paid sample.",
      },
    ],
  },
  {
    slug: "wireless-earbuds-that-actually-sell",
    title: "Wireless Earbuds That Actually Sell: A Buyer’s Field Test",
    excerpt:
      "ANC claims, case hinges, and the listing photos that convert. We tested six import-ready buds the way a customer actually uses them.",
    category: "Product Reviews",
    date: "2025-08-07",
    readTime: "9 min",
    cover: unsplash("photo-1590658268037-6bf12165a8df"),
    coverAlt: "White wireless earbuds in an open charging case",
    author: { name: "Lina Ortiz", role: "Product Reviewer" },
    relatedProducts: ["soundcore-liberty-4-nc"],
    content: [
      {
        type: "p",
        text: "Earbuds are a graveyard of catalogs. The category looks easy because every factory in Dongguan has a TWS line. It is hard because customers hear the difference in a week, and because a broken hinge on the charging case is a one-star review you cannot recover from.",
      },
      {
        type: "p",
        text: "We wore six candidate models on commutes, calls, and gym sessions. We also dropped the cases from desk height ten times. Two units failed the drop test. One had ANC that was a firmware toggle with no real attenuation. Three remain importable.",
      },
      {
        type: "h2",
        text: "What buyers notice first",
      },
      {
        type: "list",
        items: [
          "Case lid action — magnetic, aligned, no rattle.",
          "Stem or in-ear fit shown on a real ear in photos, not only a floating product shot.",
          "ANC that reduces bus rumble, not just a marketing slide.",
          "App that connects on iOS and Android without a Chinese-only login wall.",
        ],
      },
      {
        type: "image",
        src: unsplash("photo-1505740420928-5e560c06d30e"),
        alt: "Black over-ear headphones on a warm yellow backdrop",
        caption: "Audio is a photography category as much as an acoustic one. Budget for a real shoot.",
      },
      {
        type: "h2",
        text: "The importable shortlist",
      },
      {
        type: "p",
        text: "Liberty-class ANC buds still set the bar for the $60–$90 retail band. White-label units can work at $29–$39 if you are honest about ANC and invest in ear-tip sizes. Do not chase a $12 FOB “ANC” bud. The return rate will write the rest of the story.",
      },
      {
        type: "quote",
        text: "Ship the extra ear tips. It is the cheapest five-star insurance in consumer audio.",
        cite: "Lina Ortiz",
      },
    ],
  },
  {
    slug: "shopify-vs-woocommerce-vs-bigcommerce",
    title: "Shopify vs WooCommerce vs BigCommerce: Which Storefront Wins?",
    excerpt:
      "A side-by-side for importers who need catalogs, apps, and a checkout that does not collapse when a container finally arrives.",
    category: "Platform Guides",
    date: "2025-06-18",
    readTime: "11 min",
    cover: unsplash("photo-1556742049-0cfed4f6a45d"),
    coverAlt: "Customer holding a credit card while shopping on a laptop",
    author: { name: "Owen Hart", role: "Platform Analyst" },
    content: [
      {
        type: "p",
        text: "Your storefront is not a branding exercise. It is the machine that has to take 400 orders the week a container clears. We compared Shopify, WooCommerce, and BigCommerce the way an importer uses them: multi-warehouse inventory, landing pages for product reviews, and a checkout that can absorb a freight delay notice.",
      },
      {
        type: "h2",
        text: "Shopify",
      },
      {
        type: "p",
        text: "Fastest path to a clean catalog. Apps cover 3PLs, subscriptions, and reviews. Transaction fees and app stack add up, but the operational overhead is low. Best default if you do not want to hire a WordPress retainer. Checkout extensibility has improved; it is still less open than WooCommerce.",
      },
      {
        type: "h2",
        text: "WooCommerce",
      },
      {
        type: "p",
        text: "Maximum control, maximum maintenance. If you already run WordPress content — buying guides, comparison tables, long reviews — WooCommerce keeps the journal and the cart on one domain. You will need hosting that does not fold on a campaign day, and someone who can update plugins without taking the site down.",
      },
      {
        type: "h2",
        text: "BigCommerce",
      },
      {
        type: "p",
        text: "Stronger native catalog tools than Shopify for large variant sets, and no Shopify-style transaction fee on the standard plans. The app ecosystem is thinner. We recommend it when SKU count and B2B price lists matter more than having every marketing app on day one.",
      },
      {
        type: "image",
        src: unsplash("photo-1486312338219-ce68d2c6f44d"),
        alt: "Person working on a laptop in a bright workspace",
        caption: "Pick the platform that matches your ops bench, not the one with the prettiest theme demo.",
      },
      {
        type: "quote",
        text: "A pretty theme on a host that times out is not a store. It is a brochure that cannot take money.",
        cite: "Owen Hart",
      },
      {
        type: "p",
        text: "Our 2025 default: Shopify for new brands under 300 SKUs, WooCommerce when editorial SEO is the growth engine, BigCommerce when wholesale and variants are the core business.",
      },
    ],
  },
  {
    slug: "best-ecommerce-platforms-for-independent-importers",
    title: "Best E-commerce Platforms for Independent Importers",
    excerpt:
      "Storefronts, marketplaces, and wholesale portals ranked for operators who buy overseas and need inventory to stay honest.",
    category: "Platform Guides",
    date: "2025-05-20",
    readTime: "10 min",
    cover: unsplash("photo-1512941937669-90a1b58e7e9c"),
    coverAlt: "Online shopping on a smartphone with shopping bags nearby",
    author: { name: "Owen Hart", role: "Platform Analyst" },
    featured: true,
    content: [
      {
        type: "p",
        text: "Importers do not need every sales channel. They need the ones that can show real stock, absorb a late vessel, and still look trustworthy when a first-time buyer is staring at a $79 gadget. This roundup is the stack we actually recommend in briefing calls.",
      },
      {
        type: "h2",
        text: "Direct storefronts",
      },
      {
        type: "list",
        items: [
          "Shopify — default for branded catalogs and paid traffic.",
          "WooCommerce — default when the blog is the acquisition engine.",
          "BigCommerce — default for large catalogs and wholesale price lists.",
        ],
      },
      {
        type: "h2",
        text: "Marketplaces worth the fee",
      },
      {
        type: "p",
        text: "Amazon remains the demand engine. Walmart Marketplace is slower to grow but less brutal on ads for home and kitchen. eBay still works for accessories and overstock. TikTok Shop is real volume for sub-$40 impulse SKUs if you can film. It is a poor home for heavy power stations.",
      },
      {
        type: "image",
        src: unsplash("photo-1556740758-90de374c12ad"),
        alt: "Hands packing an online order with a laptop nearby",
        caption: "Channel mix should follow the SKU, not a social-media trend cycle.",
      },
      {
        type: "h2",
        text: "Wholesale and B2B",
      },
      {
        type: "p",
        text: "If you sell to boutiques or Amazon aggregators, a simple B2B portal with net-30 terms will outperform a consumer theme with a coupon code. Faire and Handshake can fill the top of the funnel; your own portal should close the repeat order.",
      },
      {
        type: "p",
        text: "Start with one storefront and one marketplace. Add a channel only when the first two have a weekly ops rhythm. Extra doors without inventory discipline is how you oversell a container that is still on the water.",
      },
    ],
  },
  {
    slug: "playbook-for-sourcing-from-overseas-factories",
    title: "The 2025 Playbook for Sourcing from Overseas Factories",
    excerpt:
      "From first message to paid sample: the checks, red flags, and calendar we use before a purchase order leaves the building.",
    category: "Sourcing",
    date: "2025-04-12",
    readTime: "12 min",
    cover: unsplash("photo-1581091226825-a6a2a5aee158"),
    coverAlt: "Engineer working with equipment on a factory production floor",
    author: { name: "Maya Chen", role: "Sourcing Editor" },
    content: [
      {
        type: "p",
        text: "Sourcing is a sequence, not a vibe. The operators who get consistent quality are not luckier with factories. They run the same boring checklist every time: company verification, video of the line, paid sample, third-party inspection, and a PO that names the spec in writing.",
      },
      {
        type: "h2",
        text: "Week one: prove the company exists",
      },
      {
        type: "list",
        items: [
          "Match the English storefront to a Chinese business license name.",
          "Confirm export rights, or confirm they work through a licensed exporter.",
          "Ask for a 10-minute live video of the workshop, not a pre-recorded tour.",
          "Request two client references in your destination market if the PO will exceed $15k.",
        ],
      },
      {
        type: "h2",
        text: "Week two to four: samples that mean something",
      },
      {
        type: "p",
        text: "Pay for the sample. Free samples are often leftover stock. Ask for the production-intent version, with the packaging you plan to sell. Time the shipment. A factory that cannot send a sample in two weeks will not hit a production date either.",
      },
      {
        type: "image",
        src: unsplash("photo-1581092160562-40aa08e78837"),
        alt: "Close-up of electronic assembly and testing on a workbench",
        caption: "Inspect the sample the way a customer will: drop it, charge it, wash it, wear it.",
      },
      {
        type: "quote",
        text: "A beautiful Alibaba chat and a bad sample is a complete answer. Believe the sample.",
        cite: "Maya Chen",
      },
      {
        type: "h2",
        text: "Before the PO",
      },
      {
        type: "p",
        text: "Write the spec: materials, tolerances, accessories, carton marks, and inspection AQL. Name the Incoterm. Name the forwarder. Book a pre-shipment inspection for the first two orders even if the factory calls it unnecessary. The inspection is cheaper than a container you cannot sell.",
      },
      {
        type: "p",
        text: "That is the 2025 playbook. It is not glamorous. It is how you still have a catalog in 2026.",
      },
    ],
  },
];

export function getArticles() {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: Category) {
  return getArticles().filter((article) => article.category === category);
}

export function getFeaturedArticles() {
  return getArticles().filter((article) => article.featured);
}

export function getRelatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug);
  if (!current) return getArticles().slice(0, limit);
  const sameCategory = getArticles().filter(
    (article) => article.slug !== slug && article.category === current.category,
  );
  const rest = getArticles().filter(
    (article) =>
      article.slug !== slug && article.category !== current.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
