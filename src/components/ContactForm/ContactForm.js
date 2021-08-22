import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import Button from '../ui/Button/Button';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const EmailSchema = Yup.object().shape({
  enquiry: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const ContactForm = () => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (values, { resetForm }) => {
    emailjs.sendForm(
      'service_s633747',
      'template_t9iw9ss',
      formRef.current,
      'user_hAwavTAP6HjvvL117SkE8'
    );

    resetForm({});

    dispatch(uiActions.setSnack({
      status: true,
      message: 'Email sent'
    }));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        enquiry: '',
      }}
      validationSchema={EmailSchema}
      onSubmit={submitHandler}
    >
      {({ errors, touched }) => (
        <Form className={styles.ContactForm} ref={formRef}>
          <div className={styles.field}>
            <label>
              <span>Email</span>
              <Field name="email" />
            </label>
            {errors.email && touched.email && (
              <div className={styles.error}>{errors.email}</div>
            )}
          </div>
          <div className={styles.field}>
            <label>
              <span>Enquiry</span>
              <Field name="enquiry" as={'textarea'} rows={6} />
            </label>
            {errors.enquiry && touched.enquiry && (
              <div className={styles.error}>{errors.enquiry}</div>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
