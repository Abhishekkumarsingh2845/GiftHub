import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import { colors } from '../utlis/colors';

interface EmailInviteProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  heading?: string; // ✅ Dynamic heading (default: "Email Address")
  placeholder?: string; // ✅ Dynamic placeholder (default: "Email Address")
  buttonText?: string; // ✅ Dynamic button text (default: "Send Invite")
}

const EmailInvite: React.FC<EmailInviteProps> = ({
  value,
  onChangeText,
  onSend,
  heading = 'Email Address',
  placeholder = 'Email Address',
  buttonText = 'Send Invite',
  ...textInputProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#888"
          value={value}
          onChangeText={onChangeText}
          keyboardType="email-address"
          {...textInputProps}
        />

        <TouchableOpacity onPress={onSend}>
          <Text style={styles.sendText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailInvite;

const styles = StyleSheet.create({
  container: {
    marginVertical: scaleHeight(10),
  },
  heading: {
    fontSize: scaleWidth(15),
    fontFamily: Fonts.ralewayMedium,
    color: '#444',
    marginBottom: scaleHeight(8),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: scaleWidth(12),
    paddingHorizontal: scaleWidth(14),
    paddingVertical: scaleHeight(10),
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    fontSize: scaleWidth(15),
    color: '#222',
    fontFamily: Fonts.ralewayRegular,
  },
  sendText: {
    fontSize: scaleWidth(15),
fontFamily:Fonts.ralewayRegular,
    color: colors.primary, 
  },
});
