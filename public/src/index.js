import snapp from "./snapp.js";

// public/views/components/Section.jsx
var Section = ({ id, children, className }) => {
  return /* @__PURE__ */ snapp.create("section", { id: id || "", className: "w-full px-6 xs:px-8 md:px-12 lg:px-14 xl:px-28 2xl:px-96 " + className || "" }, children);
};
var CardHolder = ({ children, className }) => {
  return /* @__PURE__ */ snapp.create("div", { className: "flex flex-wrap gap-6 text-center justify-center " + (className || "") }, children);
};
var Section_default = Section;

// node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var faEnvelope = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]
};
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
var faLink = {
  prefix: "fas",
  iconName: "link",
  icon: [576, 512, [128279, "chain"], "f0c1", "M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]
};
var faCheck = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]
};
var faArrowRight = {
  prefix: "fas",
  iconName: "arrow-right",
  icon: [512, 512, [8594], "f061", "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]
};
var faXmark = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]
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
var faStar = {
  prefix: "fas",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]
};
var faStore = {
  prefix: "fas",
  iconName: "store",
  icon: [512, 512, [], "f54e", "M30.7 72.3C37.6 48.4 59.5 32 84.4 32l344 0c24.9 0 46.8 16.4 53.8 40.3l23.4 80.2c12.8 43.7-20.1 87.5-65.6 87.5-26.3 0-49.4-14.9-60.8-37.1-11.6 21.9-34.6 37.1-61.4 37.1-26.6 0-49.7-15-61.3-37-11.6 22-34.7 37-61.3 37-26.8 0-49.8-15.1-61.4-37.1-11.4 22.1-34.5 37.1-60.8 37.1-45.6 0-78.4-43.7-65.6-87.5L30.7 72.3zM96.4 352l320 0 0-66.4c7.6 1.6 15.5 2.4 23.5 2.4 14.3 0 28-2.6 40.5-7.2l0 151.2c0 26.5-21.5 48-48 48l-352 0c-26.5 0-48-21.5-48-48l0-151.2c12.5 4.6 26.1 7.2 40.5 7.2 8.1 0 15.9-.8 23.5-2.4l0 66.4z"]
};
var faGifts = {
  prefix: "fas",
  iconName: "gifts",
  icon: [576, 512, [], "f79c", "M202-30.6c12.5 4.4 19 18.1 14.6 30.6l-8.2 23.1 25.4-18.5c10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5L233.8 64 272 64c26.5 0 48 21.5 48 48l0 2.1c-54.7 10.4-96 58.4-96 116l0 1.9c0 8.9 1 17.5 2.8 25.9-11.9 17.8-18.8 39.1-18.8 62.1l0 128c0 23.8 7.4 45.9 20.1 64L48 512c-26.5 0-48-21.5-48-48L0 112C0 85.5 21.5 64 48 64l38.2 0-28.3-20.6C47.2 35.6 44.8 20.6 52.6 9.9S75.4-3.2 86.1 4.6l27.4 20-8.3-25C101-13 107.8-26.6 120.4-30.8s26.2 2.6 30.4 15.2l9.9 29.8 10.7-30.2c4.4-12.5 18.1-19 30.6-14.6zM489.9 208c-7.5 0-14.5 3.8-18.6 10.1L446.9 256 488 256c13.3 0 24-10.7 24-24l0-1.9c0-12.2-9.9-22.1-22.1-22.1zM385.1 256l-24.4-37.9c-4.1-6.3-11.1-10.1-18.6-10.1-12.2 0-22.1 9.9-22.1 22.1l0 1.9c0 13.3 10.7 24 24 24l41.1 0zM281.9 268.5c-6.3-10.7-9.9-23.2-9.9-36.5l0-1.9c0-38.7 31.4-70.1 70.1-70.1 23.8 0 46 12.1 58.9 32.1l15 23.2 15-23.2c12.9-20 35.1-32.1 58.9-32.1 38.7 0 70.1 31.4 70.1 70.1l0 1.9c0 13.3-3.6 25.8-9.9 36.5 15.7 11.7 25.9 30.4 25.9 51.5l0 128c0 35.3-28.7 64-64 64l-72 0 0-208-48 0 0 208-72 0c-35.3 0-64-28.7-64-64l0-128c0-21.1 10.2-39.8 25.9-51.5z"]
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
var faLocationDot = {
  prefix: "fas",
  iconName: "location-dot",
  icon: [384, 512, ["map-marker-alt"], "f3c5", "M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]
};
var faBars = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
};
var faShield = {
  prefix: "fas",
  iconName: "shield",
  icon: [512, 512, [128737, "shield-blank"], "f132", "M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0z"]
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
  return /* @__PURE__ */ snapp.create("article", { className: "group md:w-80 lg:w-2/5 xl:w-80 2xl:w-96 relative bg-white rounded-3xl p-8 py-14 flex flex-col gap-y-6 text-center transition-all duration-500 shadow-2xl overflow-hidden" }, /* @__PURE__ */ snapp.create("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-100duration-500" }), /* @__PURE__ */ snapp.create("div", { className: "absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 transition-opacity" }), /* @__PURE__ */ snapp.create("div", { className: "absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30 transition-opacity" }), /* @__PURE__ */ snapp.create("div", { className: "relative mx-auto bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-3xl shadow-lg drop-shadow-2xl" }, /* @__PURE__ */ snapp.create("div", { className: "absolute inset-0 bg-gradient-to-tl from-purple-600 to-pink-600 rounded-3xl opacity-0" }), /* @__PURE__ */ snapp.create(Fontawesome, { icon: data.icon, className: "relative w-8 h-8 text-white drop-shadow-lg" })), /* @__PURE__ */ snapp.create("h2", { className: "relative text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors" }, data.title), /* @__PURE__ */ snapp.create("p", { className: "relative text-base text-gray-600 leading-relaxed" }, data.description));
};
var ServiceCard = ({ data }) => {
  return /* @__PURE__ */ snapp.create("article", { className: "group md:w-80 lg:w-2/5 xl:w-80 2xl:w-96 flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden" }, /* @__PURE__ */ snapp.create("div", { className: "relative overflow-hidden h-44" }, /* @__PURE__ */ snapp.create("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity" }), /* @__PURE__ */ snapp.create("div", { className: "relative bg-gradient-to-br from-gray-50 to-gray-100 h-full flex items-center justify-center p-6" }, /* @__PURE__ */ snapp.create(
    "img",
    {
      src: data.image,
      alt: data.title,
      className: "w-auto h-32 object-contain transition-transform duration-500 group-hover:scale-110",
      loading: "lazy"
    }
  ))), /* @__PURE__ */ snapp.create("div", { className: "flex flex-col flex-grow p-6 space-y-4" }, /* @__PURE__ */ snapp.create("h3", { className: "text-2xl font-bold text-gray-900 group-hover:text-blue-600" }, data.title), /* @__PURE__ */ snapp.create("p", { className: "text-gray-600 leading-relaxed text-base" }, data.description), data.features && /* @__PURE__ */ snapp.create("div", { className: "grid grid-cols-3 gap-3 pt-4 border-t border-gray-100" }, data.features.map((feature, index) => /* @__PURE__ */ snapp.create("div", { key: index, className: "text-center" }, /* @__PURE__ */ snapp.create("div", { className: "text-blue-600 font-bold text-lg" }, feature.value), /* @__PURE__ */ snapp.create("div", { className: "text-gray-500 text-xs" }, feature.label)))), /* @__PURE__ */ snapp.create("div", { className: "h-10" })));
};
var TeamCard = ({ member }) => {
  return /* @__PURE__ */ snapp.create("article", { className: "bg-white w-60 p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2" }, /* @__PURE__ */ snapp.create("div", { className: "relative inline-block mb-4" }, /* @__PURE__ */ snapp.create(
    "img",
    {
      src: member.avatar_url,
      alt: member.login,
      loading: "lazy",
      className: "w-28 h-28 rounded-full object-cover border-4 border-gray-100 group-hover:border-blue-500 transition-all duration-300"
    }
  )), /* @__PURE__ */ snapp.create("h3", { className: "text-xl font-bold text-gray-900 mb-1" }, member.login), /* @__PURE__ */ snapp.create("p", { className: "text-blue-600 font-medium text-sm mb-3" }, member.type), /* @__PURE__ */ snapp.create("div", { className: "flex justify-center gap-3" }, /* @__PURE__ */ snapp.create(
    "a",
    {
      href: member.html_url,
      className: "w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
    },
    /* @__PURE__ */ snapp.create(Fontawesome, { icon: faLink, className: "text-sm" })
  )));
};

