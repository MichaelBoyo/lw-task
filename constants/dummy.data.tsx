import { Calendar } from "@/components/icons/calendar";
import { Muscle } from "@/components/icons/muscle";
import { BicepsFlexed, Users, UsersIcon } from "lucide-react";

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
    icon: <UsersIcon />,
    iconOne: <Users color="#805F00" />,
    iconOneColor: "#FEF8E6",
    type: "icon",
    data: [
      {
        name: "Guy Hawkins",
        image: "/images/person_1.svg",
        time: "22 minutes ago",
      },
      {
        name: "Asta Majid",
        image: "/images/person_2.svg",
        time: "22 minutes ago",
      },
      {
        name: "Robert Fox",
        image: "/images/person_3.svg",
        time: "22 minutes ago",
      },
      {
        name: "Annette Black",
        image: "/images/person_4.svg",
        time: "22 minutes ago",
      },
    ],
  },
  {
    title: "Classes for Today",
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
    icon: <Muscle />,
    iconOneColor: "#E5FAFF",
    data: [
      {
        name: "Yoga Class",
        image: "/images/yoga.svg",
        time: "60 minutes class",
      },
      {
        name: "Pilates Class",
        image: "/images/pilates.svg",
        time: "60 minutes class",
      },
      {
        name: "Cycle Class",
        image: "/images/cycle.svg",
        time: "60 minutes class",
      },
      {
        name: "Cardio Class",
        image: "/images/cardio.svg",
        time: "60 minutes class",
      },
    ],
  },
  {
    title: "Appointments for Today",
    subTitle: "vs. previous shift",
    rating: "20",
    total: {
      value: 90,
      color: "orange",
    },
    type: "checkbox",
    growth: "12.89%",
    color: "#695CFB",
    icon: <Calendar />,
    iconOneColor: "#E8E6FE",
    data: [
      {
        name: "Guy Hawkins",
        image: "/images/person_1.svg",
        time: "22 minutes ago",
      },
      {
        name: "Asta Majid",
        image: "/images/person_2.svg",
        time: "22 minutes ago",
      },
      {
        name: "Robert Fox",
        image: "/images/person_3.svg",
        time: "22 minutes ago",
      },
      {
        name: "Annette Black",
        image: "/images/person_4.svg",
        time: "22 minutes ago",
      },
    ],
  },
];
