export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  keyBenefits: string[];
  ingredients: {
    title: string;
    items: string[];
  };
  usageInstructions: {
    dosage: string;
    notes?: string[];
  };
  suitableFor?: string[];
  certifications?: string[];
  officialUrl: string;
  seoTitle: string;
  seoDescription: string;
  whatsappMessage: string;
}

export const products: Product[] = [
  {
    id: "rocenta",
    slug: "dynace-rocenta",
    name: "Dynace Rocenta",
    tagline: "Botanical Cellular Rejuvenation & Daily Wellness",
    category: "Cellular Nutrition & Longevity",
    image: "/images/rocenta.png",
    shortDescription: "A botanical innovation formulated with NMN, Bulgarian Rose Placenta, and nutrient-dense superfood extracts to promote cellular wellness and metabolism.",
    fullDescription: "Dynace Rocenta is the latest product of botanical innovation with a formulation designed to increase wellness, support cellular rejuvenation, and shield the body against daily environmental stressors. Infused with NMN (Nicotinamide Mononucleotide, a precursor of NAD+) and loaded with vitamins and antioxidants from selected superfoods, Dynace Rocenta supports healthy cellular function, metabolic vitality, and natural immunity.",
    keyBenefits: [
      "Supports healthy metabolism and physical energy levels",
      "Assists cellular rejuvenation and antioxidant protection",
      "Strengthens normal immune system defense",
      "Supports cognitive vitality and alertness",
      "Promotes restful sleep quality and recovery",
      "Aids in maintaining a balanced body composition"
    ],
    ingredients: {
      title: "Core Active Botanical Ingredients",
      items: [
        "Bulgarian Rose Placenta Extract",
        "NMN (Nicotinamide Mononucleotide)",
        "Brown Seaweed Extract",
        "Lotus Germ Extract",
        "Bitter Melon Extract",
        "Ashwagandha Root Extract",
        "11 Essential Vitamins & 15 Trace Minerals",
        "Botanical Enzymes, Alfalfa, and Clove",
        "Coenzyme Q10 (CoQ10)"
      ]
    },
    usageInstructions: {
      dosage: "Take 1 sachet daily and consistently for general well-being and cellular vitality.",
      notes: [
        "Best taken consistently as part of your morning or daily routine.",
        "Individuals with allergies or preexisting medical conditions should consult their healthcare provider prior to starting any dietary supplement."
      ]
    },
    suitableFor: [
      "Adults experiencing daily fatigue from busy schedules",
      "Individuals seeking antioxidant and anti-aging support",
      "Those looking to enhance metabolic and immune health"
    ],
    certifications: [
      "GMP (Good Manufacturing Practice) Compliant",
      "Formulated with scientifically researched botanical compounds",
      "Distributed across 40+ countries globally"
    ],
    officialUrl: "https://m.dynaceglobal.com/ramamohan/DynaceRocenta",
    seoTitle: "Dynace Rocenta in Kadapa | Cellular Wellness Supplement",
    seoDescription: "Discover authentic Dynace Rocenta at Dynace Health Awareness Center in Kadapa. Featuring NMN and Bulgarian Rose Placenta for vitality. Contact for details.",
    whatsappMessage: "Hello, I am interested in Dynace Rocenta. Could you please share the available product details and pricing in Kadapa?"
  },
  {
    id: "urbanism",
    slug: "urbanism",
    name: "Urbanism",
    tagline: "Dual-Action Body Shaping & Overnight Detoxification",
    category: "Weight Management & Digestive Health",
    image: "/images/urbanism.png",
    shortDescription: "A dual-function wellness system pairing SUNZ for daytime metabolic boost and MOONZ for overnight natural digestive cleansing.",
    fullDescription: "Urbanism is a specialized dual-phase wellness formulation designed to assist with healthy weight management, digestive health, and natural detoxification. The system features SUNZ (Your Personal Trainer) to assist fat metabolism, reduce cravings, and energize your active hours, paired with MOONZ (Your Detox Specialist) to support gastrointestinal peristalsis, gentle night-time cleansing, and toxin elimination while you rest.",
    keyBenefits: [
      "SUNZ: Accelerates daytime calorie burning and stimulates metabolism",
      "SUNZ: Naturally tempers hunger pangs and suppresses excessive appetite",
      "MOONZ: Facilitates overnight digestive motility and toxin elimination",
      "MOONZ: Promotes gastrointestinal comfort and relieves sluggish digestion",
      "Helps maintain sculpted body contours and reduces bloating",
      "Supports long-term weight maintenance without harsh stimulants"
    ],
    ingredients: {
      title: "Active Daytime & Night-time Ingredients",
      items: [
        "SUNZ: Italy Morosil (Blood Orange Extract)",
        "SUNZ: Green Tea Extract & Green Coffee Bean Extract",
        "SUNZ: White Kidney Bean Extract (Phaseolamin)",
        "MOONZ: France Sinetrols (Citrus Polyphenol Extract)",
        "MOONZ: Comprehensive Fruit Digestive Enzymes",
        "MOONZ: Sweet Melon Extract & Vitamin C",
        "MOONZ: Perilla Ocymoides Leaf Extract"
      ]
    },
    usageInstructions: {
      dosage: "SUNZ: Take 1 in the morning before breakfast. MOONZ: Take 1 in the evening before sleeping.",
      notes: [
        "If you have a sensitive stomach, take SUNZ shortly after breakfast.",
        "Drink adequate water throughout the day to support healthy digestion and hydration."
      ]
    },
    suitableFor: [
      "Individuals with sedentary office routines",
      "Those experiencing sluggish digestion or water retention",
      "Fitness enthusiasts targeting weight management goals"
    ],
    certifications: [
      "Quality-assured botanical manufacturing",
      "Natural fruit and herbal extracts"
    ],
    officialUrl: "https://m.dynaceglobal.com/ramamohan/Urbanism",
    seoTitle: "Dynace Urbanism in Kadapa | SUNZ & MOONZ Detox Wellness",
    seoDescription: "Get official Dynace Urbanism in Kadapa. Dual-function SUNZ & MOONZ system for healthy weight management and gentle digestive detox. Inquire today.",
    whatsappMessage: "Hello, I am interested in Urbanism (SUNZ & MOONZ). Could you please share the available product details and pricing in Kadapa?"
  },
  {
    id: "ace-guard",
    slug: "ace-guard",
    name: "Ace Guard",
    tagline: "Triple Stem Cell Defense & Sugar Metabolism Support",
    category: "Immune Defense & Glycemic Wellness",
    image: "/images/aceguard.png",
    shortDescription: "A powerhouse botanical defense formulation combining triple stem cell extracts, black elderberry, and tiger milk mushroom for resilient immunity.",
    fullDescription: "Ace Guard is a targeted wellness supplement formulated to reinforce the body's natural immune defense mechanisms, promote cellular DNA protection, and support healthy sugar metabolism. Powered by a Triple Stem Cell Formulation alongside time-tested adaptogenic botanicals like Black Elderberry, Tiger Milk Mushroom, and Gymnema Sylvestre, Ace Guard helps counter oxidative stress, combat inflammation, and enhance long-term vitality.",
    keyBenefits: [
      "Reinforces natural immune defenses and antibody response",
      "Triple stem cell action aids cellular revitalization and repair",
      "Enhances sugar metabolism and helps moderate carbohydrate absorption",
      "Supplies concentrated antioxidants against free-radical damage",
      "Alleviates seasonal throat and respiratory vulnerability",
      "Assists in cardiovascular and cellular longevity"
    ],
    ingredients: {
      title: "Targeted Botanical Defense Complex",
      items: [
        "Triple Stem Cells Formulation (Cactus, Pine Bark & Sea Buckthorn)",
        "Concentrated Black Elderberry Extract (Sambucus Nigra)",
        "Tiger Milk Mushroom Extract (Lignosus Rhinocerus)",
        "Gymnema Sylvestre Plant Extract (Sugar Blocker)",
        "White Mulberry Leaf Extract (Morus Alba)"
      ]
    },
    usageInstructions: {
      dosage: "Adults: 1 to 2 sachets daily with a meal. Tear sachet, mix into 100mL - 150mL of room temperature or cold water, stir well and drink.",
      notes: [
        "Children above 6 years may consume 1 sachet daily with a meal under parental guidance.",
        "Please consult a physician if you are under medication for diabetes or blood sugar regulation."
      ]
    },
    suitableFor: [
      "Health-conscious adults seeking robust daily immunity",
      "Individuals monitoring carbohydrate and glycemic balance",
      "People prone to fatigue, seasonal changes, or environmental pollutants"
    ],
    certifications: [
      "Standardized herbal extract formulation",
      "Free from synthetic stimulants"
    ],
    officialUrl: "https://m.dynaceglobal.com/ramamohan/Aceguard",
    seoTitle: "Dynace Ace Guard in Kadapa | Triple Stem Cell Immune Defense",
    seoDescription: "Authentic Dynace Ace Guard available in Kadapa. Triple stem cell formula with Black Elderberry & Tiger Milk Mushroom for immunity. Inquire now.",
    whatsappMessage: "Hello, I am interested in Ace Guard. Could you please share the available product details and pricing in Kadapa?"
  },
  {
    id: "lyftmax",
    slug: "lyftmax",
    name: "Lyftmax",
    tagline: "Women's Hormonal Vitality & Confidence Formulation",
    category: "Women's Health & Hormonal Balance",
    image: "/images/lyftmax.png",
    shortDescription: "A specialized botanical formula featuring patented EstroG-100© and Persian Saffron to support women's hormonal balance and vitality.",
    fullDescription: "Lyftmax is an innovative supplement tailored specifically to support feminine wellness, graceful aging, and balanced vitality. Crafted with clinically studied EstroG-100© (a synergistic blend of Cynanchum wilfordii, Phlomis umbrosa, and Angelica gigas), Persian Saffron, and Red Algae, Lyftmax helps ease discomforts associated with hormonal fluctuations and perimenopause, supports skin elasticity, and promotes healthy circulation and bone mineral density.",
    keyBenefits: [
      "Helps balance feminine hormones and ease perimenopause symptoms",
      "Supports skin moisture, firmness, and natural collagen integrity",
      "Aids in mitigating hot flashes, mood fluctuations, and fatigue",
      "Promotes healthy micro-circulation and intimate vitality",
      "Supplies bioavailable nutrients for bone density and joint comfort",
      "Fosters calm, emotional well-being, and daily confidence"
    ],
    ingredients: {
      title: "Clinically Selected Botanical Actives",
      items: [
        "EstroG-100© (Cynanchum Wilfordii, Phlomis Umbrosa & Angelica Gigas)",
        "Concentrated Persian Saffron Extract (Crocus Sativus)",
        "Mineral-Rich Red Algae Extract (Lithothamnion Calcareum)",
        "Non-GMO Soy Isoflavones (Genistein, Daidzin & Glycitin)"
      ]
    },
    usageInstructions: {
      dosage: "Tear one sachet and pour directly into the mouth; allow to dissolve completely on the tongue.",
      notes: [
        "Adults can take 1 sachet daily with meals.",
        "Women experiencing perimenopausal or menopausal transitions may take up to 2 sachets daily as recommended."
      ]
    },
    suitableFor: [
      "Women seeking natural hormonal equilibrium and mood stability",
      "Perimenopausal and menopausal women looking for relief from hot flashes",
      "Active women prioritizing skin elasticity and bone wellness"
    ],
    certifications: [
      "Contains patented EstroG-100© botanical complex",
      "Manufactured in certified quality facilities"
    ],
    officialUrl: "https://m.dynaceglobal.com/ramamohan/Lyftmax",
    seoTitle: "Dynace Lyftmax in Kadapa | Women's Hormonal Balance & Vitality",
    seoDescription: "Discover authentic Dynace Lyftmax in Kadapa. Formulated with EstroG-100 & Persian Saffron for women's hormonal health and confidence. Inquire on WhatsApp.",
    whatsappMessage: "Hello, I am interested in Lyftmax. Could you please share the available product details and pricing in Kadapa?"
  },
  {
    id: "ace-brew",
    slug: "ace-brew",
    name: "Ace Brew",
    tagline: "100% Arabica Functional Coffee with NMN & Gymnema",
    category: "Functional Beverages & Daily Energy",
    image: "/images/acebrew.png",
    shortDescription: "A gourmet 100% Arabica functional coffee enriched with NMN and Gymnema Sylvestre to boost energy while curbing sugar cravings.",
    fullDescription: "Ace Brew redefines the daily coffee ritual into an energizing wellness experience. Crafted from premium 100% Arabica beans and infused with cellular-supporting NMN (Nicotinamide Mononucleotide) and the renowned Ayurvedic botanical Gymnema Sylvestre, Ace Brew delivers rich aromatic taste without the jitters. Naturally sweetened with Monk Fruit extract, it provides clean energy, assists with sugar cravings, and supports cardiovascular wellness.",
    keyBenefits: [
      "Delivers clean, jitter-free energy and heightened mental alertness",
      "Gymnema Sylvestre naturally curtails sweet cravings and sugar urges",
      "NMN infusion supports cellular energy production and mitochondrial function",
      "Crafted with 100% low-acid Arabica beans for smooth digestion",
      "Free from refined cane sugar — sweetened naturally with Monk Fruit",
      "Provides natural antioxidant defense with every morning cup"
    ],
    ingredients: {
      title: "Gourmet Functional Blend Ingredients",
      items: [
        "100% Premium Quality Arabica Coffee Beans",
        "NMN (Nicotinamide Mononucleotide)",
        "Gymnema Sylvestre Plant Extract (Sugar Blocker)",
        "Monk Fruit Extract (Natural Zero-Calorie Sweetener)"
      ]
    },
    usageInstructions: {
      dosage: "Mix 1 pouch of Ace Brew into 200mL - 250mL of lukewarm water; stir thoroughly and enjoy.",
      notes: [
        "For a richer coffee profile, 2 pouches may be brewed in the same cup.",
        "Can be savored hot or served chilled over ice."
      ]
    },
    suitableFor: [
      "Coffee enthusiasts who want functional health benefits in their brew",
      "Professionals and fitness buffs seeking jitter-free alertness",
      "Individuals moderating sugar intake and watching calorie consumption"
    ],
    certifications: [
      "100% Arabica beans guarantee",
      "No artificial flavors or synthetic preservatives"
    ],
    officialUrl: "https://m.dynaceglobal.com/ramamohan/Acebrew",
    seoTitle: "Dynace Ace Brew in Kadapa | Premium Arabica Coffee with NMN",
    seoDescription: "Authentic Dynace Ace Brew coffee in Kadapa. 100% Arabica infused with NMN & Gymnema Sylvestre for energy and sugar craving control. Contact us.",
    whatsappMessage: "Hello, I am interested in Ace Brew. Could you please share the available product details and pricing in Kadapa?"
  },
  {
    id: "triple-root",
    slug: "triple-root",
    name: "Triple Root",
    tagline: "Adaptogenic Herbal Coffee for Stamina, Focus & Vitality",
    category: "Functional Herbal Beverages & Stamina",
    image: "/images/tripleroot.png",
    shortDescription: "An invigorating Arabica coffee blend infused with Maca, Tongkat Ali, Ginseng, and Ashwagandha to support stamina, focus, and resilience.",
    fullDescription: "Triple Root is a premium functional herbal coffee formulated for modern individuals seeking sustained energy, physical stamina, and mental clarity. Combining rich Arabica coffee beans with legendary adaptogenic root extracts — including Maca Root, Tongkat Ali, Korean Ginseng, and Ashwagandha — Triple Root nourishes the adrenal system, helps the body adapt to daily stress, and promotes long-lasting physical endurance without harsh crashes.",
    keyBenefits: [
      "Promotes sustained physical stamina and endurance during demanding days",
      "Adaptogens help lower cortisol and enhance resistance to mental stress",
      "Supports male vitality, hormonal balance, and overall physical strength",
      "Improves cognitive alertness, mental clarity, and executive focus",
      "Supports healthy peripheral blood circulation and muscle recovery",
      "Provides a smooth, aromatic beverage experience for high performers"
    ],
    ingredients: {
      title: "Synergistic Adaptogenic Root Matrix",
      items: [
        "Premium Arabica Coffee Bean Base",
        "Maca Root Extract (Lepidium Meyenii)",
        "Tongkat Ali Extract (Eurycoma Longifolia)",
        "Korean Panax Ginseng Extract",
        "Ashwagandha Root Extract (Withania Somnifera)"
      ]
    },
    usageInstructions: {
      dosage: "Mix 1 sachet into 150mL - 200mL of hot or warm water. Stir well and enjoy in the morning or early afternoon.",
      notes: [
        "Drink plenty of water throughout the day for optimal hydration.",
        "Due to potent herbal actives, pregnant or nursing women or individuals with severe cardiovascular conditions should consult their physician."
      ]
    },
    suitableFor: [
      "High-performance professionals needing enduring focus and resilience",
      "Men seeking natural stamina, vitality, and physical performance",
      "Athletes and fitness practitioners looking for adaptogenic recovery"
    ],
    certifications: [
      "Authentic herbal root extracts",
      "Quality controlled processing standards"
    ],
    officialUrl: "https://m.dynaceglobal.com/ramamohan/Tripleroot",
    seoTitle: "Dynace Triple Root in Kadapa | Adaptogenic Herbal Coffee & Vitality",
    seoDescription: "Authentic Dynace Triple Root herbal coffee in Kadapa. Formulated with Maca, Tongkat Ali, Ginseng & Ashwagandha for stamina and focus. Inquire today.",
    whatsappMessage: "Hello, I am interested in Dynace Triple Root. Could you please share the available product details and pricing in Kadapa?"
  }
];