// public/views/components/Headings.jsx
var SectionTitle = ({ children }) => {
  return /* @__PURE__ */ snapp.create("h1", { className: "text-4xl lg:text-5xl font-semibold text-gray-900 mb-4" }, children);
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
  return /* @__PURE__ */ snapp.create(Section_default, { className: "space-y-16 pt-6" }, /* @__PURE__ */ snapp.create("div", { className: "text-center space-y-6 text-slate-800" }, /* @__PURE__ */ snapp.create(SectionTitle, null, "About Ulisha Limited"), /* @__PURE__ */ snapp.create("p", { className: "text-sm lg:text-md xl:text-lg font-semibold leading-relaxed text-slate-900 mx-auto lg:max-w-[70%]" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faQuoteLeft, className: "inline align-top h-3 mr-1" }), "We build the digital backbone for market efficiency, connecting households to cost-effective products and empowering local businesses with proprietary tech.", /* @__PURE__ */ snapp.create(Fontawesome, { icon: faQuoteRight, className: "inline align-top h-3 ml-1" }))), /* @__PURE__ */ snapp.create(CardHolder, null, productData.map((data) => /* @__PURE__ */ snapp.create(ProductCard, { data }))));
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
  return /* @__PURE__ */ snapp.create(Section_default, { className: "flex flex-col align-middle py-6 mt-14 lg:mt-20" }, /* @__PURE__ */ snapp.create("div", { className: "flex flex-col my-auto gap-y-4 xl:gap-6" }, /* @__PURE__ */ snapp.create("div", { className: "flex flex-col lg:flex-row gap-y-10 justify-between text-slate-800 mx-auto" }, /* @__PURE__ */ snapp.create("div", { className: "flex flex-col gap-y-8 flex-[2] my-auto" }, /* @__PURE__ */ snapp.create("h1", { className: "font-bold text-5xl lg:text-6xl" }, "The Engine For ", /* @__PURE__ */ snapp.create("br", null), " Nigerian ", /* @__PURE__ */ snapp.create("br", null), " Commerce"), /* @__PURE__ */ snapp.create("p", { className: "text-lg lg:text-xl leading-relaxed max-w-[92%] lg:max-w-[90%] xl:max-w-[85%] " }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faQuoteLeft, className: "inline align-top h-4 ml-1" }), "We build the digital backbone for market efficiency, connecting households to cost-effective products and empowering local businesses with proprietary tech", /* @__PURE__ */ snapp.create(Fontawesome, { icon: faQuoteRight, className: "inline align-top h-4 ml-1" })), /* @__PURE__ */ snapp.create("div", { className: "flex gap-x-4" }, /* @__PURE__ */ snapp.create(ButtonOutline, null, "Our Products"), /* @__PURE__ */ snapp.create(Button, null, "Contact Us"))), /* @__PURE__ */ snapp.create("div", { className: "flex flex-col flex-[1] gap-y-5 my-auto items-center md:items-start lg:items-end" }, BubbletextData.map((data) => /* @__PURE__ */ snapp.create(BubbleText_default, { data })))), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create(
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
  const isMenuOpen = snapp.dynamic(false);
  const NavLink = [
    { title: "Home", link: "#" },
    { title: "About Us", link: "#" },
    { title: "Ulisha Store", link: "#" }
  ];
  return /* @__PURE__ */ snapp.create("header", { className: "bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-xs" }, /* @__PURE__ */ snapp.create(Section_default, { className: "py-3 md:py-6" }, /* @__PURE__ */ snapp.create("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ snapp.create("div", { className: "flex items-center" }, /* @__PURE__ */ snapp.create("a", { href: "/", className: "text-2xl font-bold" }, /* @__PURE__ */ snapp.create("span", { className: "text-blue-600" }, "Ulisha"), /* @__PURE__ */ snapp.create("span", null, "Limited"))), /* @__PURE__ */ snapp.create("nav", { className: "hidden text-slate-900 md:flex items-center space-x-8 " }, NavLink.map((link) => /* @__PURE__ */ snapp.create("a", { href: link.link, target: "_blank", className: "font-medium hover:text-blue-600 transition-colors relative group" }, link.title, /* @__PURE__ */ snapp.create("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" })))), /* @__PURE__ */ snapp.create("div", { className: "hidden md:flex items-center space-x-4" }, /* @__PURE__ */ snapp.create("button", { className: "px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-xs shadow-black/50" }, "Get Started")), /* @__PURE__ */ snapp.create(
    "button",
    {
      className: "md:hidden text-slate-900 p-2",
      onClick: () => isMenuOpen.update(!isMenuOpen.value)
    },
    /* @__PURE__ */ snapp.create(Fontawesome, { icon: faBars, className: () => "w-6 h-6 " + (isMenuOpen.value ? "hidden" : "block") }),
    /* @__PURE__ */ snapp.create(Fontawesome, { icon: faXmark, className: () => "w-6 h-6 " + (isMenuOpen.value ? "block" : "hidden") })
  )), /* @__PURE__ */ snapp.create(
    "div",
    {
      id: "mobileMenu",
      className: () => "md:hidden overflow-hidden transition-all duration-300 " + (!isMenuOpen.value && " max-h-0 opacity-0") + (isMenuOpen.value && " max-h-96 opacity-100")
    },
    /* @__PURE__ */ snapp.create("nav", { className: "py-4 space-y-4" }, NavLink.map((link) => /* @__PURE__ */ snapp.create("a", { href: link.link, className: "block text-slate-900 font-medium py-2 px-4 hover:bg-slate-300 rounded-lg transition-colors" }, link.title)), /* @__PURE__ */ snapp.create("button", { className: "w-full px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors" }, "Get Started"))
  )));
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
  return /* @__PURE__ */ snapp.create(Section_default, { className: "space-y-16 py-14" }, /* @__PURE__ */ snapp.create("div", { class: "text-center" }, /* @__PURE__ */ snapp.create("p", { class: "text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3" }, "Our Services"), /* @__PURE__ */ snapp.create(SectionTitle, null, "What We Offer"), /* @__PURE__ */ snapp.create("p", { class: "text-slate-700 max-w-2xl mx-auto text-lg" }, "Comprehensive solutions tailored to bring your digital vision to life")), /* @__PURE__ */ snapp.create(CardHolder, null, OurServiceData.map((data) => /* @__PURE__ */ snapp.create(ServiceCard, { data }))));
};
var OurService_default = OurService;

