import snapp from "./snapp.js";

// public/views/components/Section.jsx
var Section = ({ id, children, className }) => {
  return /* @__PURE__ */ snapp.create("section", { id: id || "", className: "w-full py-6 px-6 xs:px-8 md:px-10 xl:px-20 2xl:px-64 " + className || "" }, children);
};
var CardHolder = ({ children, className }) => {
  return /* @__PURE__ */ snapp.create("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%] mx-auto text-center " + className || "" }, children);
};
var Section_default = Section;

// node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var faClock = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
};
var faCode = {
  prefix: "fas",
  iconName: "code",
  icon: [576, 512, [], "f121", "M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]
};
var faShop = {
  prefix: "fas",
  iconName: "shop",
  icon: [576, 512, ["store-alt"], "f54f", "M21.5 181.1L78.3 67.4C89.2 45.7 111.3 32 135.6 32l304.9 0c24.2 0 46.4 13.7 57.2 35.4l56.8 113.7c3.6 7.2 5.5 15.1 5.5 23.2 0 27.3-21.2 49.7-48 51.6L512 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192-96 0 0 176c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-176.1c-26.8-1.9-48-24.3-48-51.6 0-8 1.9-16 5.5-23.2zM128 256l0 112c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-112-160 0z"]
};
var faPhone = {
  prefix: "fas",
  iconName: "phone",
  icon: [512, 512, [128222, 128379], "f095", "M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]
};
var faQuoteRight = {
  prefix: "fas",
  iconName: "quote-right",
  icon: [448, 512, [8221, "quote-right-alt"], "f10e", "M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136z"]
};
var faQuoteLeft = {
  prefix: "fas",
  iconName: "quote-left",
  icon: [448, 512, [8220, "quote-left-alt"], "f10d", "M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z"]
};
var faLocationPin = {
  prefix: "fas",
  iconName: "location-pin",
  icon: [384, 512, ["map-marker"], "f041", "M192 0C86 0 0 84.4 0 188.6 0 307.9 120.2 450.9 170.4 505.4 182.2 518.2 201.8 518.2 213.6 505.4 263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0z"]
};
var faStore = {
  prefix: "fas",
  iconName: "store",
  icon: [512, 512, [], "f54e", "M30.7 72.3C37.6 48.4 59.5 32 84.4 32l344 0c24.9 0 46.8 16.4 53.8 40.3l23.4 80.2c12.8 43.7-20.1 87.5-65.6 87.5-26.3 0-49.4-14.9-60.8-37.1-11.6 21.9-34.6 37.1-61.4 37.1-26.6 0-49.7-15-61.3-37-11.6 22-34.7 37-61.3 37-26.8 0-49.8-15.1-61.4-37.1-11.4 22.1-34.5 37.1-60.8 37.1-45.6 0-78.4-43.7-65.6-87.5L30.7 72.3zM96.4 352l320 0 0-66.4c7.6 1.6 15.5 2.4 23.5 2.4 14.3 0 28-2.6 40.5-7.2l0 151.2c0 26.5-21.5 48-48 48l-352 0c-26.5 0-48-21.5-48-48l0-151.2c12.5 4.6 26.1 7.2 40.5 7.2 8.1 0 15.9-.8 23.5-2.4l0 66.4z"]
};
var faBriefcase = {
  prefix: "fas",
  iconName: "briefcase",
  icon: [512, 512, [128188], "f0b1", "M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]
};
var faMicrochip = {
  prefix: "fas",
  iconName: "microchip",
  icon: [512, 512, [], "f2db", "M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm16 48l0 160 160 0 0-160-160 0z"]
};

// node_modules/snapp-icons/src/Fontawesome/Fontawesome.min.js
var Fontawesome = (e) => {
  const { icon: n, width: o, height: s, size: t, class: r, style: a, props: i, ...l } = e || {};
  if (!n) return console.warn("Fontawesome: icon prop is required"), null;
  const c = n.icon || n;
  if (!Array.isArray(c) || c.length < 5) return console.warn("Fontawesome: invalid icon data"), null;
  const w = c[0], p = c[1], h = c[4], u = o || t || "1em", d = s || t || "1em";
  return snapp.create("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${w} ${p}`, width: u, height: d, fill: "currentColor", class: r || "", style: a || "", "aria-hidden": "true", focusable: "false", ...l }, snapp.create("path", { d: h }));
};

// public/views/components/Card.jsx
var ProductCard = ({ data }) => {
  return /* @__PURE__ */ snapp.create("article", { className: "group relative bg-white rounded-3xl p-8 py-14 flex flex-col gap-y-6 text-center transition-all duration-500 shadow-2xl overflow-hidden" }, /* @__PURE__ */ snapp.create("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-100duration-500" }), /* @__PURE__ */ snapp.create("div", { className: "absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 transition-opacity" }), /* @__PURE__ */ snapp.create("div", { className: "absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30 transition-opacity" }), /* @__PURE__ */ snapp.create("div", { className: "relative mx-auto bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-3xl shadow-lg drop-shadow-2xl" }, /* @__PURE__ */ snapp.create("div", { className: "absolute inset-0 bg-gradient-to-tl from-purple-600 to-pink-600 rounded-3xl opacity-0" }), /* @__PURE__ */ snapp.create(Fontawesome, { icon: data.icon, className: "relative w-8 h-8 text-white drop-shadow-lg" })), /* @__PURE__ */ snapp.create("h2", { className: "relative text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors" }, data.title), /* @__PURE__ */ snapp.create("p", { className: "relative text-base text-gray-600 leading-relaxed" }, data.description));
};
var ServiceCard = ({ data }) => {
  return /* @__PURE__ */ snapp.create("article", { className: "group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden" }, /* @__PURE__ */ snapp.create("div", { className: "relative overflow-hidden h-44" }, /* @__PURE__ */ snapp.create("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity" }), /* @__PURE__ */ snapp.create("div", { className: "relative bg-gradient-to-br from-gray-50 to-gray-100 h-full flex items-center justify-center p-6" }, /* @__PURE__ */ snapp.create(
    "img",
    {
      src: data.image,
      alt: data.title,
      className: "w-auto h-32 object-contain transition-transform duration-500 group-hover:scale-110",
      loading: "lazy"
    }
  ))), /* @__PURE__ */ snapp.create("div", { className: "flex flex-col flex-grow p-6 space-y-4" }, /* @__PURE__ */ snapp.create("h3", { className: "text-2xl font-bold text-gray-900" }, data.title), /* @__PURE__ */ snapp.create("p", { className: "text-gray-600 leading-relaxed text-base" }, data.description), data.features && /* @__PURE__ */ snapp.create("div", { className: "grid grid-cols-3 gap-3 pt-4 border-t border-gray-100" }, data.features.map((feature, index) => /* @__PURE__ */ snapp.create("div", { key: index, className: "text-center" }, /* @__PURE__ */ snapp.create("div", { className: "text-blue-600 font-bold text-lg" }, feature.value), /* @__PURE__ */ snapp.create("div", { className: "text-gray-500 text-xs" }, feature.label)))), /* @__PURE__ */ snapp.create("div", { className: "h-10" })));
};

// public/views/sections/Products.jsx
var productData = [
  {
    icon: faShop,
    title: "Ulisha Store",
    description: "A fast-growing e-commerce platform sourcing affordable products directly from manufacturers."
  },
  {
    icon: faBriefcase,
    title: "Ushops",
    description: "An SME enablement platform helping businesses get online with ease and grow digitally."
  },
  {
    icon: faMicrochip,
    title: "Ulisha Technologies",
    description: "Our innovation lab building websites, apps, and automation systems for modern enterprises."
  }
];
var AboutUs = () => {
  return /* @__PURE__ */ snapp.create(Section_default, { className: "bg-slate-100 space-y-16 pt-14" }, /* @__PURE__ */ snapp.create("div", { className: "text-center space-y-6 text-slate-800" }, /* @__PURE__ */ snapp.create("h1", { className: "font-semibold text-4xl lg:text-5xl text-blue-600" }, "About Ulisha Limited"), /* @__PURE__ */ snapp.create("p", { className: "text-sm lg:text-md xl:text-lg font-semibold leading-relaxed text-slate-900 mx-auto lg:max-w-[70%]" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faQuoteLeft, className: "inline align-top h-3 mr-1" }), "We build the digital backbone for market efficiency, connecting households to cost-effective products and empowering local businesses with proprietary tech.", /* @__PURE__ */ snapp.create(Fontawesome, { icon: faQuoteRight, className: "inline align-top h-3 ml-1" }))), /* @__PURE__ */ snapp.create(CardHolder, null, productData.map((data) => /* @__PURE__ */ snapp.create(ProductCard, { data }))));
};
var Products_default = AboutUs;

// public/views/components/BubbleText.jsx
var BubbleText = ({ data, index }) => {
  return /* @__PURE__ */ snapp.create("div", { className: "flex flex-row p-4 px-6 lg:p-6 lg:px-8 xl:py-6 xl:px-10 rounded-3xl gap-x-2 w-max items-start " + data.bgColor }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: data.icon, className: "w-6 h-6 xl:h-8 xl:w-8 " + data.textColor }), /* @__PURE__ */ snapp.create("div", { className: "space-y-1" }, /* @__PURE__ */ snapp.create("h1", { className: "text-lg font-semibold leading-none sm:text-lg xl:text-xl " + data.textColor }, data.title), /* @__PURE__ */ snapp.create("p", { className: "text-sm xl:text-lg" }, data.description)));
};
var BubbleText_default = BubbleText;

