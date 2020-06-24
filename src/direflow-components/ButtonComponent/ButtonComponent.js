import { DefaultButton } from '@fluentui/react';
import { primaryStyles, standardStyles } from 'office-ui-fabric-react/lib/components/Button/ButtonThemes';
import PropTypes from 'prop-types';
import React from 'react';
import { symplrTheme } from '../../themeing';

const ButtonComponent = (props) => {
    const {
        isPrimaryButton,
        label,
        theme
    } = props;

    const defaultButtonProps = {
        text: label
    };

    const styleFn = isPrimaryButton ? primaryStyles : standardStyles;

    console.log(`primary? ${isPrimaryButton} theme`, theme);
    console.log(`primary? ${isPrimaryButton} themeJSON`, JSON.stringify(theme));

    return (
        <DefaultButton {...defaultButtonProps} primary={isPrimaryButton} styles={styleFn(theme)}/>
    );
};

ButtonComponent.propTypes = {
    isPrimaryButton: PropTypes.bool,
    label: PropTypes.string,
    theme: PropTypes.shape({
        palette: PropTypes.object
    })
};

ButtonComponent.defaultProps = {
    isPrimaryButton: false,
    label: '',
    theme: symplrTheme
};

export default ButtonComponent;
