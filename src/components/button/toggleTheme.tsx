import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';

import transientOpts from '../../utils/transientopts';

type ThemeToggleButtonProps = Omit<IconButtonProps, 'aria-label'>;

const iconSize = 20;
const RoundButton = styled(IconButton, transientOpts)`
  box-shadow: 0 0 100px 5px
    ${({ $colorMode }) => ($colorMode === 'light' ? '#ccc' : '#000')};
  & svg {
    width: ${iconSize} px;
    height: ${iconSize} px;
  }
`;

function ThemeToggleButton(props: ThemeToggleButtonProps): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <RoundButton
      $colorMode={colorMode}
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      aria-label={`${colorMode === 'light' ? 'dark' : 'light'}-mode`}
      isRound
      {...props}
    />
  );
}

export default ThemeToggleButton;
