import React from 'react'
import styled from 'styled-components'
import params from './settings/params.json'
import colors from './settings/colors.json'
import contents from './settings/contents.json'


const Container = styled.div`
    position: relative;
    width: 100%;
    height: ${params.visual_view_height};
    background: ${colors.primary_color};;
    border-radius: ${params.object_border_radius};
    diplay: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: ${params.image_border};
`

const SecondContainer = styled.div`
    width: 100%;
    height: calc(100% - ${params.image_border} - 3px);
    margin-top: calc(${params.image_border} - 3px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const SecondImage = styled.img`
    width: calc(50% - ${params.image_border}/2);
    height: 100%;
    border-radius: ${params.object_border_radius};
    background: ${colors.secondary_color};
    object-fit: ${props => (props.fit_style)};
`

const ThirdContainer = styled.div`
    width: calc(50% - ${params.image_border}/2);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ThirdImage = styled.img`
    width: 100%;
    height: calc(50% - ${params.image_border}/2);
    border-radius: ${params.object_border_radius};
    background: ${colors.secondary_color};
    object-fit: ${props => (props.fit_style)};
`

const FourthImage = styled.img`
    width: 100%;
    height: calc(50% - ${params.image_border}/2);
    border-radius: ${params.object_border_radius};
    background: ${colors.secondary_color};
    object-fit: ${props => (props.fit_style)};
`
const Image2 = require(`./images/${contents.visual_container[1].image_url}`);
const Image3 = require(`./images/${contents.visual_container[2].image_url}`);
const Image4 = require(`./images/${contents.visual_container[3].image_url}`);

export default function VisualView(){
    return (
        <Container>
            <SecondContainer>
                <SecondImage
                    src={Image2}
                    fit_style={contents.visual_container[1].fit_style}
                ></SecondImage>
                <ThirdContainer>
                    <ThirdImage
                        src={Image3}
                        fit_style={contents.visual_container[2].fit_style}
                    ></ThirdImage>
                    <FourthImage
                        src={Image4}
                        fit_style={contents.visual_container[3].fit_style}
                    ></FourthImage>
                </ThirdContainer>
            </SecondContainer>
        </Container>
    );
}