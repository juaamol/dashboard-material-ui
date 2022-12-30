import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FC, useRef } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';

const initialValues = {
  title: '',
};

interface FormDialogProps {
  handleFormSubmit: (values: { title: string }) => void;
  handleClose: () => void;
  open: boolean;
}

export const FormDialog: FC<FormDialogProps> = (props) => {
  const { open, handleFormSubmit, handleClose } = props;
  const submitRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New event</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter a new title for your event
        </DialogContentText>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant='filled'
                id='title'
                label='Title'
                type='text'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name='title'
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
              />
              <button
                ref={submitRef}
                type='submit'
                style={{ display: 'none' }}
              />
            </form>
          )}
        </Formik>
      </DialogContent>
      <DialogActions>
        <Button color='primary' onClick={handleClose}>
          Cancel
        </Button>
        <Button
          onClick={() => submitRef.current?.click()}
          color='secondary'
          variant='contained'
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
