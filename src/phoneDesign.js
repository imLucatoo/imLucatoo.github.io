import React from 'react'
import styled from 'styled-components'
import params from './settings/params.json'
import VisualView from './visualView.js'
import ContentSide from './contentSide.js'
import contents from './settings/contents.json'
import colors from './settings/colors.json'

const PhoneSpan = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 414px;
    height: fit-content;
    max-width: ${params.phone_max_size};
    box-sizing: box-border;
    padding: ${params.white_space_around};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IntroductionText = styled.p`
    width: 100%;
    text-align: center;
    margin: 10px;
    color: ${colors.text_color};
`


export default function PhoneDesign(){
    return (
    <PhoneSpan>
        <VisualView></VisualView>
        <IntroductionText>{contents.short_introduction}</IntroductionText>
        <ContentSide></ContentSide>
        <IntroductionText>{contents.name_mark}</IntroductionText>
    </PhoneSpan>
    );
}