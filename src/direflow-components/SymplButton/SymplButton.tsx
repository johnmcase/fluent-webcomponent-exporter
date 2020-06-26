import { DefaultButton, IButtonProps, loadTheme, mergeStyles, concatStyleSets } from '@fluentui/react';
import React from 'react';
import { symplrTheme } from '../../services/theming';

export const ButtonComponent: React.FC<IButtonProps> = (props) => {
    const myProps = { ...props };
    React.useEffect(() => {
        if (myProps.theme) {
            loadTheme(myProps.theme!)
        }
    });

    myProps.split = !!myProps.split;

    return (
        <DefaultButton {...myProps} />
    );
};

ButtonComponent.defaultProps = {
    theme: symplrTheme,
    primary: false,
    text: undefined,
    className: undefined,
    disabled: undefined,
    split: undefined,
    menuProps: undefined,
    styles: undefined,
    role: undefined,
    onClick: undefined
    // For some reason properties that are not explicitly defaulted here are not passed through
};
