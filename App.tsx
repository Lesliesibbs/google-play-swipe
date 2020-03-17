/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Alert,
  TouchableOpacity,
  NativeSyntheticEvent, NativeTouchEvent, ImageSourcePropType, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import data, { DataType, ContentType } from './data';
import PlaySwipe, { SectionType } from './PlaySwipe';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <PlaySwipe
        content={data}
        header={{
          headerTitle: {
            content: data.headerTitle,
            styles: {
              fontSize: 18,
              fontWeight: '400',
            },
          },
          headerSubTitle: {
            content: data.headerSubtitle,
            styles: {
              fontSize: 14,
              fontWeight: '200',
            },
          },
          headerButton: (
            <TouchableOpacity
              onPress={() => Alert.alert('Discover more!')}
            >
              <Ionicons name="md-arrow-forward" size={28} color="#58646e" />
            </TouchableOpacity>
          ),
          headerStyles: {
            flex: 1,
            padding: 15,
          },
        }}
        contentImage={{
          contentImageSource: { uri: 'https://assets-ouch.icons8.com/preview/408/f73e918d-4493-4902-9d53-6facb9dc6b27.png' },
          contentImageStyles: {
            width: 200,
            height: 265,
          },
          contentImageContainerStyles: {
            position: 'absolute',
            top: 50,
            right: 0,
          },
        }}
        backgroundGradient={{
          gradientColors: ['#019ae6', '#33afed'],
          backgroundGradientStyle: { flex: 0.5 },
        }}
        sectionItems={data.data.map((item: ContentType, index): SectionType => (
          {
            title: item.title,
            description: item.description,
            imageSource: {
              uri: item.imageSource,
              cache: 'only-if-cached',
            },
            style: {
              sectionStyle: index === 0 ? { marginLeft: 200 } : null,
              sectionImageStyle: {
                width: 125,
                height: 200,
                borderRadius: 10,
              },
              sectionTitleStyle: {
                fontSize: 14,
                fontWeight: '300',
                paddingTop: 15,
              },
              sectionSubTitleStyle: {
                fontSize: 13,
                fontWeight: '200',
                color: '#3c709d',
              },
            },
            key: item.title,
            onClick: () => Alert.alert(item.title),
          }
        ))}
        scrollViewStyles={{
          backgroundColor: 'transparent',
          paddingTop: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  statusBar: {
    height: Constants.statusBarHeight,
  },
});
