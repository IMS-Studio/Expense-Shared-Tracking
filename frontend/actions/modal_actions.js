export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, billInfo) => {
  return {
    type: OPEN_MODAL,
    modal,
    billInfo
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
