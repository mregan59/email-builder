import React, { useState, useEffect } from 'react';
import Select from '@bit/mui-org.material-ui.select';
import MenuItem from '@bit/mui-org.material-ui.menu-item';
import { FlexBox, Card } from '../flexbox.component';
import classes from './menu.style.css';

export const Menu = ({
    data,
    onGroupChange,
    onEmailChange,
    onEmailGroupChange,
}) => {
    const dataKeys = Object.keys(data);
    const [group, setGroup] = useState(dataKeys[0]);

    useEffect(() => {
        onGroupChange(data['onboarding']);
    }, []);

    const onChange = (e) => {
        setGroup(e.target.value);
        onGroupChange(data[e.target.value]);
    };

    const MenuGroup = ({ title, length, emailGroup, children }) => {
        return (
            <FlexBox style={{ marginBottom: 10 }}>
                <FlexBox
                    row
                    justifybetween
                    onClick={() => onEmailGroupChange(emailGroup)}
                    className="menu-header-container"
                >
                    <h3 className="menu-header">{title}</h3>
                    <div className="menu-header">({length})</div>
                </FlexBox>
                {children}
            </FlexBox>
        );
    };

    const MenuEmail = ({ text, email }) => {
        return (
            <FlexBox
            className="menu-item"
            onClick={() => onEmailChange(email)}
        >
            <h5>{text}</h5>
        </FlexBox>
        );
    };

    const menu = data[group].map((d1, i) => {
        if (group == 'onboarding' && i == 0) {
            return (
                <MenuGroup
                    title="All Onboarding"
                    length={d1.length}
                    emailGroup={d1}
                ></MenuGroup>
            );
        }
        if (group == 'onboarding') {
            return (
                <MenuGroup title={`Day ${i}`} length={d1.length} emailGroup={d1}>
                    {d1.map((d) => {
                        return (
                            <MenuEmail text={d.name} email={d}></MenuEmail>
                        );
                    })}
                </MenuGroup>
            );
        } else {
            return d1.map((d) => {
                return (
                    <MenuEmail text={d.name} email={d}></MenuEmail>
                );
            });
        }
    });

    return (
        <div className="menu">
            <Select
                style={{ color: 'white', marginBottom: 10, width: '100%' }}
                value={group}
                onChange={onChange}
            >
                {dataKeys.map((key) => (
                    <MenuItem id={key} value={key}>
                        {key}
                    </MenuItem>
                ))}
            </Select>
            {menu}
        </div>
    );
};
