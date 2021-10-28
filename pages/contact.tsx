import type {NextPage} from 'next';
import Head from 'next/head';
import {Text, Input, Textarea, Button, Note} from '@geist-ui/react';
import styled from 'styled-components';
import {breakPoints} from '../constants';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import axios from 'axios';

const Form = styled.form`
  max-width: 250px;

  @media (max-width: ${breakPoints.xs}) {
    max-width: none;
  }
`;

const FormControl = styled.div`
  margin-bottom: 20px;
`;

interface SubmitStatus {
  type: 'success' | 'error';
  message: string;
}

const Contact: NextPage = () => {
  const [submitted, setSubmitted] = useState<SubmitStatus | null>(null);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    enquiry: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const {handleSubmit, values, errors, touched, handleChange, resetForm} =
    useFormik({
      initialValues: {
        enquiry: '',
        email: '',
      },
      validationSchema,
      onSubmit: (values) => {
        setLoading(true);
        axios
          .post('/api/enquiry', {
            email: values.email,
            enquiry: values.enquiry,
          })
          .then((result) => {
            setSubmitted({type: 'success', message: 'Thanks for your enquiry'});
            resetForm();
          })
          .catch((err) => {
            setSubmitted({type: 'error', message: 'Something went wrong'});
          })
          .finally(() => {
            setLoading(false);
          });
      },
    });

  const fillingOutFormHandler = () => {
    setSubmitted(null);
  };

  return (
    <>
      <Head>
        <title>Contact | Tom Brettell Portfolio</title>
        <meta name='description' content='Contact me!' />
      </Head>
      <Text h1>Contact me</Text>
      <Form onSubmit={handleSubmit} onChange={fillingOutFormHandler}>
        {submitted && (
          <FormControl>
            <Note label={false} type={submitted.type}>
              {submitted.message}
            </Note>
          </FormControl>
        )}
        <FormControl>
          <Input
            placeholder='Email'
            width='100%'
            id='email'
            name='email'
            htmlType='email'
            onChange={handleChange}
            value={values.email}
            type={errors.email && touched.email ? 'error' : 'default'}
          />
        </FormControl>
        <FormControl>
          <Textarea
            placeholder='Enquiry'
            width='100%'
            id='enquiry'
            name='enquiry'
            onChange={handleChange}
            value={values.enquiry}
            type={errors.enquiry && touched.enquiry ? 'error' : 'default'}
          ></Textarea>
        </FormControl>
        <FormControl>
          <Button htmlType='submit' ghost auto scale={0.7} loading={loading}>
            Submit
          </Button>
        </FormControl>
      </Form>
    </>
  );
};

export default Contact;
