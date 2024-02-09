import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface TitleProps {
    title: string;
  }
export const Title = ({title}: TitleProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
      color: '#F7F7F7',
      fontWeight: 'bold',
      fontFamily: 'serif',
      fontSize: 26,
      paddingHorizontal: 30,
      paddingVertical: 60,
    },
  });
