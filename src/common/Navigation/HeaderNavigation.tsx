import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HashtagIcon } from '@heroicons/react/outline';
import styled from 'styled-components';

import MenuSideNavigation from './MenuSideNavigation';
import { navigationData } from './data';
import { Menu } from './types';

const Header = styled.header`
  height: 4.5rem;
`;

const HeaderNavigation = () => {
  const [activeMenu, setActiveMenu] = useState<Menu>(navigationData[0]);
  const router = useRouter();

  useEffect(() => {
    const pathname = router.pathname;
    const active = navigationData.find((nav) => nav.link === pathname) || navigationData[0];
    setActiveMenu(active);
  }, []);

  return (
    <Header className="w-full flex justify-between items-center bg-body">
      <Link href="/">
        <a className="flex items-center px-3 sm:px-5 py-2 text-white text-xl sm:text-2xl">
          <HashtagIcon className="w-6 sm:w-8 mr-1 text-body-dark" />
          Awa
        </a>
      </Link>

      <nav className="h-full hidden md:flex">
        <ul className="flex h-full text-body-dark text-base">
          {navigationData.map((nav) => (
            <li key={nav.title} className="h-full">
              <Link key={nav.title} href={nav.link}>
                <a
                  className={`h-full px-3 lg:px-5 tracking-tight flex justify-center items-center hover:bg-cadet-light ${
                    activeMenu.link === nav.link && 'bg-cadet-light underline'
                  } hover:text-white`}
                >
                  {nav.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center">
        <Link href="/get-in-touch">
          <a className="bg-primary transform motion-safe:hover:scale-50 whitespace-nowrap md:mx-5 py-2 px-3 sm:px-4 rounded-sm text-xs font-semibold tracking-wide">
            GET IN TOUCH
          </a>
        </Link>
        <MenuSideNavigation />
      </div>
    </Header>
  );
};

export default HeaderNavigation;
