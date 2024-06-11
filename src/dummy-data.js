import { GoBook } from "react-icons/go";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { PiHeadphones } from "react-icons/pi";
import { SlNotebook } from "react-icons/sl";

import {
  BritishFlagIcon,
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  VocabIcon,
} from "./assets";

export const lessonsList = [
  {
    id: 1,
    title: "Speaking 101",
    icon: BritishFlagIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
  {
    id: 2,
    title: "New words",
    icon: VocabIcon,
    duration: "90 days daily",
    percentage: "60%",
  },
  {
    id: 3,
    title: "Speaking 101",
    icon: BritishFlagIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
  {
    id: 4,
    title: "New words",
    icon: VocabIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
  {
    id: 5,
    title: "Speaking 101",
    icon: BritishFlagIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
  {
    id: 6,
    title: "New words",
    icon: VocabIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
];

export const leaderBoardList = [
  {
    id: 1,
    avatar: Profile1,
    name: "Yasmine Lee",
    location: "Taiwan",
    score: 1230,
  },
  {
    id: 2,
    avatar: Profile2,
    name: "Guy Hawkins",
    location: "Spain",
    score: 1130,
  },
  {
    id: 3,
    avatar: Profile3,
    name: "Jason Ahmed",
    location: "Iran",
    score: 1085,
  },
  {
    id: 4,
    avatar: Profile4,
    name: "Emilia Sanchez",
    location: "Ecuador",
    score: 1067,
  },
];

export const weekStatList = [
  {
    dayOfWeek: "Mon",
    noOfDay: 2,
    isDone: false,
    isCurrent: false,
  },
  {
    dayOfWeek: "Tue",
    noOfDay: 3,
    isDone: true,
    isCurrent: false,
  },
  {
    dayOfWeek: "Wed",
    noOfDay: 4,
    isDone: true,
    isCurrent: false,
  },
  {
    dayOfWeek: "Thur",
    noOfDay: 5,
    isDone: false,
    isCurrent: true,
  },
  {
    dayOfWeek: "Fri",
    noOfDay: 6,
    isDone: false,
    isCurrent: false,
  },
  {
    dayOfWeek: "Sat",
    noOfDay: 7,
    isDone: false,
    isCurrent: false,
  },
  {
    dayOfWeek: "Sun",
    noOfDay: 8,
    isDone: false,
    isCurrent: false,
  },
];

export const statsList = [
  { id: 1, skill: "Reading", progress: "100%", icon: <GoBook size={28} /> },
  { id: 2, skill: "Writing", progress: "85%", icon: <><SlNotebook size={28} /> </> },
  {
    id: 3,
    skill: "Speaking",
    progress: "100%",
    icon: <HiOutlineSpeakerWave size={28} />,
  },
  {
    id: 4,
    skill: "Listening",
    progress: "70%",
    icon: <PiHeadphones size={28} />,
  },
];
