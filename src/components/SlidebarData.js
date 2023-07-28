import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <AiIcons.AiFillHome />,
    path: '/orders',
    cName: "nav-text"
  },
  {
    title: "Tasks",
    path: "/products",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Projects",
    path: "/reports",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Team Members",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {

    title: "Message",
    path: "/chat",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },



  {
    title: "Feedback",
    icon: <IoIcons.IoMdPeople />,
    path: '/Feedback',
    cName: "nav-text"
  },
  {
    title: "LogOut",
    icon: <AiIcons.AiFillHome />,
    path: '/HARISH',
    cName: "nav-text"
  }
  
  
  
];
