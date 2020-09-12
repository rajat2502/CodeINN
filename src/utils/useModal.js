import { useState } from 'react';

export const useModal = (initialMode = false) => {
  const [modal, setModal] = useState(initialMode);

  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);

  return [modal, showModal, hideModal];
};
