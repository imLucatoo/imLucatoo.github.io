import React from 'react'
import styled from 'styled-components'
import colors from './settings/colors.json'
import params from './settings/params.json'


const Tag = styled.button`
    position: relative;
    background: ${colors.primary_color};
    width: 100%;
    height: fit-content;
    margin: 10px;
    box-sizing: border-box;
    padding: 25px;
    border-radius: ${params.object_border_radius};
    margin: 10px 0;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.text_color};
    text-decoration: none;
`


export default function TagNavigation({text, icon, url}){
    const handleClick = (url) => {
        console.log(url);
        window.location.href = url;
    }

    return (
        <Tag onClick={() => handleClick(url)}>
            <i className={icon} style={
                {
                    position: "absolute",
                    left: "8%",
                    fontSize: params.icon_size,
                    color: colors.icon_color
                }
            }></i>
            {text}
        </Tag>
    );
}