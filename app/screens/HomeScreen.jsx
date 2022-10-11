import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Modal, SafeAreaView, TextInput, ScrollView, Keyboard, FlatList } from "react-native"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { VStack } from "@react-native-material/core";
import Event from '../components/Event';

function HomeScreen({ navigation }) {

    const [events, setEvents] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newEventName, setNewEventName] = useState("");
    const [newEventDate, setNewEventDate] = useState("");
    const [newEventExp, setNewEventExp] = useState("");



    const saveNewEvent = () => {

        if (newEventName.trim().length === 0) {
            return alert("The event name can't be empty!");
        }

        setEvents((prev) => {
            return [...prev, { name: newEventName.trim(), date: newEventDate, date: newEventExp, invitee: [] }]
        })

        setModalVisible(false);
        setNewEventName("");
        setNewEventDate("");
        setNewEventExp("");

    }

    const cancelNewEvent = () => {
        setModalVisible(false);
        setNewEventName("");
        setNewEventDate("");
        setNewEventExp("");
    }

    return (<>
        <View style={{ flex: 1, flexDirection: "column", backgroundColor: modalVisible ? "rgba(0,0,0,0.5)" : "white" }}>
            <Modal
                animationType='slide'
                style={styles.ModalContainer}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.ModalView}>
                    <Text style={{ textAlign: "center", fontSize: 28 }}>Create New Event</Text>
                    <TextInput style={{ fontSize: 22, borderBottomColor: "black", borderBottomWidth: 1 }} multiline={true} placeholder="Event name" onChangeText={(text) => setNewEventName(text)} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={cancelNewEvent} >
                            <Icon name='close' color={"#cc3535"} size={32} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={saveNewEvent} >
                            <Icon name='check' color={"#0a3b0d"} size={32} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={{ backgroundColor: "rgba(0,0,0,0)", position: "absolute", zIndex: 1, marginLeft: 200, marginTop: "110%" }}>
                <TouchableOpacity style={styles.PlusIcon} onPress={() => setModalVisible(true)}>
                    <Icon name='plus' size={72} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    {events?.map((event) => <Event setEvents={setEvents} key={event.name} event={event} nav={navigation} />)}
                </ScrollView>
            </View>
        </View>

    </>
    )
}

const styles = StyleSheet.create({
    ModalView: {
        marginTop: "30%",
        width: "80%",
        marginHorizontal: "10%",
        height: "40%",
        backgroundColor: "#86c4bc",
        borderRadius: "20%",
        padding: "10%",
        paddingTop: "5%",
        justifyContent: "space-between"
    },
    ModalContainer: {
        flex: 1,
    },
    PlusIcon: {
        height: 90,
        width: 90,
        margin: 50,
        borderRadius: "50%",
        justifyContent: "center",// for centered plus icon
        alignItems: "center", // for centered plus icon
        backgroundColor: "#22a8c9",
        alignSelf: "flex-end"
    }
})

export default HomeScreen
