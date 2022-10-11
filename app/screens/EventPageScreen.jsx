import React, { useEffect, useState } from 'react'
import { ScrollView, Text, Alert } from "react-native"
import { ListItem, TextInput, Icon, IconButton } from "@react-native-material/core";



function EventPageScreen({ navigation, route }) {
    console.log(route.params)
    const { event, addInvitee } = route.params;
    const [newInvitee, setNewInvitee] = useState("");

    useEffect(() => {
        navigation.setOptions({ title: event.name })
    }, [])

    useEffect(() => {
        console.log("rendered")
    }, [event])



    const saveNewInvitee = () => {
        if (newInvitee.trim().length === 0) {
            return alert("Invitee name can't be empty!")
        }
        addInvitee((prev) => {
            const next = prev;
            for (let i = 0; i < next.length; i++) {
                if (event === next[i]) {
                    next[i].invitee.push(newInvitee)
                    return [...next];
                }
            }
        })
        setNewInvitee("");
    }

    const deleteInvitee = (person) => {
        Alert.alert(
            "Are you sure?",
            `Do you really want to remove ${person} from the invitee list?`,
            [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        addInvitee((prev) => {
                            const next = prev;
                            for (let i = 0; i < next.length; i++) {
                                if (event === next[i]) {
                                    next[i].invitee.splice(next[i].invitee.indexOf(person), 1);

                                    return [...next];
                                }
                            }
                        })
                        setNewInvitee({ ...newInvitee });
                    }
                }
            ]
        )
    }


    return (<>
        {console.log("ivneet", event.invitee)}
        <ScrollView>
            {event.invitee?.map((person) => {
                return <ListItem key={person} title={person} trailing={<IconButton icon={<Icon name="delete" size={24} />} color="primary" onPress={() => deleteInvitee(person)} />} />
            })}

            <TextInput
                onChangeText={(text) => setNewInvitee(text)}
                value={newInvitee}
                trailing={<IconButton icon={<Icon name="check-circle-outline" size={24} />} color="primary" onPress={saveNewInvitee} />}
                placeholder='New Invitee'
                style={{ margin: 16 }}
            />
        </ScrollView>
    </>
    )
}

export default EventPageScreen
