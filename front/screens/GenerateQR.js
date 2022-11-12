import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import QRCode from 'react-native-qrcode-svg';

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



const GenerateQR = ({ navigation }) => {
    const [QR, setQR] = useState(false);

    const handleQRGenerated = () => {
        setQR(true);
        console.log('QR Generated');
    }

    if (QR === true) {
        return (
            <QRContainer>
                <InnerContainer>
                    < QRCode
                        value='https://github.com/omerdikyol'
                        size={300}
                    />
                    <Line />
                    <SubTitle style={{}}>Count: </SubTitle>
                    <StyledButton onPress={() => { handleQRGenerated() }}>
                        <ButtonText>Generate QR</ButtonText>
                    </StyledButton>
                </InnerContainer>
            </QRContainer>
        )
    }

    return (
        <QRContainer>
            <InnerContainer>
                <StatusBar style="dark" />
                <StyledButton onPress={() => { handleQRGenerated() }}>
                    <ButtonText>Generate QR</ButtonText>
                </StyledButton>
            </InnerContainer>
        </QRContainer >
    );
}

export default GenerateQR;