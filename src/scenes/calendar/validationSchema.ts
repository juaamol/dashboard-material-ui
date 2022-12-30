import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup.string().required('required'),
});
