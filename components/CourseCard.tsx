import React from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, View } from 'react-native';
import CardContent from './CardContent';
import { CourseCardProps } from '../types/CourseCardTypes';

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  price,
  backgroundImage,
  backgroundColor,
  hours,
  people,
  rating,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.card, { backgroundColor: backgroundImage ? 'transparent' : backgroundColor }]}>
    {backgroundImage ? (
      <ImageBackground
        source={backgroundImage}
        style={[styles.cardBackground, { ...StyleSheet.absoluteFillObject }]}
        imageStyle={{ borderRadius: 16 }}>
        <View style={styles.overlay}>
          <CardContent title={title} price={price} hours={hours} people={people} rating={rating} />
        </View>
      </ImageBackground>
    ) : (
      <CardContent title={title} price={price} hours={hours} people={people} rating={rating} />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 223,
    height: 180,
    borderRadius: 16,
    marginRight: 16,
    padding: 12,
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative',
  },
  cardBackground: {
    width: 'auto',
    height: 'auto',
    justifyContent: 'flex-end',
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
  },
});

export default CourseCard;
