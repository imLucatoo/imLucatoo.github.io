import React from 'react'
import styled from 'styled-components'
import TagNavigation from './tagNavigation';
import contents from './settings/contents.json'

const Contents = contents.content_container;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: box-border;
    overflow-y: hidden;
`

export default function ContentSide(){
    return (
        <Container>
        {Contents.map(content=>(
            <TagNavigation
                text={content.text}
                icon={content.icon}
                url={content.url}
            ></TagNavigation>
        ))}
        </Container>
    );
}