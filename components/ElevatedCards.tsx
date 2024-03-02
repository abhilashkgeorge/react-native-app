import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text style={{color: 'red'}}> TAP </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text> Me </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text> to </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text> Scroll </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text> Us </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text> Here </Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
            <Text> 😊 </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    }, 
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 15,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100, 
        height: 100,
        borderRadius: 4, 
        margin: 8,
    }, 
    elevatedCard: {
        backgroundColor: '#CAD5E2',
        elevation: 8,
        shadowOffset: {
            width: 21, 
            height: 25,
        },
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 25,

    }
})