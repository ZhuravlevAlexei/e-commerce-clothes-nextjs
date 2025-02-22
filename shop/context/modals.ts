import { createDomain } from 'effector';

const modals = createDomain();

export const openMenu = modals.createEvent();
export const closeMenu = modals.createEvent();

export const $menuIsOpen = modals
  .createStore<boolean>(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false);
