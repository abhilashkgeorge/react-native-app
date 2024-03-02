import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactLists() {
  const contacts = [
    {
        uid: 1,
        name: 'Abhilash Knox George',
        status: 'Just an ordinary person',
        imageUrl: 'https://www.abhilashkgeorge.com/img/main.png'
    },
    {
        uid: 2,
        name: 'Karam Lakshman',
        status: 'Just an ordinary person but is also a founder of the company',
        imageUrl: 'https://www.abhilashkgeorge.com/img/main.png'
    },
    {
        uid: 3, 
        name: 'Shubhendu Sharma',
        status: 'Just an ordinary person and is also a founder of the company',
        imageUrl: 'https://www.abhilashkgeorge.com/img/main.png'
    },
    {
        uid: 4, 
        name: 'Chanveer',
        status: 'Just an ordinary person and is also a key developer of the company',
        imageUrl: 'https://www.abhilashkgeorge.com/img/main.png'
    }
  ]
  
    return (
    <View>
      <Text style={styles.headingText}>ContactLists</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image source={{
                    uri: imageUrl
                }}
                style={styles.userImage}/>
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>

            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    headingText: {
        fontSize: 24, 
        fontWeight: 'bold', 
        paddingHorizontal: 15,
    },
    userCard: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: '#8D3DAF',
        borderRadius: 8,
        padding: 4,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60 /2,
        marginRight: 16,
        marginBottom: 4,
    },
    userName: {
        fontSize: 16, 
        fontWeight: '800',
        color: 'black'
    }, 
    userStatus: {
        fontSize: 13

    }
})