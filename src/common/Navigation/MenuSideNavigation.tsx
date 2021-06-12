import { XIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { navigationData } from './data';

const Sidenav = styled.nav<{ open: boolean }>`
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 0.8);
`;

const MenuSideNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <button onClick={() => setOpen(true)} className="px-3 sm:px-5 py-2">
        <MenuIcon className="h-7 w-6" />
      </button>

      <Sidenav open={open} className="w-full sm:w-96 bg-cadet">
        <button onClick={() => setOpen(false)} className="float-right focus:outline-none mx-2 mt-3 px-3 py-2">
          <XIcon className="h-7 w-6" />
        </button>

        <ul className="h-full mt-20 text-body-dark text-base">
          {navigationData.map((nav) => (
            <li key={nav.title}>
              <Link href={nav.link}>
                <a className="py-5 px-7 tracking-tight flex items-center hover:bg-cadet-light hover:text-white">
                  {nav.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Sidenav>
    </div>
  );
};

export default MenuSideNavigation;
