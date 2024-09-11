import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Badge from './Badge';
import { CourseCardProps } from '../types/CourseCardTypes';

const CardContent: React.FC<
  Pick<CourseCardProps, 'title' | 'price' | 'hours' | 'people' | 'rating'>
> = ({ title, price, hours, people, rating }) => (
  <View style={{ flex: 1, justifyContent: 'space-between' }}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.likeButton}>❤️</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.cardPrice}>{price}</Text>
    <View>
      <View style={styles.badgeContainer}>
        <Badge text={`${rating} ★`} />
        <Badge text={hours} />
        <Badge text={people} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  likeButton: {
    fontSize: 20,
    color: '#FF0000',
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardContent;
