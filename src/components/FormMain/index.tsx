import { FormMainContainer } from './styles';
import { FormMainProps } from './types';

import { useForm } from 'react-hook-form';

const FormMain = ({ children, onSubmit }: FormMainProps) => {
  const { handleSubmit } = useForm();

  // const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   onSubmit(e);
  //   console.log('here 1');
  //   handleSubmit((data) => {
  //     console.log(data);
  //   });
  //   console.log('here 2');
  // };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit((data) => {
      console.log(data);
      onSubmit(e);
    });
  };

  return (
    <FormMainContainer
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      {children}
    </FormMainContainer>
  );
};

export default FormMain;
