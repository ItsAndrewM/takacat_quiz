import alpineRockClimbing from "../assets/2alpine-rock-climbing-white_desktop_2x_desktop_0308.png";
import hikingTrekking from "../assets/3hiking-and-trekking-white_desktop_2x_desktop_0308.png";
import everyday from "../assets/6everyday-white_desktop_2x_desktop_0308.png";
import skiingSnowboarding from "../assets/4skiing-and-snowboarding-white_desktop_2x_desktop_0308.png";
import severe from "../assets/3severe-weather-white_desktop_2x_desktop_0308.png";
import cold from "../assets/6cold-white_desktop_2x_desktop_0308.png";
import variable from "../assets/2variable-weather-white_desktop_2x_desktop_0308.png";
import mild from "../assets/1mild-weather-white_desktop_2x_desktop_0308.png";
import insulatedJacket from "../assets/1insulated-jacket-white_desktop_2x_desktop_0308.png";
import shellJacket from "../assets/2shell-jacket-white_desktop_2x_desktop_0308.png";
import insulatedShell from "../assets/insulated-shell-jacket-black_desktop_2x_desktop_default_0330.png";
import helmetCompatible from "../assets/4helmet-compatible-white_desktop_2x_desktop_0308.png";
import dontMind from "../assets/5dont-mind-white_desktop_2x_desktop_0308.png";
import nonHelmetCompatible from "../assets/3non-helmet-compatible-white_desktop_2x_desktop_0308.png";
import noHood from "../assets/2no-hood-white_desktop_2x_desktop_0308.png";

