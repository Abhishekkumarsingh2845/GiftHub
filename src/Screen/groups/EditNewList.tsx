import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import FormInput from "../../components/FormInput";
import LongFormInput from "../../components/LongFormInput";
import ImageUploadBox from "../../components/ImageUploadBox";
import MembersCard from "../../components/MembersCard";
import InviteMemberCard from "../../components/InviteMemberCard";
import EmailInvite from "../../components/EmailInvite";
import PrimaryButton from "../../components/PrimaryButton";
import DeleteGroupButton from "../../components/DeleteGroupButton";
import { scaleHeight, scaleWidth } from "../../utlis/responsive";

const EditNewList: React.FC = () => {
  return (
    <Wrapper>
        <Header title="Edit Group"/>
         <FormInput label={'Group Name*'} placeholder="Family Wishlist" />
      <FormInput label={'Event Date'} placeholder="August 6, 2025" />
      <LongFormInput label={'Description'}  placeholder='Birthday and holiday gift ideas for everyone'/>
      <ImageUploadBox />
      <MembersCard />
      <InviteMemberCard />
      <EmailInvite heading='Email / Phone Number' />
      <EmailInvite heading='Name'  buttonText={"Add"}/>
 <DeleteGroupButton />
    </Wrapper>
  );
};

export default EditNewList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f9f9fb",
    padding: scaleWidth(16),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: scaleHeight(12),
    borderBottomWidth: scaleWidth(1),
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: scaleWidth(20),
    fontFamily: "System",
    color: "#222",
  },
  headerAction: {
    fontSize: scaleWidth(16),
    color: "#2F80ED",
    fontFamily: "System",
  },
  body: {
    marginTop: scaleHeight(20),
  },
  text: {
    fontSize: scaleWidth(16),
    color: "#333",
    fontFamily: "System",
  },
});