// public/views/components/Button.jsx
var ButtonOutline = ({ children }) => {
  return /* @__PURE__ */ snapp.create("button", { className: "px-4 py-2 xl:py-3 xl:px-6 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300" }, children);
};
var Button = ({ children }) => {
  return /* @__PURE__ */ snapp.create("button", { className: "px-4 py-3 xl:py-3 xl:px-8 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-400 transition-colors duration-300" }, children);
};

// public/views/components/ServicesCarousel.jsx
function ServicesCarousel({ Services }) {
  return /* @__PURE__ */ snapp.create(
    "div",
    {
      className: "relative overflow-hidden whitespace-nowrap py-4",
      "data-aos": "fade-in",
      "data-aos-delay": "200"
    },
    /* @__PURE__ */ snapp.create("div", { className: "absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ snapp.create("div", { className: "absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ snapp.create(
      "div",
      {
        className: "inline-block animate-scroll px-4",
        style: { minWidth: "max-content" }
      },
      Services.map((service, index) => /* @__PURE__ */ snapp.create(
        "span",
        {
          key: index,
          className: "inline-block bg-blue-500/20 text-blue-500 px-5 py-2 mx-2 rounded-lg font-semibold text-sm select-none"
        },
        service
      ))
    ),
    /* @__PURE__ */ snapp.create(
      "div",
      {
        className: "inline-block animate-scroll px-4",
        style: { minWidth: "max-content" }
      },
      Services.map((service, index) => /* @__PURE__ */ snapp.create(
        "span",
        {
          key: index,
          className: "inline-block bg-blue-500/20 text-blue-500 px-5 py-2 mx-2 rounded-lg font-semibold text-sm select-none"
        },
        service
      ))
    ),
    /* @__PURE__ */ snapp.create("style", null, `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `)
  );
}

// public/views/sections/HeroSection.jsx
var HeroSection = () => {
  const BubbletextData = [
    {
      title: "Retail & Sourcing",
      description: "Direct-to-consumer cost efficiency.",
      bgColor: "bg-blue-200",
      textColor: "text-blue-600",
      icon: faStore
    },
    {
      title: "SME Enablement",
      description: "Digital presence with Ushops.",
      bgColor: "bg-orange-200",
      textColor: "text-orange-600",
      icon: faBriefcase
    },
    {
      title: "Bespoke Software",
      description: "APIs and custom tech solutions.",
      bgColor: "bg-indigo-200",
      textColor: "text-indigo-700",
      icon: faCode
    }
  ];
  return /* @__PURE__ */ snapp.create(Section_default, { className: "flex flex-col align-middle mt-14 lg:mt-20" }, /* @__PURE__ */ snapp.create("div", { className: "flex flex-col my-auto gap-y-4 xl:gap-6" }, /* @__PURE__ */ snapp.create("div", { className: "flex flex-col lg:flex-row gap-y-10 justify-between text-slate-800 mx-auto" }, /* @__PURE__ */ snapp.create("div", { className: "flex flex-col gap-y-8 flex-[2] my-auto" }, /* @__PURE__ */ snapp.create("h1", { className: "font-bold text-5xl lg:text-6xl" }, "The Engine For ", /* @__PURE__ */ snapp.create("br", null), " Nigerian ", /* @__PURE__ */ snapp.create("br", null), " Commerce"), /* @__PURE__ */ snapp.create("p", { className: "text-lg lg:text-xl leading-relaxed max-w-[92%] lg:max-w-[90%] xl:max-w-[85%] " }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faQuoteLeft, className: "inline align-top h-4 ml-1" }), "We build the digital backbone for market efficiency, connecting households to cost-effective products and empowering local businesses with proprietary tech", /* @__PURE__ */ snapp.create(Fontawesome, { icon: faQuoteRight, className: "inline align-top h-4 ml-1" })), /* @__PURE__ */ snapp.create("div", { className: "flex gap-x-4" }, /* @__PURE__ */ snapp.create(ButtonOutline, null, "Our Products"), /* @__PURE__ */ snapp.create(Button, null, "Contact Us"))), /* @__PURE__ */ snapp.create("div", { className: "flex flex-col flex-[1] gap-y-5 my-auto items-center" }, BubbletextData.map((data) => /* @__PURE__ */ snapp.create(BubbleText_default, { data })))), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create(
    ServicesCarousel,
    {
      Services: [
        "NextJS",
        "React",
        "VS Code",
        "Linux",
        "Zed",
        "TypeScript",
        "JavaScript",
        "PHP",
        "Laravel",
        "Docker",
        "PM2",
        "Vercel",
        "Netlify",
        "AWS",
        "Google Cloud",
        "Microsoft Azure",
        "Digital Ocean",
        "Hostinger",
        "Namecheap",
        "Namehero"
      ]
    }
  ))));
};

