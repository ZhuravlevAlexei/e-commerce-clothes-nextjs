'use client';

import Link from 'next/link';
import Logo from '@/components/elements/Logo/Logo';
import { useLang } from '@/hooks/useLang';
import { openMenu } from '@/context/modals';
import { addOverflowHiddenToBody } from '@/lib/utils/common';
import Menu from './Menu';
const Header = () => {
  const { lang, translations } = useLang();

  const handleOpenMenu = () => {
    addOverflowHiddenToBody();
    openMenu();
  };

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger' onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button className='btn-reset header__links__item__btn header__links__item__btn--search'></button>
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/comparison'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--cart'
            />
          </li>
          <li className='header__links__item header__links__item--profile'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--profile'
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
