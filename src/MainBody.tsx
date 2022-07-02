import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    image?: string;
    shuffle?: any;
}

const MainBody: FC<Props> = ({ className, image, shuffle }) => {
    return (
        <header className={className} style={{ background: `url(${image})` }}>
            <button onClick={shuffle}>click me</button>
        </header>
    );
};

export default styled(MainBody)`
    padding: 200px;
`;
