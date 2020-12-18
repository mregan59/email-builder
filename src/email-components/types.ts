import React from 'react';

export interface TextProps {
    text: string;
    style?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    highlight?: string;
    center?: boolean;
}

export interface ButtonProps {
    text?: string;
    href: string;
    style?: React.CSSProperties;
}

export interface ButtonInContainerProps extends ButtonProps {
    containerStyle?: React.CSSProperties;
    center?: boolean;
}

export interface FooterProps {
    style?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
}

export interface TextImageProps {
    header?: string;
    text?: string;
    button?: ButtonProps;
    style?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    image?: string;
    imageOnRight?: boolean;
    is5050?: boolean;
}

export interface PremiumPromptProps {
    header?: string;
    text?: string;
    button?: ButtonProps;
    style?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    center?: boolean;
}

export interface ImageProps {
    height?: number;
    width?: number;
    src: string;
    containerStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    roundedCorners?: boolean;
}
export interface VideoProps {
    height?: number;
    width?: number;
    src: string;
    containerStyle?: React.CSSProperties;
    style?: React.CSSProperties;
}
