import React from 'react';

import { DefaultProps } from './types';

export interface ImageProps extends DefaultProps {
    height?: number;
    width?: number;
    src: string;
}

export const Image: React.FC<ImageProps> = ({ style, className, children, height, width, src }) => {
    return (
        <img src={src} className={className} height={height} width={width} style={{ maxWidth: '100%', ...style }}>
            {children}
        </img>
    );
};