// public/views/components/ContactInfo.jsx
var ContactInfo = () => {
  return /* @__PURE__ */ snapp.create("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" }, /* @__PURE__ */ snapp.create("a", { href: "tel:1234567891", className: "flex items-center gap-4 p-5 bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100" }, /* @__PURE__ */ snapp.create("div", { className: "w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faPhone, className: "w-5 h-5 text-white" })), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("p", { className: "text-sm font-medium text-slate-500" }, "Call Us"), /* @__PURE__ */ snapp.create("p", { className: "text-slate-200 font-semibold" }, "+234 913 478 1219"))), /* @__PURE__ */ snapp.create("a", { href: "mailto:hello@company.com", className: "flex items-center gap-4 p-5 bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100" }, /* @__PURE__ */ snapp.create("div", { className: "w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faEnvelope, className: "w-5 h-5 text-white" })), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("p", { className: "text-sm font-medium text-slate-500" }, "Email Us"), /* @__PURE__ */ snapp.create("p", { className: "text-slate-200 font-semibold" }, "support@ulislimited.com"))), /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-4 p-5 bg-gray-700 rounded-xl shadow-sm border border-slate-100" }, /* @__PURE__ */ snapp.create("div", { className: "w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faClock, className: "w-5 h-5 text-white" })), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("p", { className: "text-sm font-medium text-slate-500" }, "Hours"), /* @__PURE__ */ snapp.create("p", { className: "text-slate-200 font-semibold" }, "Mon-Sat: 8AM - 6PM"))));
};
var ContactInfo_default = ContactInfo;

