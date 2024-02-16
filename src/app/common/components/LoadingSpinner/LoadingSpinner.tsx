import { TailSpin } from 'react-loader-spinner';
import * as Styled from "./LoadingSpinner.styled";

const LoadingSpinner: React.FC = () => {
  return (
    <Styled.LoadingSpinnerContainer>
      <TailSpin
        visible={true}
        height={80}
        width={80}
        color="#C1FF0B"
        ariaLabel="tail-spin-loading"
        radius={1}
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Styled.LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
