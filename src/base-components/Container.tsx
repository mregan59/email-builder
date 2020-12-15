import React from 'react';

import { Row } from './Row';
import { Column } from './Column';
import { DefaultProps } from './types';

export interface ContainerProps extends DefaultProps {
    alignment?: string;
    maxWidth?: number | string;
}

export const Container: React.FC<ContainerProps> = ({ children, alignment, maxWidth = 600, style, className }) => {
    return (
        <table
            className={className}
            width={'100%'}
            style={{ margin: alignment === 'center' ? '0 auto' : '0', maxWidth: typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`, ...style }}>
            <tbody>
                <tr>
                    <td>
                        {React.Children.map(children, (child: any) => {
                            if (!child) {
                                return;
                            }
                            if (child.type === Column) {
                                return <Row>{child}</Row>;
                            }

                            return child;
                        })}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
