import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BadgeProps } from '../types/CourseCardTypes';

const Badge: React.FC<BadgeProps> = ({ text }) => (
  <View style={styles.badge}>
    <Text style={styles.badgeText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#2D2D2D',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginRight: 6,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default Badge;
