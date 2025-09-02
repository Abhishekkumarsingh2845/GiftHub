import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { scaleHeight, scaleWidth } from '../utlis/responsive';
import { colors } from '../utlis/colors';
import { Fonts } from '../utlis/Fonts';
import Back from '../assets/images/button.svg';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title?: string;
  onBack?: () => void;
  showBack?: boolean;

  avatar?: string | React.ReactNode; 
  name?: string;

  showBell?: boolean;
  bellIcon?: string | React.ReactNode;
  onBellPress?: () => void;

  showShare?: boolean;  // ✅ new prop
  shareIcon?: string | React.ReactNode;
  onSharePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBack,
  showBack = false,
  avatar,
  name,
  showBell = false,
  bellIcon,
  onBellPress,
  showShare = false,
  shareIcon,
  onSharePress,
}) => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      {/* 🔙 Back */}
      {showBack && (
        <TouchableOpacity style={styles.backButton}onPress={onBack || (() => navigation.goBack())}>
          <Back width={scaleWidth(20)} height={scaleWidth(20)} />
        </TouchableOpacity>
      )}

      {/* 👤 Avatar + Name */}
      {avatar && name ? (
        <View style={styles.profileRow}>
          {typeof avatar === 'string' ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            avatar
          )}
          <Text style={styles.greeting}>Hello {name}</Text>
        </View>
      ) : (
        <Text style={[styles.title, showBack && { marginLeft: scaleWidth(10) }]}>
          {title}
        </Text>
      )}

      {/* 🔔 Bell + 📤 Share */}
      <View style={styles.rightIcons}>
        {showBell && (
          <TouchableOpacity style={styles.iconButton} onPress={onBellPress}>
            {bellIcon ? (
              typeof bellIcon === 'string' ? (
                <Image source={{ uri: bellIcon }} style={styles.iconImage} />
              ) : (
                bellIcon
              )
            ) : (
              <Text style={{ fontSize: scaleWidth(20) }}>🔔</Text>
            )}
          </TouchableOpacity>
        )}

        {showShare && (
          <TouchableOpacity style={styles.iconButton} onPress={onSharePress}>
            {shareIcon ? (
              typeof shareIcon === 'string' ? (
                <Image source={{ uri: shareIcon }} style={styles.iconImage} />
              ) : (
                shareIcon
              )
            ) : (
              <Text style={{ fontSize: scaleWidth(20) }}>📤</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scaleHeight(12),
    paddingHorizontal: scaleWidth(10),
    marginTop: 20,
  },
  backButton: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(20),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: scaleWidth(18),
    fontFamily: Fonts.ralewayRegular,
    color: colors.black,
    marginRight: scaleWidth(40),
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: scaleWidth(36),
    height: scaleWidth(36),
    borderRadius: scaleWidth(18),
    marginRight: scaleWidth(12),
  },
  greeting: {
    fontSize: scaleWidth(16),
    fontFamily: Fonts.ralewayRegular,
    color: colors.black,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  iconButton: {
    padding: scaleWidth(8),
    marginLeft: scaleWidth(6),
  },
  iconImage: {
    width: scaleWidth(24),
    height: scaleWidth(24),
    resizeMode: 'contain',
  },
});
