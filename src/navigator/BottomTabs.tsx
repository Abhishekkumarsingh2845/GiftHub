import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../Screen/Home/HomeScreen";
import MyList from "../Screen/list/MyList";
import SearchScreen from "../Screen/Home/SearchScreen";

import HomeIcon from "../assets/images/HomeIcon.svg";
import ListIcon from "../assets/images/ListIcon.svg";
import SearchIcon from "../assets/images/SearchIcon.svg";
import GroupIcon from "../assets/images/GroupIcon.svg";

import { colors } from "../utlis/colors";
import GroupMyList from "../Screen/groups/GroupMyList";
import { Fonts } from "../utlis/Fonts";

const Tab = createBottomTabNavigator();

const ICON_SIZE = 24;

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#6B7280",
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: Fonts.ralewayMedium,
        },
        tabBarIcon: ({ focused }) => {
          const iconColor = focused ? colors.primary : "#6B7280";

          switch (route.name) {
            case "Home":
              return (
                <HomeIcon
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  fill={iconColor}
                  stroke={iconColor}
                />
              );
            case "Lists":
              return (
                <ListIcon
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  fill={iconColor}
                  stroke={iconColor}
                />
              );
            case "Search":
              return (
                <SearchIcon
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  fill={iconColor}
                  stroke={iconColor}
                />
              );
            case "Groups":
              return (
                <GroupIcon
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  fill={iconColor}
                  stroke={iconColor}
                />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Lists" component={MyList} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Groups" component={GroupMyList} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
