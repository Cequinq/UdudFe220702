import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    image?: string;
}

const Header: FC<Props> = ({ className, image }) => {
    return (
        <header className={className} style={{ background: `url(${image})` }}>
            1
        </header>
    );
};

export default styled(Header)`
    padding-bottom: 100px;
`;
