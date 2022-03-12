import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Modal from "react-native-modal";
import styles from "./styles";



const HelpModal = ({isVisible,onDismiss,modalTitle,modalDescription}) => {



    return (
        <View>
            <Modal
                onDismiss={onDismiss}
                isVisible={isVisible}
                onBackButtonPress={onDismiss}
                useNativeDriver={true}
                useNativeDriverForBackdrop={true}
                onBackdropPress={onDismiss}
                backdropOpacity={0.5}

            >
                <View style={styles.containerStyle}>
                    <Text style={styles.titleStyle}>{modalTitle}</Text>
                    <ScrollView showsVerticalScrollIndicator={false } scrollEnabled={modalDescription.length>200}>
                    <Text style={styles.descriptionStyle}>{modalDescription}</Text>

                    <TouchableOpacity onPress={onDismiss} style={styles.acceptButton}>
                        <Text style={styles.acceptText}>ՀԱՍԿԱՑԱ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.rejectText}>Չհասկացա</Text>
                    </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

export default HelpModal;