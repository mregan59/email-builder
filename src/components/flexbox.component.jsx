import React from 'react';

export const FlexBox = (props) => {

    const flexStyle = {
        flexDirection:
            (props.row && 'row') ||
            (props.column && 'column') ||
            (props.columnreverse && 'column-reverse') ||
            (props.rowreverse && 'row-reverse') ||
            'column',
        justifyContent:
            (props.justifycenter && 'center') ||
            (props.justifystart && 'flex-start') ||
            (props.justifyend && 'flex-end') ||
            (props.justifybetween && 'space-between') ||
            (props.justifyaround && 'space-around'),
        alignItems:
            (props.aligncenter && 'center') ||
            (props.alignstart && 'flex-start') ||
            (props.alignend && 'flex-end') ||
            (props.alignbetween && 'space-between') ||
            (props.alignaround && 'space-around') ||
            (props.alignstretch && 'stretch'),
        order: props.order,
        display: 'flex',
        flexWrap: props.wrap && 'wrap',
        flex: props.flex1 && 1,
        width: props.w100 && '100%',
        ...props.style,
    };
    var {
        row,
        rowreverse,
        column,
        columnreverse,
        aligncenter,
        alignstart,
        alignend,
        alignbetween,
        alignaround,
        alignstretch,
        justifycenter,
        justifystart,
        justifyend,
        justifybetween,
        justifyaround,
        order,
        flex1,
        wrap,
        w100,
        ...other
    } = props;

    return (
        <div {...other} style={flexStyle}>
            {props.children}
        </div>
    );

}
