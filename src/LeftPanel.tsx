import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    image?: string;
}

const LeftPanel: FC<Props> = ({ className, image }) => {
    return (
        <header className={className} style={{ background: `url(${image})` }}>
            1
        </header>
    );
};

export default styled(LeftPanel)`
    padding: 200px;
`;
