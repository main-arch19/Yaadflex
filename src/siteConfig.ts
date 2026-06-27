// ─────────────────────────────────────────────────────────────
//  YAADFLEXX — SITE CONFIG
//  Edit your real business details here. Everything marked
//  `TODO: replace` is placeholder text shown across the site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'YaadFlexx',
  tagline: 'Bringing the Yaad to Your Store',

  // TODO: replace with your real contact details
  email: 'yaadflexxnyc@gmail.com',
  phone: '(929) 373-9284',           // display version
  phoneTel: '+19293739284',          // used for tel: links (digits + country code)
  whatsapp: '19170000000',           // used for wa.me links (digits, no symbols)
  hours: 'Mon–Sat · 9am – 9pm',

  // TODO: replace '#' with your real social profile URLs
  socials: {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
    whatsapp: 'https://wa.me/19170000000',
  },
};

// Delivery coverage — the 5 NYC boroughs.
// TODO: tweak blurbs / neighborhoods to match your actual routes.
export const boroughs = [
  {
    name: 'Brooklyn',
    blurb: 'Our home base — same-day runs across the borough.',
    neighborhoods: 'Flatbush · Crown Heights · East New York · Canarsie · Bed-Stuy',
  },
  {
    name: 'Queens',
    blurb: 'Wide coverage from Jamaica to the Rockaways.',
    neighborhoods: 'Jamaica · Springfield Gardens · Cambria Heights · Far Rockaway',
  },
  {
    name: 'The Bronx',
    blurb: 'Reliable wholesale drops uptown.',
    neighborhoods: 'Wakefield · Williamsbridge · Eastchester · Soundview',
  },
  {
    name: 'Manhattan',
    blurb: 'Fast restocks for shops across the island.',
    neighborhoods: 'Harlem · Washington Heights · Inwood · Lower East Side',
  },
  {
    name: 'Staten Island',
    blurb: 'Scheduled routes statewide.',
    neighborhoods: 'St. George · Port Richmond · New Dorp · Tottenville',
  },
];

// Delivery logistics — shown on the Delivery Areas page.
// TODO: replace with your real cutoff times, minimums and thresholds.
export const deliveryInfo = {
  cutoff: 'Order by noon',
  window: 'Delivered by evening',
  days: 'Monday – Saturday',
  minOrder: '$250 minimum order',
  freeOver: 'Free delivery over $750',
};

// Headline stats — shown on the About page.
// TODO: replace with your real numbers.
export const stats = [
  { value: '5', label: 'Boroughs served' },
  { value: '200+', label: 'Retail partners' },
  { value: '500+', label: 'Caribbean products' },
  { value: 'Same-day', label: 'Delivery available' },
];