// public/views/sections/ContactSection.jsx
var ContactSection = () => {
  return /* @__PURE__ */ snapp.create(Section_default, { className: "bg-slate-50 space-y-16 pt-14 pb-20" }, /* @__PURE__ */ snapp.create("div", { className: "text-center mb-10" }, /* @__PURE__ */ snapp.create(SectionTitle, null, "Contact Us"), /* @__PURE__ */ snapp.create("p", { className: "text-slate-600" }, "We'd love to hear from you. Send us a message!")), /* @__PURE__ */ snapp.create("div", { className: "mx-auto space-y-5 md:space-y-10" }, /* @__PURE__ */ snapp.create(ContactInfo_default, null), /* @__PURE__ */ snapp.create("div", { className: "bg-white px-4 py-10 lg:px-12 lg:py-12 rounded-2xl shadow-lg max-w-2xl 2xl:max-w-4xl mx-auto" }, /* @__PURE__ */ snapp.create("h3", { className: "text-2xl font-bold text-slate-900 mb-2" }, "Send us a message"), /* @__PURE__ */ snapp.create("p", { className: "text-slate-600 mb-8" }, "Fill out the form below and we'll get back to you within 24 hours."), /* @__PURE__ */ snapp.create("form", { id: "contactForm", className: "space-y-5" }, /* @__PURE__ */ snapp.create("div", { className: "relative" }, /* @__PURE__ */ snapp.create(
    "input",
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Enter your Name",
      required: true,
      className: "w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
    }
  )), /* @__PURE__ */ snapp.create("div", { className: "relative" }, /* @__PURE__ */ snapp.create(
    "input",
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Enter a valid email address",
      required: true,
      className: "w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
    }
  )), /* @__PURE__ */ snapp.create("div", { className: "relative" }, /* @__PURE__ */ snapp.create(
    "textarea",
    {
      name: "message",
      id: "message",
      placeholder: "Enter your message",
      rows: "5",
      required: true,
      className: "w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder:text-slate-400"
    }
  )), /* @__PURE__ */ snapp.create(
    "button",
    {
      type: "submit",
      className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide"
    },
    "Send Message"
  ), /* @__PURE__ */ snapp.create("p", { className: "text-xs text-center text-slate-500 mt-4" }, "This site is protected by reCAPTCHA and the Google", /* @__PURE__ */ snapp.create("a", { href: "https://policies.google.com/privacy", className: "text-blue-600 hover:underline" }, " Privacy Policy"), " and", /* @__PURE__ */ snapp.create("a", { href: "https://policies.google.com/terms", className: "text-blue-600 hover:underline" }, " Terms of Service"), " apply."))), /* @__PURE__ */ snapp.create("div", { className: "mt-12 text-center" }, /* @__PURE__ */ snapp.create("div", { className: "inline-flex items-center gap-3 text-slate-600" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faLocationDot, className: "w-5 h-5 text-blue-600" }), /* @__PURE__ */ snapp.create("p", null, "Delta, Nigeria")))));
};
var ContactSection_default = ContactSection;

