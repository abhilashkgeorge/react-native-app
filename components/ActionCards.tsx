import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(url: string) {
        Linking.openURL(url)
    }
    return (
        <View>
            <Text style={styles.headingText}>ActionCards</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}> What's new in JS - ES21 </Text>
                </View>
                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQABAwIGB//EAEEQAAIBAgQDBAcHAgQFBQAAAAECAwQRABIhMQVBURMiYXEUMoGRocHwBiNCUrHR4TNiFUNywiQlgrLSNDVTY3P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQACAgICAgEDBQAAAAAAAAAAAQIRAyExQRIykRMiYQQUUWJx/9oADAMBAAIRAxEAPwD5URdGAAvl5HBstShapVgTZj+I9TgVkKhiIwqgd9D+A/ti3ndBIoCDMoN7D4Y6TAzhv6XIx1JYEe1XwO7AzzZkBJmYgHbf6+OLhYI0pJKk2NxqQLML/EY7SneeugSyrJLIMwvpe41HnfE90acIjFfv4oxcLFqRzPaISfh8Mbdn3M6HYCzLup+RxTU0kddOi92SGVu+OXe3x6DhnCoK2ilkpCgq4x9/SNa2X86fMcr32xcMTejPJNR2LpW9Mo5Kn1KylQZ2XZ1PP9fdgCQSSasGYFd2udP3wfTx5KTjAtYCKPS/g+AvQe0Eb5lAdQeWg26+eJkmnTHdqzinjLTLHImqoXQ87AajDkcNi4SrGsiOSOMSEE/1bi425YU8PpjT1q6hiYX0uNBbDrj0z1ccyAEsYIkA8lt8sSqXJW+jzvGo3Wv7N0yta+XaxPh7sCoksyRiJDJIB2eUDM176WHwww4sJG4lFLKpu6XudL64w4bI9NXSSIcjdixFjfENFo3oaNlhZWkWMWu7Eiy9fbjitrO1jFLTDLTJr4yHqcb8TViJrG3ca425jAohtRxSRQl2ZiDYXPQfG2LTpUhMqlAWphBIVe8Lk6C4PPzxzLFGIgGzCVUII/KRyPsvjmQyFA3YXQqCWym2p6+0Y67OeslpoqeNpZpI1VVXUt4e7E8gjCrB9HptPw4Hm0KX/IMF1cQQKjun3V0Yq18xGlgefngV7yuAo8AB0GIYzHEwSIlsL4mAZ7WnSjNGUqYgmhCTqNVuLWbqv6Y8zOHiZoZkAZALi+/iOuD4OKulElMwV6cG6sBqn8fpjKqjWaO5YgW0a3q/xjqnNNKjFQdi6PvTDLYHKwuD1U/rgmd2heGZLBg11J5GwtgOZGjciRQCBff4jBkNXGyPHVAAWsTuD7uf1pjHu0WEpOZZHmUi7MWN20Vm5N/aeuDaeoalyTQSFJotAR3WFuR6j6OAqQ8LSUMJ2Xu2N0cix3Bw5l4JBJSrW8KqI5ozYFlzBVb8pVtR7huDYgkjbH5XZEvGqZvxFoZ6SuqUhEclRRwTSKp0zMrnQYVKrGlWLIATEO/YWF9b/HDeKKVvs1Vo8Tq0dONDrYZ5f4wsKutNHZZj2kauuRlNgoZbW+Nt8PI/J2TFUqMeF0E0n/Gt2fZLE62vrh3Jw13LuuQgouhYaWvjz8bV9PEYoe6mU9219zfrjF5+JgMCznMoG3IC2MuHs0C/tICOI0dJnUiOAa/lLNf37YV0MDy17pFEzP2TEKBckg4j1FQ9YlRWXNtQT/qvhn9kmEPHVqSSYRG65idzYmw8gCfZhP7mPhGFZZh2cjBC+eEM21w1hf3YzSWpWkSOnitNHLYg2NjcW8jmtjfi8AaWTtNYo55na27AOw088A01VNedo4177F2ZnyhCTfc2GFww5MpaiqMIyqMhUG4XbUfxgvgBI4nFrYmiqFBvbUwyDT345KySxlRNQorLt6UNPrT3YJp46fhcPpck0c03ZNDGsUgZQSpBNxzsdBy3PIY0w0pqT4QS4aFnG0jj4jLDCfu0tkHsB+ZxhHE2UBB6wuz+B5Y3RGqZ3qJ1sG1A68vrr5Xx1M4QeegCnf6+uWMptSk2ilpHGUqAqxkgaaC+JgaYrn+9zZuinbwxMQM7gnERO2U7jDKkmCWt3omFwL3t7On6Y2hiqZHyqtKWJ8dPhjWtpTBJ2cdTTzPbN3AQAem3x0xr4urItFHh0leRFBExuuYMLHJ7OYwplgkpZ8k8WXKLkX3F+WH/AA2oqKaVJIAJHXvKqOQxsRoNByv9bei+1IoOO8Ej4o0fo1SuUO6r3Qb2v4XJFwdvjjaGNSjZEp+LSPCdpTRKHlicZtsrX6eIw0oKiaCWX0WaCPMoDq5uCNwbdRr9HAEUaJIKSqiVHU3DFjl10v5H68GsNLDVR+jvF2MqDMsxAy303tvf4frEW0xyR6P7NcfOdqOtWPvLmutgjr5ciPji/tBwUU8LTcLQyUcussCuAUfUhlF9RqdPHHkzFLTSlHQxzRi4I5HqPq2PS8F4v6TFNS1kKjJGH7rXVlOl+oN/oWxTdGdWxNEInjVYZYz93swGYbkgi/K+MpFLHSSG+v4B188F8aoJKavaejb+suUg7q+QG/jcanx+CUwcVKXLvlsCNNxYHp4jGbdmqRpJTrVVEUbAOiNmlyi1ha1tOZtaw8fPBktcKZnRIEWKNMgkW12DC4VOpItfkPEDXSlWGmoFLqcqUiVUpGrNm89ze+/h0N+GQ06niHExlmynsoU1MQPTq5+G56GLKOqqCKDhrzcVBSedDaJW1XMb+1tPiScebJkqVEUcYSFRfLrYf3E8/wBfDBM5qOJVSZwozXC3Jyp7fnzxs5WgjsyGSml1W5y9rYc+eW/LS9sOTtAhbUUyxqGH8+eG/C6BOxikrYw6xXcwWJJvqC52A8LknwFyA4acIq1FRlaQnLHGDsTt4ePgNddATnq3paYoWuZTZsg9a/4R+/v5ApNdhQLWOkbFiLqdAOp8Pr5XBqxJDIVcETADMPyeGDYayOjL1E6LNXDSBD/Th6sep2sNtydbYFhhmqKoLbtKuYm2c+r1Y4TVjBTCv43ynplviYfwycPo07GPh9LxAjV6modhmbnlA/D0vvvzxWK+n+RWZwcRlgJMc9GpIsSHOoxzJUyOpKCCZrerEb+/wwosLeqNhjtWaJu0jORl2I5YexUrGPDuKzUdYkszFsjBjcaxm41HXyx9MpHpOM8IqgvYCUrmamIusw3zINzrbu+fhj5zHU1CESzU0bRgXcKRe1rnl0vhzxmib7OrJPwuZ+yYRzwZhqhO9vZ88bY5OKM8kFL/AEqqoKXiUJhhyo8ZsuVCpQ8xlOo8v0wthDU4VKooYVuqzKGJifS4YGxt8vDDejqYeN1QrYpYqbiOW0y65JTyvbkdddwbb4ZVNPRyvJTTwCKTKCZWIyyoRqp62O2xG4PLEySu0Ur7EUkk1WB28SBI1OWZNwNNT1Gm3ica8IZYK6qSUKhelAQX9bvDbr1xtW8D4bDQ1EsekiRl1HbufhfCytljpqLhs7FY5DFo+W5uGNibeAwrtC7HP2mzSVCxRsFnL5lNyCB2Q1whFHxR1uZ3y2BALnUEA9PEYpKrPU+lVC+kMUFsw3soAPwGNRXrlRewUkRdmzEHv90Lc+6/txOh7GfCGjm4RBDUvEbxdiwJsxGdrAHwAGB+NiOp4zCAFkj7HQX0uFsfitvZhaW4UmVapJ0kOpsNPPF1aUwjQ0SyFmW5YnS1yLj3YVIdsuKaFeH9nLGysq5sqaGVraEnkB08MKalpJ3BdczEBFAJPgAMMnWj0vT1kgtqryKg8xa5v05YIoxw5WZqSNu3y3GkhIXxvoDy0Ou1xe+JY0bR0yR07VE7Ze6Aqg6u+UDS2uUWGm7NpoNcKamWOB3kMpmn2ClbBPDcjzIPh1OH9LTmb7+qJVBsBrl8ByLEDXboLC5xzWVMLTBUp0VAvdXKDsOZtqba+w7DBSaKs8xStWVD5YmO1ydgMGUVLJSTmeoeMnIyhQ+YsSLDbYeOGEXHqaGTJ/hmaa4y3AtfyBH84GnkeV2ecg5zdlCggHffn9WwKkLYFMxUgBb90X3+WJjc0L1BLpNTIu1pZip92JhWxhNdwmGoJquHSr2MwzZXOqE6kYXyUM6StDJTJmA9YubHxxonEahe5OBGp1ut/wB/rxwZInpcarJM6BQBYMbEY1nJPZKRdFwrivES1PBHTmy6/fBbDbn52x6LhtHxWnpjw/iaIYALQydqHaE7kW5qenljzhqWp2KxVYp7DQDL88ditiZi0klNI51Z5EBJ8TrioTXZEoyvR7Gi4eMyyelx2By9mFGc/DDeppYYpYj6U0SSrexUMS3X5Y8RBMYIjJw+SgaYBWZIQBnH5WN9L/rzw847xFvSF9CrGoIyiyIzqrxuLC+uW4IOltOuHolxkzvjrGOgrI/SUJEbdwoAdvLHj+J2/wAL4fIAA8UBkQ355zY4a11VXSUkwl49DMDEbxdkAX01IOT664U8Rb/lNOok2p2GX8veOm/Pf24h9lJbFdDw2p4kZpInTukZixtcnpglfs7W5v6kZ8MxwZ9k0zRVRB2dNPYcPYx3za++MkaWePogZhLSysWiCPKF/vUWB+JwwpoaOTiVPHWWjpzTAnM5AzWvyseeF/DyPSZ9f8iTDbhNQlNxynleojhUUoGeQZlGg6Ww0DDjQ/Zrb0mK9r27eT98UxoaSHs+EyQvI57qCRgWY6C5Ovu15C174czcXosqBOMUDFhcgwMLa/68AwcQ4JQzGrDcOd0UsvYU1nZuoNzihWCVtJxGCnzVDFuzBMsmVVDsRoqi217Em3LCqGVXQh1ySgAyRsPj/P6EA4J41xiv4tlStWjSIXKQySOrKOV8pGuAqdA12dYSFBReyd205i7H4D9L3iTTehxutlvYzCS/LKLoLnrr0t0+AvjmashhiYIplrJAVAI7sY6+J6e/oBjW1JUhEBMzeO38/XSwTqYxveVhfXl/OEijh0Ibvy2Y6nS+JjaWoMrZlhUrawF27vhofq+JitC2cvMJgO2VrgWDDf3Y1j9ByXZpLgagaW+GN6yKmpJexCGSYGzhFVspPK5vc+WOVj9YCnzEcgsRPutfDlaYkZkQKshp1LuEuA+o3HI+3GZaQICKePNex7nuxuJaW15KVmJ5iyaeywx1HLRMwVKGQuxAAEm59+EMzhklFWDTIe20yBBudOXTHt6NyIwZTHG5sTdCwvbkSPjuRbe18AcPg4VRUj1UtMI2FhnZ7rrbu87/ALb6GxrinEkhkMyBu0PqRg7/AMdSefU+rUlRK2NuLSf8sqvvIrdi20NidOuXHkq2Unh9HE6dijx5EkJ0YFj3z4DBj8T4lPTywGGMK6HMQRoDjhUkljgpZKeGVY4lbPLqUzORpblc4OhdiWBq+kzCkeRAx1KEWa3PXGgrOME6Tzm/QjDriPCxQwSTS0dKcirmVVJN2tt5BvhhfTcHlqohLBTnJa3n/GoxKiNtAUV6NHmqNJGQx5OZuPW8tMa0SOkix+itNMY7hDppbfX34IqODzU8XaywWU8xzOBitK1UoEczQ5OVs1xz8tDh1QXY0WmmdwjcNiiB9UzPlB8Ba5OKHD4qKTt654BLf7pQ3dB67b352sPHTBPC+PJRU6UtP21KApKyOFax9x+IwJLW1DNmPH42uN+wGvwwmxozWoySmaSdsoOQZzaNuuUHcDqd8D1vELOySQOrDYhR7/Hl+uCIoZal878VpyCLZzTqSR02vbGtYpoKVBTz+mSMd1hWOOMDn44VDFFNJQWYzRVrMT3SjAeeDVoaKnhSWsmenkm/pq6l3C/msNvC+MzXV7xhTUtBvYpIpv7jgYxTS1HaGqWWRt2lksze+98XCVdCaDUj4Ki2l4tWueRigIFvad8TAz0NUT3xFfl98BpisVf9V8CpfyG0NFTwcMkrpnBa+RVHUi+3Sx9vljJK6pzlpEc0+2Q/h9v0MZP/AO3BjbvlDbpYW+WHHCg68CnBuqNVxjvCwOo3OJ5BugQVMbtYcOzudSBArHz64sVcUTBpeFuibE9gqadL+ONUkjiAZz3Da4Ya89b28MYyV9KbCIgXIGZT5+HgMFJCtsD49xNuJTmTJ2UMa5YYr3EY/c7k4IqBm4xsVIp1yna3dwtq2aRRnJZhEM2uxw/+0EK0/wBoEVb/APooibdcmHJOWxrWhMlA4LR//Iv6N/GGPCIGpjWZgWEdOsoyDVrSXHvtbCsuDVqTYWU89sP/ALM1UMbVysGLSUyhXB/vvud+XuxKSfIPQ94ywkoa8qL/AHAvbW3cTCThEtOtNEZ4hPGqsxjOoJ5ErzA6WwfHVwxCpSdLRPI75gbFCTcZh01F+mh1Ug4RVtK1JK9RSKeyIZWQ/wCXfQnwHXpfmCCROgasuqqi6VTx0/o9O7AwxqQMvWw3tfXpjOodW4RwsMLr2rEjfTMcD1cxm4dErkEqAAFG4GgPwxzHLHPRQ07Mr5b2jYlWvc+qbW1B64JOgSN5ezMhIjXXMB3RYi9tuvjhb2IkltnQ3J9U/oMXnpyxCJUAkagPiw8RkyZakv8A/pribKOfRI0zXue4x1HQXxtC7RVDwQmwYApmOhbTS/l8ummf3ecp2VRnIIsXBxeSFpgJklUsN3bfpgAZrUOV78hVgbFGUXU9Di1qpY2zRVLIf7QRgh3NRBHEsayTQ6BmH3jpyUHmfA7201Gq+ZsihkZpFPNFzWxVVtBYU1XO5zPVSE9SDiYFVa1xmSndl5EEYmL+4WjmodFgSniUkoVJJ+fib+7DOgVjwqVmD5FqYwGZjYfLCOMADUkX8MN6ZnSm7IxWZnD5s9zoLnTyB92FFESJGsU5VXBIIBHeGtr6YHraeAIMkRU5l/ENN/3x1NKViYSNMBltrJuQfLnfAhnaeTLEZMxvqXBAvzPgMJjRdFw+o4rULBDqezu8jnuxj8zHkMH8YqY6j7RNJFd0WFUO+4XX2YqfizU9GnDaG0YC/fOu7MPxE9eg5eeAIFSKVJUHetrmYnUW8PHFScUqiCTu2W00YnX/AIbXL123wTwpgaqodEKjsbgHl3sDPVtEhc6glr+w2/3fDGnCnNZV1DILkw7H/VjNljyojljYrFLC7xMMwMgRXUjZWawuPHow6jEideG1ASoUZDGG7Nt1Ftr6iwBGh2vpmUg4qencPPlLqwUNo+TTKvPlhXxAsjTxM2YrSrc23I5+HP32w7oXJXF4KWSoeWhU9jqJIbi6m+uXp/pOosbXFsJJFAI3ZSL4IaZ4Kx5ojdZiWAOzAnbwsb+7G8dRSTHWmUytyIAze3riW7Y0qMY7VbrmOWp3zHaT+f188dyRU7Sdr6XD2twxWz28fwY7jmopj2UtMIs2mfax8+XntjuoiZnAlzGpykq4FhMLc+jDn19xKAzvGJhL6VTXBJ/zP/DFVFO0iCZpoRFlADWkt4fh8MbUcEJRamd3aBQS6J6x0Og87b8hioJJKdPSTAy0k7sOzJ003K3309+GwR1QyaqJJFkW9u0S+nncC3gdtPd6L0ahEsc0lRFKzjviEMGHibgC58L48/R8QpOGu81LA7Sm4USr3Rf27eHXywfQ/a/jJqFjFSAhBuqqv7fPHRgnGPJlkTfA6WfgCi0ktUjX2CMf0viYA+0cEMHEsgDMezUtlYWuRc4mO2zHx/L+RHFkp0Es1/Bbi/l9bYqvD9ssyTKV0KkH1RfcfzbxtjJpY6iBQcwdBa2/x93LF0VK0lswKxj1Qfx/x9eI8yzpNYlmrJBJOWMY2B3cnf2X9/vIxnrZS7xxCJYuTKu3tx3VTmdjFT3tszC1j5eFvq2A6pVjRVRTt699DiSioXBOVLquXS/mMadpMlhGuZbbgHw/bAkRs/npgpZ1QZSGuL7Dy8fPABqhMkSiS6k5r38xh39k0hhquIyvbLHTowH/AFjbHn3YtECpZdW125j9sb8Kd45akM9/u+u+uHdMGrPfViw8QXiFQgyrlCp4nKmPHcYQpUVYblBl9t72+IwZw7iktLCp0KrGDlPPujA/F2MsVQ9tWTMfjjSbTjoiKaYkjtPHGNSY1KlRuwuTpiTDMe0Rr5vVVVtYWxgDkCEEhhrcYIWUyAyAd/d0GmbqRjEsjN20LSMbypZS35gfng4zBJYWkLBQ4F97AxAXwuiUmmmXqUt7zglWElPOZM3cRc4B0JBAuOmmmEM0pZWpmWCYA6aW2YW3BxvIsckyzSs0kUa2WINb2X5C++BEUpEiTsxpXP3c4F8nX+Rjh46imkPaBig3Km6t7elsXskznFmuLANrYcvZiUDZaxD0xtHR1VYpMETzsqF2K/hUbkk4Di1k9hwbi0x6ej1fHKOoq681NNCZ4JUDI6XtbYjbTUHTF4QUfGK6kh7KmmdEveyuRri8dH7hGP05GdOA85Vh3Qpaw0va5+WDuKu0UQRToxYE+A5YmJjnNAaMBWESiwcqGNzc/V8BljfKdVOtj1xMTCKKU5ma/IY3DWA0H1lxMTAgITmCg/3fLBFAoFJLN+LtBEOgXfExMNgjZSeyA/8ArX/tGHXDYI6mgEkqgkSvCQNmUC4B95xMTGuDciMnqeV4pClPXSwx3yIdL4xpv6mboPkcTExll1Jlo2tkEEK6K4DseZN8dIS0NeTzH+4YmJiAOu0eOimgVyImeJivK/e1wXwUE8Wp6QsTBMwjkQ6hlJ1xMTHRg9yMnqOftE3+G0tNw+iURwPGrvzLMwuSSfIWx5RhaUEaa2xMTF/q/donD6pmaixYDYHExMTHIbH/2Q=='
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Tech Wallpaper - Electronics (#2599347) - HD Wallpaper & Backgrounds Download
                        Tech Wallpaper - Electronics is hd wallpapers & backgrounds for desktop or mobile device. To find more wallpapers on Itl.cat.
                    </Text>
                    </View>
                    <View style={styles.footerContainer}>

                    <TouchableOpacity
                    onPress={() => openWebsite('https://www.abhilashkgeorge.com')}>
                        <Text style={styles.readMoreButtonText}>
                            Read More...
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://www.abhilashkgeorge.com')}>
                        <Text style={styles.readMoreButtonText}>
                            Follow Me...
                        </Text>
                    </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 15,
    },
    card: {
        // width: 350,
        height: 380,
        borderRadius: 8,
        marginVertical: 12, 
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: 'orange',
        elevation: 8,
        shadowOffset: {
            width: 1, 
            height: 1, 
        }, 
        shadowColor: 'black',
        shadowOpacity: 1, 
        shadowRadius: 1,
    },
    headingContainer: {
        height: 40, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    cardImage: {
        height: 200,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        resizeMode: 'stretch'
    },
    headerText: {
        color: '#000000',
        fontSize: 16, 
        fontWeight: '600'
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 10, 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    readMoreButtonText: {
        fontSize: 16, 
        color: 'blue', 
        backgroundColor: 'white',
        paddingHorizontal: 20, 
        paddingVertical: 8,
        borderRadius: 8
    },
})