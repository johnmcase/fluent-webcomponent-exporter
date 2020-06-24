import { DatePickerBase, IDatePickerProps, IDatePickerStyleProps, IDatePickerStyles, initializeIcons, styled } from '@fluentui/react';
import { styles } from 'office-ui-fabric-react/lib/components/DatePicker/DatePicker.styles';
import * as React from 'react';
import { symplrTheme } from '../../services/theming';

initializeIcons();

/**
 * DatePicker description
 */
export const DatePickerComopnent: React.FunctionComponent<IDatePickerProps> = styled<
  IDatePickerProps,
  IDatePickerStyleProps,
  IDatePickerStyles
>(DatePickerBase, styles, undefined, {
  scope: 'DatePicker',
});

DatePickerComopnent.defaultProps = {
  // ...DatePickerBase.defaultProps,
  theme: symplrTheme,
  placeholder: undefined,
  disabled: undefined,
  label: undefined
//   // Apparently any property not defined here does not get passed into the child for some reason?
};

// export default DatePickerComopnent;



// import { DatePicker, IDatePickerProps, IDatePickerStyleProps, DatePickerBase } from '@fluentui/react';
// import { styles } from 'office-ui-fabric-react/lib/components/DatePicker/DatePicker.styles';
// import React, { FC } from 'react';
// import { symplrTheme, darkTheme } from '../../services/theming';

// interface ISymplrDatePickerProps extends IDatePickerProps {
//   styleProps: IDatePickerStyleProps
// }

// const DatePickerComopnent: FC<ISymplrDatePickerProps> = (props) => {

//   console.log('props == ', props);

//     return (
//         // <DatePicker {...props} styles={styles(props.styleProps)}/>
//         <DatePickerBase {...props} />
//     );
// };

// DatePickerComopnent.defaultProps = {
//   ...DatePickerBase.defaultProps,
//   // styleProps: {
//   //   theme: symplrTheme,
//   // },
//   theme: darkTheme,
//   placeholder: 'default placeholder',
// };

// export default DatePickerComopnent;
