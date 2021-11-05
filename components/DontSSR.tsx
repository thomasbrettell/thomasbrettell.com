import { FC, useState, useEffect } from 'react';

const DontSSR: FC = ({ children }) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);

  if (!render) {
    return null;
  }

  return <>{children}</>;
};

export default DontSSR;
