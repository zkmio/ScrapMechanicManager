import { Component, lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';

import { Packages } from './pages/packages';
import { IconProps } from 'solid-icons';
import { BiSolidDashboard } from 'solid-icons/bi';
import { FaSolidSquarePlus } from 'solid-icons/fa';

export type RouteEntry = {
  label: string;
  icon: Component<IconProps>;
  component: Component<any>;
}

export const routes: RouteEntry[] = [
  {
    label: 'Packages',
    icon: BiSolidDashboard,
    component: Packages,
  },
  {
    label: 'New',
    icon: FaSolidSquarePlus,
    component: lazy(() => import('./pages/create-package')),
  }
];
