export interface BusinessContact {
  label: string;
  display: string;
  raw: string;
  telHref: string;
  whatsappUrl: (message?: string) => string;
}

export const businessInfo = {
  name: "Dynace Health Awareness Center",
  brand: "Dynace Global",
  representative: "B. Rama Mohan",
  designation: "Rising Ace of Dynace Global",
  
  phones: {
    primary: {
      label: "Primary Phone & WhatsApp",
      display: "+91 78010 65008",
      raw: "917801065008",
      telHref: "tel:+917801065008",
      whatsappUrl: (message = "Hello, I am interested in Dynace Global products. Could you please share more details?") =>
        `https://wa.me/917801065008?text=${encodeURIComponent(message)}`
    },
    secondary: {
      label: "Secondary Phone & WhatsApp",
      display: "+91 99123 85466",
      raw: "919912385466",
      telHref: "tel:+919912385466",
      whatsappUrl: (message = "Hello, I am interested in Dynace Global products. Could you please share more details?") =>
        `https://wa.me/919912385466?text=${encodeURIComponent(message)}`
    }
  },

  address: {
    full: "#1-308, 1st Floor, Rajiv Park, Road No. 05, Maruthi Nagar, SP Bunglow Opp. Road, Kadapa, Andhra Pradesh - 516001, India.",
    building: "#1-308, 1st Floor, Rajiv Park",
    street: "Road No. 05, Maruthi Nagar, SP Bunglow Opp. Road",
    city: "Kadapa",
    state: "Andhra Pradesh",
    pincode: "516001",
    country: "India",
    coordinates: {
      lat: 14.464404281736462,
      lng: 78.82449227223725
    },
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4079.6605985833553!2d78.82449227223725!3d14.464404281736462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb373dfb9ea6e11%3A0xfffb7aecc20327a!2sDynance%20Health%20Awareness%20Center!5e1!3m2!1sen!2sin!4v1791902596053!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir//Dynance+Health+Awareness+Center/@14.4644043,78.8244923",
    mapViewUrl: "https://www.google.com/maps/place/Dynance+Health+Awareness+Center/@14.4644043,78.8244923,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb373dfb9ea6e11:0xfffb7aecc20327a!8m2!3d14.4644043!4d78.8244923"
  },

  hours: "Monday - Saturday: 9:30 AM - 8:00 PM | Sunday: Closed",

  officialPageUrl: "https://m.dynaceglobal.com/ramamohan/home",

  disclaimer: "Dynace Health Awareness Center is an independent local awareness and distribution center in Kadapa connecting community members with Dynace Global products. We are not a hospital, clinic, diagnostic laboratory, or licensed medical facility. Our representatives do not offer medical diagnosis or prescribe medical treatments. Wellness supplements are formulated to support general health and lifestyle wellness and are not intended to replace professional medical treatment or prescribed medications."
};
