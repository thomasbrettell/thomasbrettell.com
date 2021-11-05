import NoLayout from '../components/NoLayout';
import styled from 'styled-components';
import { Input, Button } from '@geist-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';
import { useHelpers } from '@remirror/react';

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Gap = styled.div`
  margin: 5px;
`;

const EditorWrapper = styled.div`
  padding: 20px;
  width: 70%;
  margin: auto;
`;

function EditorPreview() {
  const { getHTML } = useHelpers(true);

  return (
    <pre>
      <code>{getHTML()}</code>
    </pre>
  );
}

const CMS = () => {
  const [password, setPassword] = useState('');
  const [authorised, setAuthorised] = useState(false);

  const passwordChangeHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
  };

  const passwordSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === process.env.NEXT_PUBLIC_CMS_PASSWORD) {
      setAuthorised(true);
    }
  };

  return (
    <>
      {!authorised && (
        <Center>
          <Form onSubmit={passwordSubmitHandler}>
            <Input.Password
              placeholder='Password'
              value={password}
              onChange={passwordChangeHandler}
            />
            <Gap />
            <Button htmlType='submit' shadow type='secondary'>
              Submit
            </Button>
          </Form>
        </Center>
      )}
      {authorised && (
        <EditorWrapper>
          <WysiwygEditor>
            <EditorPreview />
          </WysiwygEditor>
        </EditorWrapper>
      )}
    </>
  );
};

CMS.layout = NoLayout;

export default CMS;
