import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/CircleLoader';

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Loader() {
  return (
    <div>
      <ClipLoader color="#006400" css={override} size={100} />
    </div>
  );
}