// public/views/sections/TeamSection.jsx
var TeamSection = () => {
  fetch("https://api.github.com/orgs/ulisha-limited/members").then((response) => {
    return response.json();
  }).then((members) => {
    snapp.on("DOM", () => {
      const teamDiv = snapp.select("#teamDiv");
      snapp.render(teamDiv, /* @__PURE__ */ snapp.create(CardHolder, { className: "grid-cols-[repeat(auto-fit,minmax(150px,250px))]" }, members.map((member) => /* @__PURE__ */ snapp.create(TeamCard, { member }))));
    });
  }).catch((error) => {
    console.error("Error:", error);
    snapp.on("DOM", () => {
      const teamDiv = snapp.select("#teamDiv");
      snapp.render(teamDiv, /* @__PURE__ */ snapp.create("<>", null, /* @__PURE__ */ snapp.create("div", { className: "text-center mx-auto py-12" }, /* @__PURE__ */ snapp.create("p", { className: "text-red-600 font-semibold text-lg" }, "Couldn't fetch team members"), /* @__PURE__ */ snapp.create("p", { className: "text-gray-500 text-sm mt-2" }, "Please try again later"))));
    });
  });
  return /* @__PURE__ */ snapp.create(Section_default, { className: "py-6" }, /* @__PURE__ */ snapp.create("div", { className: "space-y-6" }, /* @__PURE__ */ snapp.create("div", { className: "text-center" }, /* @__PURE__ */ snapp.create(SectionTitle, null, "Meet Our Team"), /* @__PURE__ */ snapp.create("p", { className: "text-slate-700 mx-auto text-lg" }, "Talented individuals working together to create something amazing")), /* @__PURE__ */ snapp.create("div", { id: "teamDiv" }, /* @__PURE__ */ snapp.create("div", { className: "text-center mx-auto py-12" }, /* @__PURE__ */ snapp.create("p", { className: "text-blue-600 font-semibold text-lg" }, "Fetching team members"), /* @__PURE__ */ snapp.create("p", { className: "text-gray-500 text-sm mt-2" }, "Please wait...")))));
};
var TeamSection_default = TeamSection;