// public/views/sections/NavBar.jsx
var NavBar = () => {
  return /* @__PURE__ */ snapp.create("nav", { className: "fixed top-0 left-0 w-full z-50 bg-blue-500 text-white p-4 shadow-md" }, /* @__PURE__ */ snapp.create("h1", { className: "text-lg font-semibold" }, "My Navbar"));
};
var NavBar_default = NavBar;

// public/views/sections/OurService.jsx
var OurServiceData = [
  {
    image: "/assets/webdev.svg",
    title: "Web Development",
    description: "We craft beautiful, responsive, and functional websites."
  },
  {
    image: "/assets/crypto.svg",
    title: "Blockchain Integration",
    description: "We bring businesses on-chain with secure smart contracts."
  },
  {
    image: "/assets/e_com.svg",
    title: "E-Commerce Solutions",
    description: "Seamless online stores with analytics and fast checkout."
  }
];
var OurService = () => {
  return /* @__PURE__ */ snapp.create(Section_default, { className: "bg-slate-100 space-y-16 pt-14" }, /* @__PURE__ */ snapp.create("div", { class: "text-center" }, /* @__PURE__ */ snapp.create("p", { class: "text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3" }, "Our Services"), /* @__PURE__ */ snapp.create("h2", { class: "text-4xl md:text-5xl font-bold text-slate-900 mb-4" }, "What We Offer"), /* @__PURE__ */ snapp.create("p", { class: "text-slate-700 max-w-2xl mx-auto text-lg" }, "Comprehensive solutions tailored to bring your digital vision to life")), /* @__PURE__ */ snapp.create(CardHolder, null, OurServiceData.map((data) => /* @__PURE__ */ snapp.create(ServiceCard, { data }))));
};
var OurService_default = OurService;

