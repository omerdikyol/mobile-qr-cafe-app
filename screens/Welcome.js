import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// icons
import { Octicons, Ionicons } from '@expo/vector-icons';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    Avatar,
    WelcomeImage,
    StyledQRButton,
    QRButtonsView
} from './../components/styles';

const Welcome = ({ navigation }) => {

    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <WelcomeContainer>
                    <Avatar resizeMode="cover" source={require('../assets/mindLogo.png')} />
                    <PageTitle welcome={true}>MindOfis Smart Cafe</PageTitle>
                    <SubTitle welcome={true}>Ömer Dikyol</SubTitle>
                    <SubTitle welcome={true}>omer@mail.com</SubTitle>
                    <StyledFormArea>
                        <Line />
                        <QRButtonsView>
                            <StyledQRButton onPress={() => { navigation.navigate("GenerateQR") }}>
                                <Ionicons name="ios-qr-code" size={36} color="#ffffff" />
                            </StyledQRButton>
                            <StyledQRButton onPress={() => { }}>
                                <Ionicons name="cafe-outline" size={36} color="#ffffff" />
                                <ButtonText>Menu</ButtonText>
                            </StyledQRButton>
                            <StyledQRButton onPress={() => { navigation.navigate("ScanQR") }}>
                                <Ionicons name="camera" size={36} color="#ffffff" />
                            </StyledQRButton>
                        </QRButtonsView>
                        <Line />
                        <StyledButton onPress={() => { navigation.navigate("Login") }}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>

        </>
    );
}

export default Welcome;