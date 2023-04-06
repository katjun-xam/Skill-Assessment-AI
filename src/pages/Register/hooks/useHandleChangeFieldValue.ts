import { useAppDispatch, useAppSelector } from 'store';
import { selectRegisterState, setRegisterFormData } from 'store/register/slice';

const useHandleChangeFieldValue = (): ((e: React.ChangeEvent<HTMLInputElement>) => void) => {
  const dispatch = useAppDispatch();
  const { registerFormData } = useAppSelector(selectRegisterState);

  return (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      setRegisterFormData({
        ...registerFormData,
        [e.target.id]: e.target.value,
      }),
    );
  };
};

export default useHandleChangeFieldValue;