// node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var faFacebookF = {
  prefix: "fab",
  iconName: "facebook-f",
  icon: [320, 512, [], "f39e", "M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"]
};
var faGithub = {
  prefix: "fab",
  iconName: "github",
  icon: [512, 512, [], "f09b", "M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]
};
var faTiktok = {
  prefix: "fab",
  iconName: "tiktok",
  icon: [448, 512, [], "e07b", "M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"]
};
var faInstagram = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
};
var faTwitter = {
  prefix: "fab",
  iconName: "twitter",
  icon: [512, 512, [], "f099", "M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]
};

// public/views/components/GithubLink.jsx
var GithubLink = () => {
  return /* @__PURE__ */ snapp.create("div", { className: "bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white" }, /* @__PURE__ */ snapp.create("div", { className: "flex items-start justify-between gap-6 flex-wrap" }, /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h5", { className: "text-lg font-bold mb-2" }, "Explore Our Repositories"), /* @__PURE__ */ snapp.create("p", { className: "text-gray-400 mb-4" }, "Dive into our code and see our commitment to transparency firsthand."), /* @__PURE__ */ snapp.create(
    "a",
    {
      href: "https://github.com/ulisha-limited",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-mono text-sm group"
    },
    /* @__PURE__ */ snapp.create("span", null, "github.com/ulisha-limited"),
    /* @__PURE__ */ snapp.create(Fontawesome, { icon: faArrowRight, className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" })
  )), /* @__PURE__ */ snapp.create(Fontawesome, { icon: faGithub, className: "w-16 h-16 text-gray-700" })));
};
var GithubLink_default = GithubLink;

// public/views/components/LicenseRules.jsx
var LicenseRules = () => {
  return /* @__PURE__ */ snapp.create("<>", null, /* @__PURE__ */ snapp.create("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ snapp.create("div", { className: "bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-200 hover:shadow-lg transition-all" }, /* @__PURE__ */ snapp.create("div", { className: "flex items-start gap-4 mb-6" }, /* @__PURE__ */ snapp.create("div", { className: "w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faCode, className: "w-5 h-5 text-blue-600" })), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h4", { className: "text-xl font-bold text-gray-900 mb-2" }, "Open Source Software"), /* @__PURE__ */ snapp.create("div", { className: "w-12 h-0.5 bg-blue-600" }))), /* @__PURE__ */ snapp.create("div", { className: "space-y-4 text-gray-600 leading-relaxed" }, /* @__PURE__ */ snapp.create("p", null, "Our software is ", /* @__PURE__ */ snapp.create("span", { className: " text-gray-900" }, "open source"), ", meaning anyone can review, build, and test the code. No free trials, no locked demos."), /* @__PURE__ */ snapp.create("p", null, "You can see exactly how it works, anytime. Every function, every algorithm, every line of code is available for inspection."))), /* @__PURE__ */ snapp.create("div", { className: "bg-white rounded-xl border border-gray-200 p-8 hover:border-purple-200 hover:shadow-lg transition-all" }, /* @__PURE__ */ snapp.create("div", { className: "flex items-start gap-4 mb-6" }, /* @__PURE__ */ snapp.create("div", { className: "w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faShield, className: "w-5 h-5 text-purple-600" })), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h4", { className: "text-xl font-bold text-gray-900 mb-2" }, "Licensed for Production"), /* @__PURE__ */ snapp.create("div", { className: "w-12 h-0.5 bg-purple-600" }))), /* @__PURE__ */ snapp.create("div", { className: "space-y-4 text-gray-600 leading-relaxed" }, /* @__PURE__ */ snapp.create("p", null, "While the source code is public, the software itself is licensed. ", /* @__PURE__ */ snapp.create("span", { className: "text-gray-900" }, "A valid license is required for production or commercial use.")), /* @__PURE__ */ snapp.create("p", null, "This approach ensures transparency for developers and businesses while supporting sustainable development.")))));
};
var LicenseRules_default = LicenseRules;

// public/views/components/WhyThisApproach.jsx
var WhyThisApproach = () => {
  return /* @__PURE__ */ snapp.create("div", { className: "bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200" }, /* @__PURE__ */ snapp.create("h5", { className: "text-lg font-bold text-gray-900 mb-4" }, "Why This Approach Works"), /* @__PURE__ */ snapp.create("div", { className: "grid md:grid-cols-2 gap-6" }, /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h6", { className: "font-semibold text-gray-900 mb-2" }, "For Developers"), /* @__PURE__ */ snapp.create("ul", { className: "space-y-2 text-sm text-gray-600" }, /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-2" }, /* @__PURE__ */ snapp.create("span", { className: "text-blue-600 mt-1" }, "\u2022"), /* @__PURE__ */ snapp.create("span", null, "Review code before adoption")), /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-2" }, /* @__PURE__ */ snapp.create("span", { className: "text-blue-600 mt-1" }, "\u2022"), /* @__PURE__ */ snapp.create("span", null, "Test locally without restrictions")), /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-2" }, /* @__PURE__ */ snapp.create("span", { className: "text-blue-600 mt-1" }, "\u2022"), /* @__PURE__ */ snapp.create("span", null, "Contribute to improvements")))), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h6", { className: "font-semibold text-gray-900 mb-2" }, "For Businesses"), /* @__PURE__ */ snapp.create("ul", { className: "space-y-2 text-sm text-gray-600" }, /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-2" }, /* @__PURE__ */ snapp.create("span", { className: "text-purple-600 mt-1" }, "\u2022"), /* @__PURE__ */ snapp.create("span", null, "Security team audits")), /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-2" }, /* @__PURE__ */ snapp.create("span", { className: "text-purple-600 mt-1" }, "\u2022"), /* @__PURE__ */ snapp.create("span", null, "No vendor lock-in concerns")), /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-2" }, /* @__PURE__ */ snapp.create("span", { className: "text-purple-600 mt-1" }, "\u2022"), /* @__PURE__ */ snapp.create("span", null, "Sustainable long-term support"))))));
};
var WhyThisApproach_default = WhyThisApproach;

