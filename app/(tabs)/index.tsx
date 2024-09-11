import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Stack } from 'expo-router';
import SectionTitle from 'components/SectionTitle';
import CourseCard from 'components/CourseCard';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <ImageBackground
              source={{ uri: 'https://github.com/pedrogiampietro.png' }}
              style={styles.avatar}
              imageStyle={styles.avatarImage}
            />
            <View style={styles.onlineIndicator} />
          </View>
          <Text style={styles.greeting}>Hello, Jane</Text>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.filterContainer}>
          {['UX/UI', 'Python', 'Marketing', 'Game dev', 'Coding', 'Java'].map((category) => (
            <TouchableOpacity key={category} style={styles.filterButton}>
              <Text style={styles.filterButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <SectionTitle title="Courses" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CourseCard
            title="UX/UI designer"
            price="800$"
            backgroundImage={require('../../assets/card-course-1.png')}
            hours="147 Hours"
            people="10k Users"
            rating="4.7"
          />
          <CourseCard
            title="SMM & Marketing"
            price="400$"
            backgroundColor="#FF9061"
            hours="125 Hours"
            people="5k Users"
            rating="4.9"
          />
        </ScrollView>

        <SectionTitle title="Lectures" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CourseCard
            title="Figma components"
            price="100$"
            backgroundColor="#D1C4E9"
            hours="26 Hours"
            people="8k Users"
            rating="4.9"
          />
          <CourseCard
            title="Design portfolio + 2 case"
            price="300$"
            backgroundColor="#FFD700"
            hours="10 Hours"
            people="2k Users"
            rating="5.0"
          />
        </ScrollView>

        <SectionTitle title="On Top" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CourseCard
            title="Adobe Full course"
            price="500$"
            backgroundColor="#000000"
            hours="200 Hours"
            people="15k Users"
            rating="4.5"
          />
          <CourseCard
            title="JAVA Developer"
            price="900$"
            backgroundColor="#C1FF72"
            hours="300 Hours"
            people="7k Users"
            rating="4.8"
          />
        </ScrollView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  onlineIndicator: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: 'green',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#1A1A1A',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#2D2D2D',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#2D2D2D',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  filterButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  avatarImage: {
    borderRadius: 25,
  },
});