export const quizAnswers = [
  {
    id: 0,
    choicesId: 0,
    questions: [
      {
        text: "Women's",
        description: "",
        id: 0,
        child: 1,
        choicesId: 0,
        _id: 0,
        multipleChoice: false,
      },
      {
        text: "Men's",
        description: "",
        id: 0,
        child: 1,
        choicesId: 0,
        _id: 1,
        multipleChoice: false,
      },
    ],
  },
  {
    id: 1,
    choicesId: 1,
    questions: [
      {
        text: "Insulated Jacket",
        description: "I need warmth – as a midlayer or standalone.",
        icon: insulatedJacket,
        id: 1,
        child: 2,
        _id: 2,
        multipleChoice: false,
      },
      {
        text: "Shell Jacket",
        description: "I need weather protection – wind, rain, or snow.",
        icon: shellJacket,
        id: 1,
        child: 11,
        _id: 3,
        multipleChoice: false,
      },
      {
        text: "Insulated Shell Jacket",
        description:
          "I need a jacket that combines warmth and weather protection in a single-layer solution.",
        icon: insulatedShell,
        id: 1,
        _id: 4,
        multipleChoice: false,
      },
    ],
  },
  {
    id: 2,
    choicesId: 2,
    questions: [
      {
        text: "Alpine & Rock Climbing",
        description: "",
        icon: alpineRockClimbing,
        child: 3,
        _id: 5,
        multipleChoice: true,
      },
      {
        text: "Hiking & Trekking",
        description: "",
        icon: hikingTrekking,
        child: 6,
        _id: 6,
        multipleChoice: true,
      },
      {
        text: "Skiing & Snowboarding",
        description: "",
        icon: skiingSnowboarding,
        child: 6,
        _id: 7,
        multipleChoice: true,
      },
      {
        text: "Everyday",
        description: "",
        icon: everyday,
        child: 7,
        _id: 8,
        multipleChoice: true,
      },
    ],
  },
  {
    id: 3,
    choicesId: 3,
    questions: [
      {
        text: "Mild",
        description: "",
        icon: mild,
        child: 5,
        _id: 9,
        multipleChoice: true,
      },
      {
        text: "Variable",
        description: "",
        icon: variable,
        child: 8,
        _id: 10,
        multipleChoice: true,
      },
      {
        text: "Severe",
        description: "",
        icon: severe,
        child: 9,
        _id: 11,
        multipleChoice: true,
      },
      {
        text: "Cold",
        description: "",
        icon: cold,
        child: 10,
        _id: 12,
        multipleChoice: true,
      },
    ],
  },
  {
    id: 4,
    choicesId: 2,
    questions: [
      {
        text: "Alpine & Rock Climbing",
        description: "",
        icon: alpineRockClimbing,
        _id: 13,
        multipleChoice: true,
      },
      {
        text: "Hiking & Trekking",
        description: "",
        icon: hikingTrekking,
        _id: 14,
        multipleChoice: true,
      },
      {
        text: "Skiing & Snowboarding",
        description: "",
        icon: skiingSnowboarding,
        _id: 15,
        multipleChoice: true,
      },
      {
        text: "Everyday",
        description: "",
        icon: everyday,
        _id: 16,
        multipleChoice: true,
      },
    ],
  },
  {
    id: 5,
    choicesId: 4,
    questions: [
      {
        text: "Non-Helmet Compatible",
        description: "",
        icon: nonHelmetCompatible,
        _id: 17,
        multipleChoice: false,
      },
      {
        text: "Helmet Compatible",
        description: "",
        icon: helmetCompatible,
        _id: 18,
        multipleChoice: false,
      },
      {
        text: "Don't Mind",
        description: "",
        icon: dontMind,
        _id: 19,
        multipleChoice: false,
      },
    ],
  },
  {
    id: 6,
    choicesId: 3,
    questions: [
      {
        text: "Mild",
        description: "",
        icon: mild,
        choicesId: 3,
        _id: 20,
        multipleChoice: true,
      },
      {
        text: "Variable",
        description: "",
        icon: variable,
        _id: 21,
        multipleChoice: true,
      },
      {
        text: "Cold",
        description: "",
        icon: cold,
        _id: 22,
        multipleChoice: true,
      },
    ],
  },
  {
    id: 7,
    choicesId: 3,
    questions: [
      {
        text: "Variable",
        description: "",
        icon: variable,
        _id: 23,
        multipleChoice: true,
      },
      {
        text: "Cold",
        description: "",
        icon: cold,
        _id: 24,
        multipleChoice: true,
      },
    ],
  },
  {
    id: 8,
    choicesId: 4,
    questions: [
      {
        text: "Non-Helmet Compatible",
        description: "",
        icon: nonHelmetCompatible,
        _id: 25,
        multipleChoice: false,
      },
      {
        text: "Helmet Compatible",
        description: "",
        icon: helmetCompatible,
        _id: 26,
        multipleChoice: false,
      },
      {
        text: "Don't Mind",
        description: "",
        icon: dontMind,
        _id: 27,
        multipleChoice: false,
      },
      {
        text: "No Hood",
        description: "",
        icon: noHood,
        _id: 28,
        multipleChoice: false,
      },
    ],
  },
  {
    id: 9,
    choicesId: 4,
    questions: [
      {
        text: "Helmet Compatible",
        description: "",
        icon: helmetCompatible,
        _id: 29,
        multipleChoice: false,
      },
      {
        text: "Don't Mind",
        description: "",
        icon: dontMind,
        _id: 30,
        multipleChoice: false,
      },
    ],
  },
  {
    id: 10,
    choicesId: 4,
    questions: [
      {
        text: "Non-Helmet Compatible",
        description: "",
        icon: nonHelmetCompatible,
        _id: 31,
        multipleChoice: false,
      },
      {
        text: "Helmet Compatible",
        description: "",
        icon: helmetCompatible,
        _id: 32,
        multipleChoice: false,
      },
      {
        text: "Don't Mind",
        description: "",
        icon: dontMind,
        _id: 33,
        multipleChoice: false,
      },
      {
        text: "No Hood",
        description: "",
        icon: noHood,
        _id: 34,
        multipleChoice: false,
      },
    ],
  },
  {
    id: 11,
    choicesId: 2,
    questions: [
      {
        text: "Multi-use",
        description: "",
        icon: "",
        _id: 32,
        child: "submit",
        multipleChoice: true,
      },
      {
        text: "Alpine & Rock Climbing",
        description: "",
        icon: "",
        _id: 33,
        child: 12,
        multipleChoice: true,
      },
      {
        text: "Hiking & Trekking",
        description: "",
        icon: "",
        _id: 34,
        child: 12,
        multipleChoice: true,
      },
      {
        text: "Skiing & Snowboarding",
        description: "",
        icon: "",
        _id: 35,
        child: "submit",
        multipleChoice: true,
      },
      {
        text: "Trail Running",
        description: "",
        icon: "",
        _id: 36,
        child: 13,
        multipleChoice: true,
      },
      {
        text: "Everyday",
        description: "",
        icon: "",
        _id: 37,
        child: 12,
        multipleChoice: true,
      },
    ],
  },
  {
    id: 12,
    choicesId: 3,
    questions: [
      {
        text: "Mild",
        description: "",
        icon: "",
        _id: 38,
        child: 14,
        multipleChoice: true,
      },
      {
        text: "Variable",
        description: "",
        icon: "",
        _id: 39,
        child: 13,
        multipleChoice: true,
      },
      {
        text: "Severe",
        description: "",
        icon: "",
        _id: 40,
        child: 12,
        multipleChoice: true,
      },
      {
        text: "Windy",
        description: "",
        icon: "",
        _id: 41,
        child: 12,
        multipleChoice: true,
      },
      {
        text: "Wet",
        description: "",
        icon: "",
        _id: 42,
        child: 12,
        multipleChoice: true,
      },
    ],
  },
  {
    id: 13,
    choicesId: 5,
    questions: [
      {
        text: "Waterproof",
        description: "Durable GORE-TEX jackets that shed rain, snow, and wind.",
        icon: "",
        _id: 50,
        child: 17,
        multipleChoice: false,
      },
      {
        text: "Breathable",
        description:
          "Weather-resistant jackets with higher levels of breathability.",
        icon: "",
        _id: 51,
        child: 17,
        multipleChoice: false,
      },
      {
        text: "Not sure",
        description: "",
        icon: "",
        _id: 52,
        child: 18,
        multipleChoice: false,
      },
    ],
  },
  {
    id: 14,
    choicesId: 5,
    questions: [
      {
        text: "Breathable",
        description:
          "Weather-resistant jackets with higher levels of breathability.",
        icon: "",
        _id: 43,
        child: "submit",
        multipleChoice: false,
      },
      {
        text: "Not sure",
        description: "",
        icon: "",
        _id: 44,
        child: 15,
        multipleChoice: false,
      },
    ],
  },
  {
    id: 15,
    choicesId: 4,
    questions: [
      {
        text: "Non Helmet Compatible",
        description: "",
        icon: "",
        _id: 45,
        child: 16,
        multipleChoice: false,
      },
      {
        text: "Helmet Compatible",
        description: "",
        icon: "",
        _id: 46,
        child: "submit",
        multipleChoice: false,
      },
      {
        text: "Don't Mind",
        description: "",
        icon: "",
        _id: 47,
        child: 16,
        multipleChoice: false,
      },
    ],
  },
  {
    id: 16,
    choicesId: 6,
    questions: [
      {
        text: "Fitted",
        description: "",
        icon: "",
        _id: 48,
        child: "submit",
        multipleChoice: false,
      },
      {
        text: "Regular",
        description: "",
        icon: "",
        _id: 49,
        child: "submit",
        multipleChoice: false,
      },
    ],
  },
  {
    id: 17,
    choicesId: 4,
    questions: [
      {
        text: "Helmet Compatible",
        description: "",
        icon: "",
        _id: 53,
        child: 16,
        multipleChoice: false,
      },
      {
        text: "Don't Mind",
        description: "",
        icon: "",
        _id: 54,
        child: 16,
        multipleChoice: false,
      },
    ],
  },
];