// public/views/sections/OpenSourceSection.jsx
var OpenSourceSection = () => {
  return /* @__PURE__ */ snapp.create(Section_default, null, /* @__PURE__ */ snapp.create("div", { className: "text-center mb-20" }, /* @__PURE__ */ snapp.create("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faCode, className: "w-4 h-4 text-blue-600" }), /* @__PURE__ */ snapp.create("span", { className: "text-sm font-medium text-blue-600" }, "Open Source Approach")), /* @__PURE__ */ snapp.create(SectionTitle, null, "Open Source, Transparent, and Accessible"), /* @__PURE__ */ snapp.create("p", { className: "text-xl text-center text-gray-600" }, "Building trust through complete transparency in everything we do.")), /* @__PURE__ */ snapp.create("div", { className: "space-y-8" }, /* @__PURE__ */ snapp.create("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-10 border border-blue-100" }, /* @__PURE__ */ snapp.create("div", { className: "w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faShield, className: "w-6 h-6 text-white" })), /* @__PURE__ */ snapp.create("h3", { className: "text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6" }, "We believe in openness and trust."), /* @__PURE__ */ snapp.create("p", { className: "text-gray-600 text-lg leading-relaxed mb-8" }, "Our commitment to transparency means you can verify everything yourself. No secrets, no surprises."), /* @__PURE__ */ snapp.create("div", { className: "space-y-3 mb-8" }, /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ snapp.create("div", { className: "w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faCheck, className: "w-3 h-3 text-white" })), /* @__PURE__ */ snapp.create("span", { className: "text-sm font-medium text-gray-700" }, "100% Source Visibility")), /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ snapp.create("div", { className: "w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faCheck, className: "w-3 h-3 text-white" })), /* @__PURE__ */ snapp.create("span", { className: "text-sm font-medium text-gray-700" }, "Security Auditable")), /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ snapp.create("div", { className: "w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faCheck, className: "w-3 h-3 text-white" })), /* @__PURE__ */ snapp.create("span", { className: "text-sm font-medium text-gray-700" }, "Community Driven"))), /* @__PURE__ */ snapp.create(
    "a",
    {
      href: "https://github.com/ulisha-limited",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors group"
    },
    /* @__PURE__ */ snapp.create(Fontawesome, { icon: faGifts, className: "w-5 h-5" }),
    /* @__PURE__ */ snapp.create("span", null, "View on GitHub"),
    /* @__PURE__ */ snapp.create(Fontawesome, { icon: faArrowRight, className: "w-4 h-4 group-hover:translate-x-0.5 transition-transform" })
  )), /* @__PURE__ */ snapp.create(LicenseRules_default, null), /* @__PURE__ */ snapp.create(GithubLink_default, null), /* @__PURE__ */ snapp.create(WhyThisApproach_default, null)));
};
var OpenSourceSection_default = OpenSourceSection;

