import React from 'react';
import { ScrollView } from 'react-native';
import Home from '../../components/layout/home';

export default function Main() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <Home />
    </ScrollView>
  );
}