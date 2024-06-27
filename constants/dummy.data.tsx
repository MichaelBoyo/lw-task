import { BicepsFlexed, Calendar, User, Users } from "lucide-react";

export const MAIN_CARDS_DATA = [
  {
    title: "Workout Compliance",
    rating: "12/42",
    growth: "37.00%",
    color: "#00C7F2",
  },
  {
    title: "Task Compliance",
    rating: "42%",
    growth: "37.00%",
    color: "#17B26A",
  },
  {
    title: "Total Weight Loss",
    rating: "20 kg",
    growth: "37.00%",
    color: "#FFD700",
    sub: "Vs Previous Month",
  },
];

export const SECONDARY_CARDS_DATA = [
  {
    title: "New Clients",
    total: {
      value: 36,
      color: "green",
    },
    subTitle: "vs. previous month",
    rating: "20",
    growth: "12.89%",
    color: "#FBC62F",
    icon: User,
    iconOne: <Users color="#805F00" />,
    iconOneColor: "#FEF8E6",
    type: "icon",
    data: [
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
    ],
  },
  {
    title: "New Clients",
    subTitle: "vs. previous month",
    rating: "20",
    total: {
      value: 78,
      color: "red",
    },
    type: "text",
    growth: "12.89%",
    iconOne: <BicepsFlexed color="#006980" />,
    color: "#00C7F2",
    icon: User,
    iconOneColor: "#E5FAFF",
    data: [
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
    ],
  },
  {
    title: "New Clients",
    subTitle: "vs. previous month",
    rating: "20",
    total: {
      value: 90,
      color: "orange",
    },
    type: "checkbox",
    growth: "12.89%",
    color: "#695CFB",
    icon: Calendar,
    iconOne: <Calendar color="#0C027D" />,
    iconOneColor: "#E8E6FE",
    data: [
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
      {
        name: "Gay Hawkins",
        image: "/hello.png",
        time: "22 minutes ago",
      },
    ],
  },
];
