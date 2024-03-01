import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                <Text> RED</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text> BLUE </Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text> Green </Text>
            </View>
            <View style={[styles.card, styles.cardFour]}>
                <Text> Yellow </Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24, 
        fontWeight: 'bold', 
        paddingHorizontal: 15
    }, 
    container: { 
        flex: 1, 
        flexDirection: 'row',
        padding: 8,
        
    },
    card: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        height: 100, 
        width: 100,
        borderRadius: 5, 
        margin: 7

    }, 
    cardOne: {
        backgroundColor: 'red'

    }, 
    cardTwo: {
        backgroundColor: 'blue'

    }, 
    cardThree: {
        backgroundColor: 'green'

    }, 
    cardFour: {
        backgroundColor: 'yellow'

    }, 
})