import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native"

// Components


// SVGs (parent me pass karoge)

import EditIcon from "../../assets/images/EditButton.svg";
import CalendarIcon from "../../assets/images/Calendar.svg";

// import AddIcon from "../assets/images/svg.svg";
import RecentActivity from "../../components/RecentActivity";
import { scaleHeight, scaleWidth } from "../../utlis/responsive";
import { Fonts } from "../../utlis/Fonts";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import { Images } from "../../assets/images";

const GroupMyList: React.FC = () => {
  return (
    <Wrapper backgroundImage={Images.backgroudShadow}
    >
         
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
       <Header  title=" Group Share"/>
      {/* Title */}


      {/* Create Group Card */}
      <TouchableOpacity style={styles.createCard}>
        <View>
          <Text style={styles.createTitle}>Create a new group</Text>
          <Text style={styles.createSubtitle}>
            Start sharing with friends & family
          </Text>
        </View>
       
      </TouchableOpacity>

      {/* Activity Logs */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <View style={styles.activityCard}>
        <Text style={styles.activityText}>
          Sarah added an item to your list
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Wireless Headphones</Text>
        </View>
        <Text style={styles.timeText}>Today, 10:23 AM</Text>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.activityText}>Mike joined “Family Wishlist”</Text>
        <Text style={styles.timeText}>Yesterday, 3:45 PM</Text>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.activityText}>
          You created a new group “Travel Planning”
        </Text>
        <Text style={styles.timeText}>June 2, 2025</Text>
      </View>

      {/* Recent Lists */}
      <RecentActivity
        title="Family Wishlist"
        subtitle="Birthday and holiday gift ideas for everyone"
        createdDate="May 15, 2025"
        members={[
          { uri: "https://randomuser.me/api/portraits/women/1.jpg" },
          { uri: "https://randomuser.me/api/portraits/men/2.jpg" },
          { uri: "https://randomuser.me/api/portraits/women/3.jpg" },
        ]}
        extraMembers={2}
        showSeeAll={true}
        onSeeAll={() => console.log("See all pressed")}
        EditIcon={EditIcon}
        CalendarIcon={CalendarIcon}
        showTitle
     
      />

      <View style={{ marginTop: scaleHeight(14) }}>
        <RecentActivity
          title="Travel Planning"
          subtitle="Summer vacation items and ideas"
          createdDate="June 2, 2025"
          members={[
            { uri: "https://randomuser.me/api/portraits/women/4.jpg" },
            { uri: "https://randomuser.me/api/portraits/men/5.jpg" },
            { uri: "https://randomuser.me/api/portraits/women/6.jpg" },
          ]}
          extraMembers={2}
          showSeeAll={false}
          EditIcon={EditIcon}
          CalendarIcon={CalendarIcon}
          
    
        />
      </View>
    </ScrollView>
    </Wrapper>
  );
};

export default GroupMyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleWidth(16),
    backgroundColor: "#F9FAFB",
  },
  title: {
    fontSize: scaleWidth(20),
    fontFamily: Fonts.ralewayBold,
    textAlign: "center",
    marginVertical: scaleHeight(12),
    color: "#111827",
  },
  createCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: scaleWidth(12),
    padding: scaleWidth(14),
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    marginBottom: scaleHeight(16),
  },
  createTitle: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewayBold,
    color: "#111",
  },
  createSubtitle: {
    fontSize: scaleWidth(13),
    color: "#6B7280",
    fontFamily: Fonts.ralewayMedium,
  },
  sectionTitle: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewayBold,
    color: "#111",
    marginBottom: scaleHeight(10),
  },
  activityCard: {
    backgroundColor: "#fff",
    borderRadius: scaleWidth(12),
    padding: scaleWidth(14),
    marginBottom: scaleHeight(12),
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  activityText: {
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayMedium,
    color: "#111827",
    marginBottom: scaleHeight(6),
  },
  badge: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: scaleWidth(8),
    paddingVertical: scaleHeight(4),
    borderRadius: 6,
    marginBottom: scaleHeight(6),
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayMedium,
    color: "#374151",
  },
  timeText: {
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayMedium,
    color: "#6B7280",
  },
});