// public/views/sections/ContactSection.jsx
var ContactSection = () => {
  return /* @__PURE__ */ snapp.create(Section_default, { className: "bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 space-y-16 pt-14" }, /* @__PURE__ */ snapp.create("div", { className: "flex flex-col md:flex-row-reverse" }, /* @__PURE__ */ snapp.create("div", { class: "bg-white px-6 py-10 md:py-12 md:w-1/2 rounded-t-2xl md:rounded-l-none md:rounded-r-2xl" }, /* @__PURE__ */ snapp.create("div", { class: "text-center mb-10" }, /* @__PURE__ */ snapp.create("h2", { class: "font-bold text-3xl md:text-4xl text-slate-900 mb-2" }, "CONTACT US"), /* @__PURE__ */ snapp.create("p", { class: "text-slate-600" }, "We'd love to hear from you. Send us a message!")), /* @__PURE__ */ snapp.create("form", { id: "contactForm", class: "space-y-5" }, /* @__PURE__ */ snapp.create("div", { class: "relative" }, /* @__PURE__ */ snapp.create(
    "input",
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Enter your Name",
      required: true,
      class: "w-full px-5 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
    }
  )), /* @__PURE__ */ snapp.create("div", { class: "relative" }, /* @__PURE__ */ snapp.create(
    "input",
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Enter a valid email address",
      required: true,
      class: "w-full px-5 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
    }
  )), /* @__PURE__ */ snapp.create("div", { class: "relative" }, /* @__PURE__ */ snapp.create(
    "textarea",
    {
      name: "message",
      id: "message",
      placeholder: "Enter your message",
      rows: "6",
      required: true,
      class: "w-full px-5 py-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none placeholder:text-slate-400"
    }
  )), /* @__PURE__ */ snapp.create(
    "button",
    {
      type: "submit",
      class: "w-full bg-gradient-to-r bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide"
    },
    "Submit"
  ), /* @__PURE__ */ snapp.create("p", { class: "text-xs text-center text-slate-500 mt-4" }, "This site is protected by reCAPTCHA and the Google", /* @__PURE__ */ snapp.create("a", { href: "https://policies.google.com/privacy", class: "text-indigo-600 hover:underline" }, "Privacy Policy"), " and", /* @__PURE__ */ snapp.create("a", { href: "https://policies.google.com/terms", class: "text-indigo-600 hover:underline" }, "Terms of Service"), " apply."))), /* @__PURE__ */ snapp.create("div", { className: "bg-slate-100 flex flex-col justify-center items-center py-10 px-4 md:w-1/2 space-y-8 rounded-b-2xl md:rounded-r-none md:rounded-l-2xl" }, /* @__PURE__ */ snapp.create("div", { className: "space-y-8 md:space-y-10" }, /* @__PURE__ */ snapp.create("div", { class: "flex flex-row gap-x-5 items-start" }, /* @__PURE__ */ snapp.create("div", { class: "flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faPhone, className: "w-5 h-5 text-blue-600" })), /* @__PURE__ */ snapp.create("div", { class: "space-y-2" }, /* @__PURE__ */ snapp.create("h2", { class: "text-xl font-semibold text-slate-900" }, "Call Us"), /* @__PURE__ */ snapp.create("p", { class: "text-slate-600 leading-relaxed" }, "1 (234) 567-891", /* @__PURE__ */ snapp.create("br", null), "1 (234) 987-654"))), /* @__PURE__ */ snapp.create("div", { class: "flex flex-row gap-x-5 items-start" }, /* @__PURE__ */ snapp.create("div", { class: "flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faLocationPin, className: "w-5 h-5 text-blue-600" })), /* @__PURE__ */ snapp.create("div", { class: "space-y-2" }, /* @__PURE__ */ snapp.create("h2", { class: "text-xl font-semibold text-slate-900" }, "Location"), /* @__PURE__ */ snapp.create("p", { class: "text-slate-600 leading-relaxed" }, "121 Rock Street, 21 Avenue,", /* @__PURE__ */ snapp.create("br", null), "New York, NY 92103-9000"))), /* @__PURE__ */ snapp.create("div", { class: "flex flex-row gap-x-5 items-start" }, /* @__PURE__ */ snapp.create("div", { class: "flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faClock, className: "w-5 h-5 text-blue-600" })), /* @__PURE__ */ snapp.create("div", { class: "space-y-2" }, /* @__PURE__ */ snapp.create("h2", { class: "text-xl font-semibold text-slate-900" }, "Business Hours"), /* @__PURE__ */ snapp.create("p", { class: "text-slate-600 leading-relaxed" }, "Mon \u2013 Fri \u2026\u2026 10 am \u2013 8 pm", /* @__PURE__ */ snapp.create("br", null), "Sat, Sun ....\u2026 Closed")))))));
};
var ContactSection_default = ContactSection;

// public/views/index.jsx
var App = () => {
  return /* @__PURE__ */ snapp.create("<>", null, /* @__PURE__ */ snapp.create(NavBar_default, null), /* @__PURE__ */ snapp.create("main", null, /* @__PURE__ */ snapp.create(HeroSection, null), /* @__PURE__ */ snapp.create(Products_default, null), /* @__PURE__ */ snapp.create(OurService_default, null), /* @__PURE__ */ snapp.create(ContactSection_default, null)));
};
var SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App(), "replace");
/*! Bundled license information:

@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2025 Fonticons, Inc.
   *)
*/
