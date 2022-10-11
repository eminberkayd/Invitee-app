import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Box } from "@react-native-material/core";

function Event({ event, nav, setEvents }) {
    return (
        <>

            <TouchableOpacity style={{ marginTop: "5%", marginHorizontal: "5%", backgroundColor: "#f2a0a0", maxWidth: 350, borderRadius: "20%", height: 150 }} onPress={() => nav.navigate('Eventpage', { event: event, addInvitee: setEvents })}>
                <Text style={{ margin: "10%", fontSize: 18, fontWeight: "bold" }}>{event.name}</Text>
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({

})

export default Event
