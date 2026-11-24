import { unsplash } from "@/lib/utils";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  score: number;
  cover: string;
  gallery: { src: string; alt: string }[];
  coverAlt: string;
  excerpt: string;
  origin: string;
  moq: string;
  bestFor: string;
  relatedArticle?: string;
  buyUrl: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  body: string[];
};

export const products: Product[] = [
  {
    slug: "soundcore-liberty-4-nc",
    name: "Soundcore Liberty 4 NC",
    tagline: "The ANC bud we still recommend in the $80 band.",
    category: "Audio",
    price: "$79–$99",
    score: 9.1,
    cover: unsplash("photo-1590658268037-6bf12165a8df"),
    coverAlt: "White true wireless earbuds in a charging case",
    gallery: [
      {
        src: unsplash("photo-1590658268037-6bf12165a8df", 1200),
        alt: "Liberty-style wireless earbuds in an open case",
      },
      {
        src: unsplash("photo-1505740420928-5e560c06d30e", 1200),
        alt: "Headphones photographed on a studio backdrop",
      },
      {
        src: unsplash("photo-1484704849700-f032a568e944", 1200),
        alt: "Black wireless headphones on a desk",
      },
    ],
    excerpt:
      "Stable hinges, honest noise cancelling, and listing photos that do not oversell. This is the earbud we use as the quality bar for import catalogs.",
    origin: "Dongguan, China",
    moq: "Ready-to-ship branded; OEM from 1,000 pairs",
    bestFor: "Amazon and D2C audio catalogs at $60–$100 retail",
    relatedArticle: "wireless-earbuds-that-actually-sell",
    buyUrl: "https://www.amazon.com/s?k=soundcore+liberty+4+nc",
    specs: [
      { label: "Driver", value: "11mm dynamic" },
      { label: "ANC", value: "Adaptive, up to 98% claimed reduction" },
      { label: "Battery", value: "Up to 10h buds / 50h with case" },
      { label: "Codecs", value: "LDAC, AAC, SBC" },
      { label: "IP rating", value: "IPX4" },
      { label: "Weight", value: "About 5g per bud" },
    ],
    pros: [
      "Case lid survives desk-height drops.",
      "ANC is audible on transit, not just on a spec sheet.",
      "App is stable on iOS and Android.",
      "Replacement ear tips are easy to source.",
    ],
    cons: [
      "Stem design is polarizing in lifestyle photos.",
      "LDAC drains the case faster on Android.",
      "White finish shows wear in warehouse handling.",
    ],
    body: [
      "We keep Liberty 4 NC on the product desk because it is the rare mid-price bud that does not embarrass you after a week of calls. Adaptive ANC cuts bus rumble without the underwater feeling cheaper chips produce. The case magnet is aligned. That sounds minor until you have processed return labels for lids that no longer close.",
      "For importers, the lesson is not “only sell this SKU.” It is “do not list a $12 FOB clone next to this and expect the same review curve.” If you white-label, steal the details that matter: extra ear tips, a hinge that clicks, and an app that does not trap the customer in a QR code to a Chinese store.",
      "Photography should show a real ear and a closed case from a three-quarter angle. Floating product shots still convert, but they convert less than they did in 2023. Pair the listing with a short commuting video. Audio is a trust category now.",
    ],
  },
  {
    slug: "ecoflow-river-2-pro",
    name: "EcoFlow RIVER 2 Pro",
    tagline: "Compact power that outdoor retail can actually explain.",
    category: "Energy",
    price: "$499–$599",
    score: 8.8,
    cover: unsplash("photo-1504280390367-361c6d9f38f4"),
    coverAlt: "Campsite tents at dusk representing off-grid power use",
    gallery: [
      {
        src: unsplash("photo-1504280390367-361c6d9f38f4", 1200),
        alt: "Outdoor campsite where portable power is typically used",
      },
      {
        src: unsplash("photo-1509391366360-2e959784a276", 1200),
        alt: "Solar panel array in open sunlight",
      },
      {
        src: unsplash("photo-1523987355523-c7b5b0dd90a7", 1200),
        alt: "Camping setup with outdoor lighting",
      },
    ],
    excerpt:
      "A 768Wh-class station with a screen you can read without an app, solar input that is not fantasy, and paperwork a forwarder will accept.",
    origin: "Shenzhen / Dongguan, China",
    moq: "Authorized branded channel; OEM stations from 300 units",
    bestFor: "Outdoor, hardware, and emergency-prep catalogs",
    relatedArticle: "portable-power-stations-tested-for-outdoor-retail",
    buyUrl: "https://www.amazon.com/s?k=ecoflow+river+2+pro",
    specs: [
      { label: "Capacity", value: "768Wh LFP" },
      { label: "AC output", value: "800W rated, 1600W surge" },
      { label: "Solar input", value: "Up to 220W" },
      { label: "Charge time", value: "About 70 minutes AC" },
      { label: "Cycle life", value: "3,000 cycles to 80%" },
      { label: "Weight", value: "About 7.8kg" },
    ],
    pros: [
      "LFP chemistry is easier to explain to retailers.",
      "Fast AC recharge reduces “dead on arrival” tickets.",
      "Display shows input, output, and time remaining.",
      "UN38.3 path is documented if you buy through proper channels.",
    ],
    cons: [
      "Weight still surprises first-time buyers in photos.",
      "Gray-market units create warranty noise.",
      "Not a whole-home backup — do not let copywriters say it is.",
    ],
    body: [
      "RIVER 2 Pro sits in the sweet spot for outdoor retail: heavy enough to feel serious, light enough to ship without freight drama on every unit. In our camping load it held a 40W fridge overnight with phones still charging in the morning. Solar input from a 200W folded panel was slower than the brochure, which is normal. It was not theatrical.",
      "If you import this class of product, treat battery compliance as part of the SKU cost. Book a forwarder who has cleared lithium before. Do not stack no-name 1000W plastic shells next to this unit and call them equivalent. Customers film teardown videos now.",
      "The add-on that works is a compact power bank for day hikes. Bundle thinking beats a bigger inverter that nobody can lift into a hatchback.",
    ],
  },
  {
    slug: "aqara-hub-m3",
    name: "Aqara Hub M3",
    tagline: "A Matter-ready hub that still looks like a finished product.",
    category: "Smart Home",
    price: "$99–$129",
    score: 8.6,
    cover: unsplash("photo-1558002038-1055907df827"),
    coverAlt: "Connected living room with smart lighting",
    gallery: [
      {
        src: unsplash("photo-1558002038-1055907df827", 1200),
        alt: "Living room interior with smart home lighting",
      },
      {
        src: unsplash("photo-1543512214-318c7553f230", 1200),
        alt: "Smart speaker on a side table",
      },
      {
        src: unsplash("photo-1556912173-3bb406ef7e77", 1200),
        alt: "Modern kitchen with connected appliances",
      },
    ],
    excerpt:
      "Thread, Matter, and infrared in one unit with a display. This is the hub we would actually put on a Q4 planogram.",
    origin: "Hangzhou, China",
    moq: "Branded retail packs; sensor bundles from 500 sets",
    bestFor: "Smart home bundles and holiday kits",
    relatedArticle: "smart-home-gadgets-with-fastest-q4-turnaround",
    buyUrl: "https://www.amazon.com/s?k=aqara+hub+m3",
    specs: [
      { label: "Protocols", value: "Matter, Thread, Zigbee, Wi-Fi, IR" },
      { label: "Display", value: "Color status screen" },
      { label: "Power", value: "USB-C / included adapter" },
      { label: "Voice", value: "Alexa, Google, Apple Home" },
      { label: "Local control", value: "Yes, with compatible devices" },
      { label: "Use case", value: "Apartment and whole-home starter kit" },
    ],
    pros: [
      "Looks finished on a shelf, not like a development board.",
      "Matter support reduces “will this work with my phone” tickets.",
      "IR blaster still useful for older AC units.",
      "Pairs cleanly with contact sensors for a bundle.",
    ],
    cons: [
      "Setup still needs a quiet 2.4GHz network.",
      "Premium price versus generic Zigbee sticks.",
      "Display is a selling point and a fingerprint magnet.",
    ],
    body: [
      "Smart home fails when the hub looks like homework. Hub M3 looks like a product you can put on a console table. That matters in photography and in returns. Shoppers who understand Matter still want an object that signals “this is the brain of the house.”",
      "We like it as a kit centerpiece: hub, two contact sensors, two energy plugs. Sell the kit. Spare sensors become replenishment. Do not launch a new radio design in September and hope it certifies by October.",
      "Copy should promise reliable pairing and local control, not a sci-fi home. The customer who buys this already owns bulbs and a voice assistant. Help them connect what they have.",
    ],
  },
  {
    slug: "ninja-air-fryer-pro-xl",
    name: "Ninja Air Fryer Pro XL",
    tagline: "The kitchen hero SKU that still earns counter space.",
    category: "Kitchen",
    price: "$119–$159",
    score: 9.0,
    cover: unsplash("photo-1556912173-3bb406ef7e77"),
    coverAlt: "Kitchen counter with cookware and fresh produce",
    gallery: [
      {
        src: unsplash("photo-1556912173-3bb406ef7e77", 1200),
        alt: "Home kitchen workspace with utensils and ingredients",
      },
      {
        src: unsplash("photo-1556909114-f6e7ad7d3136", 1200),
        alt: "Stainless appliances on a marble kitchen counter",
      },
      {
        src: unsplash("photo-1504674900247-0877df9cc836", 1200),
        alt: "Plated cooked food ready to serve",
      },
    ],
    excerpt:
      "Capacity that matches the photos, a basket people will actually wash, and a brand customers already search for.",
    origin: "China OEM / US brand distribution",
    moq: "Retail packs via distributors; unbranded 5.5qt from 800 units",
    bestFor: "Kitchen dropshipping and Amazon home",
    relatedArticle: "kitchen-gadgets-that-keep-winning-in-dropshipping",
    buyUrl: "https://www.amazon.com/s?k=ninja+air+fryer+pro+xl",
    specs: [
      { label: "Capacity", value: "5.5–6.5 quart class" },
      { label: "Power", value: "About 1690W" },
      { label: "Functions", value: "Air fry, roast, reheat, dehydrate" },
      { label: "Basket", value: "Nonstick, dishwasher-safe parts" },
      { label: "Footprint", value: "Countertop, windowed on newer runs" },
      { label: "Audience", value: "Households of 2–4" },
    ],
    pros: [
      "Search demand already exists; you are not educating the category.",
      "Food photography is straightforward and appetizing.",
      "Replacement baskets are a second SKU.",
      "Return reasons are usually expectation, not random failure — solvable with honest capacity copy.",
    ],
    cons: [
      "Brand-authorized inventory is tighter than white-label.",
      "Heavy for some parcel lanes.",
      "Copycats with fake capacity photos poison the category around it.",
    ],
    body: [
      "If you sell kitchen, you need one appliance that looks like dinner. Air fryers still do that job. The Pro XL class works because the basket is large enough for a family sheet of wings and the exterior photographs as a serious appliance, not a toy.",
      "White-label alternatives can work if — and only if — the interior matches the listing. Measure the basket. Photograph the basket with food in it. State wattage. Offer a recipe card. Those four steps separate a durable kitchen SKU from a Q4 refund wave.",
      "We would rather import fewer, better units than chase a $22 FOB body with a hinge that loosens in six weeks. Kitchen gadgets live on the counter. Customers look at them every day.",
    ],
  },
  {
    slug: "peak-design-everyday-backpack",
    name: "Peak Design Everyday Backpack",
    tagline: "A carry piece that makes catalog photography look expensive.",
    category: "Carry",
    price: "$239–$289",
    score: 8.7,
    cover: unsplash("photo-1553062407-98eeb64c6a62"),
    coverAlt: "Tan leather and canvas backpack standing in a studio",
    gallery: [
      {
        src: unsplash("photo-1553062407-98eeb64c6a62", 1200),
        alt: "Studio product shot of a premium backpack",
      },
      {
        src: unsplash("photo-1491637639811-60e2756cc1c7", 1200),
        alt: "Outdoor backpack with camping gear attached",
      },
      {
        src: unsplash("photo-1441986300917-64674bd600d8", 1200),
        alt: "Retail apparel and bag display",
      },
    ],
    excerpt:
      "Not a cheap import play. A reference product for how hardware, fabric, and photos should look when you do sell bags.",
    origin: "Designed in USA; manufactured in Vietnam / China partners",
    moq: "Retail only for this brand; similar OEM panels from 600 pcs",
    bestFor: "Premium D2C and as a photography benchmark",
    relatedArticle: "best-ecommerce-platforms-for-independent-importers",
    buyUrl: "https://www.amazon.com/s?k=peak+design+everyday+backpack",
    specs: [
      { label: "Volume", value: "20L / 30L options" },
      { label: "Laptop", value: "Up to 16-inch sleeve" },
      { label: "Access", value: "Dual-side and top" },
      { label: "Weather", value: "Weatherproof shell, lined interior" },
      { label: "Warranty", value: "Lifetime against defects" },
      { label: "Weight", value: "About 1.8–2.1kg depending on size" },
    ],
    pros: [
      "Build quality sets a visual standard for any bag listing.",
      "Side access is a real daily-use feature, not a gimmick.",
      "Colorways photograph consistently.",
      "High AOV with low return rate when sized honestly.",
    ],
    cons: [
      "Price excludes most dropshipping models.",
      "Heavy compared with fashion backpacks.",
      "OEM lookalikes rarely match the hardware.",
    ],
    body: [
      "We list this bag because importers keep asking what “premium” should look like in carry. The answer is hardware you can photograph close-up: zippers, flex fold, interior dividers that stand up. Most bag factories will show you a sample that looks fine at two meters and cheap at twenty centimeters.",
      "If you are building a bag line, buy one Everyday Backpack and put it on the table next to your sample. The gap will tell you whether to proceed. Do not compete on this exact design. Compete on a simpler silhouette with honest fabric weight and better-than-average zippers.",
      "For a storefront, one excellent bag at a true price beats five mediocre bags at a fake discount. Carry is tactile. Reviews mention smell, stitching, and collapsed structure. Those are factory problems, not ad problems.",
    ],
  },
  {
    slug: "anker-737-power-bank",
    name: "Anker 737 Power Bank",
    tagline: "The travel battery that belongs next to a power station, not instead of one.",
    category: "Energy",
    price: "$119–$149",
    score: 8.9,
    cover: unsplash("photo-1510557880182-3d4d3cba35a5"),
    coverAlt: "Compact power bank and charging cables on a desk",
    gallery: [
      {
        src: unsplash("photo-1510557880182-3d4d3cba35a5", 1200),
        alt: "Portable charger with USB cables",
      },
      {
        src: unsplash("photo-1583394838336-acd977736f90", 1200),
        alt: "Smartphone charging on a wireless pad",
      },
      {
        src: unsplash("photo-1484704849700-f032a568e944", 1200),
        alt: "Consumer electronics on a clean desk",
      },
    ],
    excerpt:
      "24,000mAh-class capacity, laptop-capable USB-C, and a form factor that still fits in a sling. Our preferred add-on to outdoor and travel carts.",
    origin: "Shenzhen, China",
    moq: "Branded retail; OEM high-watt banks from 1,000 pcs",
    bestFor: "Travel, photography, and outdoor add-on SKUs",
    relatedArticle: "portable-power-stations-tested-for-outdoor-retail",
    buyUrl: "https://www.amazon.com/s?k=anker+737+power+bank",
    specs: [
      { label: "Capacity", value: "24,000mAh / about 87Wh" },
      { label: "Output", value: "Up to 140W USB-C PD" },
      { label: "Ports", value: "2× USB-C, 1× USB-A" },
      { label: "Display", value: "Smart wattage screen" },
      { label: "Air travel", value: "Under 100Wh, cabin-legal in most regions" },
      { label: "Weight", value: "About 630g" },
    ],
    pros: [
      "Cabin-legal capacity is a listing advantage you should print clearly.",
      "140W can recover a laptop, which justifies the price.",
      "Screen reduces “is it charging?” support mail.",
      "Pairs naturally with power-station content as a downsell.",
    ],
    cons: [
      "Warm under full load — set expectations.",
      "Clones with fake 140W claims are everywhere.",
      "Not a fridge battery; keep the use case honest.",
    ],
    body: [
      "Power stations get the hero photos. Power banks get the repeat orders. The 737 class is the unit we put in a travel kit because it can charge a laptop and still board a plane. That single sentence is the listing.",
      "Importers should treat high-watt banks like mini stations: buy from a line with PD certification, print the Wh on the carton, and never promise 140W from a board that only tested at 30W. Customers now check with a USB meter.",
      "Use this SKU as a bundle: station for camp, bank for the airport. The margin on the bank often looks smaller. The attach rate is what pays for the extra SKU slot.",
    ],
  },
];

export function getProducts() {
  return products;
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProduct(slug?: string) {
  if (!slug) return undefined;
  return getProduct(slug);
}
