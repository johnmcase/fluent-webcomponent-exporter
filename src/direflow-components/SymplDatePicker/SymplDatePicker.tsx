import { DatePicker, IDatePickerProps, initializeIcons, loadTheme } from '@fluentui/react';
import React from 'react';
import { symplrTheme } from '../../services/theming';


export const DatePickerComopnent: React.FC<IDatePickerProps> = (props) => {
  const myProps = { ...props };
  React.useEffect(() => {
      initializeIcons();
      if (myProps.theme) {
          loadTheme(myProps.theme!)
      }
  });

  return (
      <DatePicker {...myProps} />
  );
};

DatePickerComopnent.defaultProps = {
  // ...DatePickerBase.defaultProps,
  theme: symplrTheme,
  value: undefined,
  placeholder: undefined,
  disabled: undefined,
  label: undefined,
  allowTextInput: true,
  onSelectDate: undefined,
  formatDate: undefined,
  parseDateFromString: undefined
  // For some reason properties that are not explicitly defaulted here are not passed through
};
