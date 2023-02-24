import { CreateStyled } from '@emotion/styled';

const transientOpts: Parameters<CreateStyled>[1] = {
  shouldForwardProp: (propName: string) => !propName.startsWith('$'),
};

export default transientOpts;