// public/views/sections/Footer.jsx
var Footer = () => {
  return /* @__PURE__ */ snapp.create("footer", { className: "bg-slate-900 text-gray-300 py-12" }, /* @__PURE__ */ snapp.create(Section_default, null, /* @__PURE__ */ snapp.create("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4" }, /* @__PURE__ */ snapp.create("div", { className: "space-y-4" }, /* @__PURE__ */ snapp.create("h2", { className: "text-2xl font-bold" }, /* @__PURE__ */ snapp.create("span", { className: "text-blue-600" }, "Ulisha"), /* @__PURE__ */ snapp.create("span", { className: "text-white" }, "Limited")), /* @__PURE__ */ snapp.create("p", { className: "text-sm leading-relaxed" }, "We build the digital backbone for market efficiency, connecting households to cost-effective products and empowering local businesses with proprietary tech"), /* @__PURE__ */ snapp.create("div", { className: "flex gap-4 pt-2" }, /* @__PURE__ */ snapp.create("a", { href: "#", className: "w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faFacebookF, className: "w-5 h-5" })), /* @__PURE__ */ snapp.create("a", { href: "#", className: "w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faInstagram, className: "w-5 h-5" })), /* @__PURE__ */ snapp.create("a", { href: "#", className: "w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faTwitter, className: "w-5 h-5" })), /* @__PURE__ */ snapp.create("a", { href: "#", className: "w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faTiktok, className: "w-5 h-5" }))), /* @__PURE__ */ snapp.create("a", { href: "#", className: "inline-block mt-4 bg-white px-4 py-2 rounded text-sm font-medium text-slate-900 hover:bg-gray-100 transition" }, /* @__PURE__ */ snapp.create("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faStar, className: "w-4 h-4 text-green-600" }), /* @__PURE__ */ snapp.create("span", null, "Review us on"), /* @__PURE__ */ snapp.create("span", { className: "font-bold" }, "Trustpilot")))), /* @__PURE__ */ snapp.create("div", { className: "col-span-2 space-y-4 md:flex md:justify-evenly" }, /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h3", { className: "text-white text-lg font-semibold mb-4" }, "Links"), /* @__PURE__ */ snapp.create("ul", { className: "space-y-3" }, /* @__PURE__ */ snapp.create("li", null, /* @__PURE__ */ snapp.create("a", { href: "#", className: "hover:text-blue-600 transition" }, "Home")), /* @__PURE__ */ snapp.create("li", null, /* @__PURE__ */ snapp.create("a", { href: "#", className: "hover:text-blue-600 transition" }, "About Us")), /* @__PURE__ */ snapp.create("li", null, /* @__PURE__ */ snapp.create("a", { href: "#", className: "hover:text-blue-600 transition" }, "Sitemap")))), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h3", { className: "text-white text-lg font-semibold mb-4" }, "Legal"), /* @__PURE__ */ snapp.create("ul", { className: "space-y-3" }, /* @__PURE__ */ snapp.create("li", null, /* @__PURE__ */ snapp.create("a", { href: "#", className: "hover:text-blue-600 transition" }, "Terms")), /* @__PURE__ */ snapp.create("li", null, /* @__PURE__ */ snapp.create("a", { href: "#", className: "hover:text-blue-600 transition" }, "Privacy Policy"))))), /* @__PURE__ */ snapp.create("div", null, /* @__PURE__ */ snapp.create("h3", { className: "text-white text-lg font-semibold mb-4" }, "Contact Info"), /* @__PURE__ */ snapp.create("ul", { className: "space-y-3" }, /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-3" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faLocationDot, className: "w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ snapp.create("span", null, "Delta, Nigeria")), /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-3" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faPhone, className: "w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ snapp.create("span", null, "+234 913 478 1219")), /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-3" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faEnvelope, className: "w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ snapp.create("span", null, "support@ulishastore.com")), /* @__PURE__ */ snapp.create("li", { className: "flex items-start gap-3" }, /* @__PURE__ */ snapp.create(Fontawesome, { icon: faClock, className: "w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ snapp.create("span", null, "Mon-Sat: 8AM - 6PM"))))), /* @__PURE__ */ snapp.create("div", { className: "max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm" }, /* @__PURE__ */ snapp.create("p", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Ulisha Limited. All rights reserved."))));
};
var Footer_default = Footer;

// public/views/index.jsx
var App = () => {
  return /* @__PURE__ */ snapp.create("<>", null, /* @__PURE__ */ snapp.create(NavBar_default, null), /* @__PURE__ */ snapp.create("main", null, /* @__PURE__ */ snapp.create(HeroSection, null), /* @__PURE__ */ snapp.create(Products_default, null), /* @__PURE__ */ snapp.create(OurService_default, null), /* @__PURE__ */ snapp.create(OpenSourceSection_default, null), /* @__PURE__ */ snapp.create(TeamSection_default, null), /* @__PURE__ */ snapp.create(ContactSection_default, null)), /* @__PURE__ */ snapp.create(Footer_default, null));
};
var SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App(), "replace");
/*! Bundled license information:

@fortawesome/free-solid-svg-icons/index.mjs:
@fortawesome/free-brands-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2025 Fonticons, Inc.
   *)
*/
