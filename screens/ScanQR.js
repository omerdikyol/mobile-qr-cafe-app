import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

// icons
import { Octicons, Ionicons } from '@expo/vector-icons';

//formik
import { Formik } from 'formik'

// colors
const { brand, darkLight, white } = Colors;

// keyboard avoiding wrapper
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    Line,
    MsgBox,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    QRContainer
} from './../components/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ScanQR = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        let info = JSON.parse(data);
        let res = 'Name: ' + info.name + ' \n' + 'ID: ' + info.id + '\n' + 'Insider: ' + info.insider;
        setText(res)

    };

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <QRContainer>
                <InnerContainer>
                    <Text>Requesting for camera permission</Text>
                </InnerContainer>
            </QRContainer>
        )

    }
    if (hasPermission === false) {
        return (

            <InnerContainer>
                <Text style={{ margin: 10 }}>No access to camera</Text>
                <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </InnerContainer>)
    }
    return (
        <KeyboardAvoidingWrapper>
            <QRContainer>
                <StatusBar style="dark" />
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ height: 400, width: 400 }} />
                {scanned &&
                    <StyledButton onPress={() => setScanned(false)}>
                        <ButtonText>Tap to Scan Again</ButtonText>
                    </StyledButton>
                }
                <Line />
                <SubTitle>{text}</SubTitle>
            </QRContainer>
        </KeyboardAvoidingWrapper >
    );
}

export default ScanQR;