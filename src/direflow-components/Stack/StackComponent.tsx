import { Stack, IStackProps, StackItem, IStackItemProps } from '@fluentui/react';
import React, { FC } from 'react';
import { symplrTheme, darkTheme } from '../../services/theming';

export const StackComponent: FC<IStackProps> = (props) => {

  console.log('props == ', props);

    return (
        <Stack {...props} />
    );
};

StackComponent.defaultProps = {
  theme: symplrTheme
};


// export const StackItemComponent: FC<IStackItemProps> = (props) => {

//   console.log('props == ', props);

//     return (
//         <StackItem {...props} />
//     );
// };

// StackItemComponent.defaultProps = {
//   theme: symplrTheme
// };
