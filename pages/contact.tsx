import type {NextPage} from 'next';
import Head from 'next/head';
import {
  Text,
  Input,
  Textarea,
  Button,
  Note,
  Divider,
  Spacer,
  useClipboard,
  useToasts,
} from '@geist-ui/react';
import styled from 'styled-components';
import {breakPoints} from '../constants';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import axios from 'axios';
import Linkedin from '@geist-ui/react-icons/linkedin';
import Mail from '@geist-ui/react-icons/mail';
import Copy from '@geist-ui/react-icons/copy';
import Github from '@geist-ui/react-icons/github';
import {linkedInLink, email, gitHubLink} from '../constants';

const Form = styled.form`
  max-width: 250px;

  @media (max-width: ${breakPoints.xs}) {
    max-width: none;
  }
`;

const FormControl = styled.div`
  margin-bottom: 20px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

interface SubmitStatus {
  type: 'success' | 'error';
  message: string;
}

const Contact: NextPage = () => {
  const [submitted, setSubmitted] = useState<SubmitStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const {copy} = useClipboard();
  const [, setToast] = useToasts();

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

  const copyHandler = () => {
    copy(email);
    setToast({text: 'Copied to clipboard'});
  };

  return (
    <>
      <Head>
        <title>Contact | Tom Brettell Portfolio</title>
        <meta name='description' content='Contact me!' />
      </Head>
      <Text h1>Contact me</Text>
      <Flex>
        <Button icon={<Copy />} type='abort' scale={0.8} onClick={copyHandler}>
          <Spacer w={0.6} />
          <span style={{textTransform: 'lowercase'}}>{email}</span>
        </Button>
      </Flex>
      <a href={`mailto:${email}`}>
        <Button iconRight={<Mail />} auto scale={2 / 3} px={0.6} mr='10px' />
      </a>
      <a href={linkedInLink} target='_blank' rel='noreferrer'>
        <Button
          iconRight={<Linkedin />}
          auto
          scale={2 / 3}
          px={0.6}
          mr='10px'
        />
      </a>
      <a href={gitHubLink} target='_blank' rel='noreferrer'>
        <Button iconRight={<Github />} auto scale={2 / 3} px={0.6} />
      </a>
      <Divider my='30px' />
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
            rows={6}
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
