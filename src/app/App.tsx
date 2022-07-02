import React, { FC, useState } from 'react';
import Header from '../Header';
import styled from 'styled-components';
import Footer from '../Footer';
import LeftPanel from '../LeftPanel';
import MainBody from '../MainBody';
import RightPanel from '../RightPanel';
import bg1 from './assets/cats.jpg';
import bg2 from './assets/chubaka.jpg';
import bg3 from './assets/dogs.jpg';
import bg4 from './assets/dyno.jpg';
import bg5 from './assets/planets.jpg';

interface Props {
    className?: string;
}

const App: FC<Props> = ({ className }) => {
    const [images, setImages] = useState([bg1, bg2, bg3, bg4, bg5]);

    const shuffle = () => {
        setImages((prev) =>
            prev
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value),
        );
    };
    return (
        <div className={className}>
            <Header image={images[0]} />
            <div className="content-wrapper">
                <LeftPanel image={images[1]} />
                <MainBody image={images[2]} shuffle={shuffle} />
                <RightPanel image={images[3]} />
            </div>
            <Footer image={images[4]} />
        </div>
    );
};

export default styled(App)`
    .content-wrapper {
        display: flex;
        justify-content: space-between;
    }
    //display: grid;
    //place-items: center;
    max-width: 1400px;
    max-height: 900px;
`;
