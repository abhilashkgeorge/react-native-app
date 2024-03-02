import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.cardElevated, styles.card]}>
                <Image
                    source={{
                        uri: 'https://imgs.search.brave.com/cWYNw0GyHwdKk7LwbDCQvhlaU2w_81meITJGxw-VNYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}> Asthetic </Text>
                    <Text style={styles.cardLabel}> Liquid Absorption </Text>
                    <Text style={styles.cardDescription}> Purple Pinkish Liquid Resonnace </Text>
                    <Text style={styles.cardFooter}> If you neeed images that are amazing like the one you see above , give yourself some justice and buy a dslr camera for you own use. Make it professional when you start using it </Text>
                </View>
                <View />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },

    headingText: {
        fontSize: 24, 
        fontWeight: 'bold', 
        paddingHorizontal: 15,
    },

    cardElevated: {

    }, 
    
    card : {

    },

    cardImage: {
        height: 400, 
        width : '100%',
    }, 
    
    cardBody: {
    }, 

    cardTitle: {}, 
    cardDescription: {}, 
    cardLabel: {}, 
    cardFooter: {}, 
})