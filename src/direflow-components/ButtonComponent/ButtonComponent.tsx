import { DefaultButton, ITheme } from '@fluentui/react';
import { primaryStyles, standardStyles } from 'office-ui-fabric-react/lib/components/Button/ButtonThemes';
import React, { FC } from 'react';
import { symplrTheme } from '../../services/theming';

interface IProps {
    isPrimaryButton: boolean,
    label: string,
    theme: ITheme
}

const ButtonComponent: FC<IProps> = (props) => {

    const defaultButtonProps = {
        text: props.label
    };

    const styleFn = props.isPrimaryButton ? primaryStyles : standardStyles;

    return (
        <DefaultButton {...defaultButtonProps} primary={props.isPrimaryButton} styles={styleFn(props.theme)}/>
    );
};

ButtonComponent.defaultProps = {
    isPrimaryButton: false,
    label: '',
    theme: symplrTheme
};

export default ButtonComponent;
