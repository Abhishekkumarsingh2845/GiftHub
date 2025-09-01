import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { Fonts } from '../utlis/Fonts';
import { colors } from '../utlis/colors';

interface SaveButtonProps {
  cancelText?: string;
  saveText?: string;
  onCancel?: (event: GestureResponderEvent) => void;
  onSave?: (event: GestureResponderEvent) => void;
}

export default function SaveButton({
  cancelText = 'Cancel',
  saveText = 'Save Changes',
  onCancel,
  onSave,
}: SaveButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deleteBtn} onPress={onCancel}>
        <Text style={styles.deleteText}>{cancelText}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
        <Text style={styles.saveText}>{saveText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(20),
  },
  deleteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3B82F6',
    backgroundColor: 'transparent',
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(20),
    borderRadius: scaleWidth(20),
    width: '48%',
  },
  deleteText: {
    color: '#3B82F6',
    fontSize: scaleWidth(12),
    fontFamily: Fonts.ralewayMedium,
  },
  saveBtn: {
    backgroundColor: colors.primary,
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(24),
    borderRadius: scaleWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
  saveText: {
    color: 'white',
    fontSize: scaleWidth(14),
    fontFamily: Fonts.ralewayMedium,
  },
});
