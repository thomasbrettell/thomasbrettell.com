import {FC, Fragment} from 'react';
import {Modal, Link, Spacer} from '@geist-ui/react';
import {pages} from '../constants';

interface MenuInterface {
  state: boolean;
  closeHandler: () => void;
}

const MobileMenuModal: FC<MenuInterface> = ({state, closeHandler}) => {
  return (
    <Modal visible={state} onClose={closeHandler}>
      {pages.map((page, index) => (
        <Fragment key={page.name}>
          <Link href={page.link}>{page.name}</Link>
          {index + 1 !== pages.length && <Spacer h={1} />}
        </Fragment>
      ))}
      <Modal.Action onClick={closeHandler}>Close</Modal.Action>
    </Modal>
  );
};

export default MobileMenuModal;
