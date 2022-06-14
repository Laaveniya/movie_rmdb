import React from "react";

import {Wrapper, Content, Text} from './HeroImage.Style';

import PropTypes from "prop-types";

const HeroImage = ({image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

HeroImage.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string
}
export default HeroImage;