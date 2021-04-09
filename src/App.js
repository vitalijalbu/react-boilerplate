import logo from './logo.svg';
import AppShell from '@bufferapp/ui/AppShell';
import Button from '@bufferapp/ui/Button';
import {
  Gear,
} from '@bufferapp/ui/Icon';

import { gray } from '@bufferapp/ui/style/colors';

const userMenuItems = [
  {
    id: '2',
    title: 'Preferences',
    icon: <Gear color={gray} />,
    onItemClick: () => { console.info('Preferences') },
  },
];

const helpMenuItems = [
  {
    id: '1',
    title: 'FAQ',
    onItemClick: () => {},
  },
  {
    id: '2',
    title: 'Status',
    onItemClick: () => {},
  },
  {
    id: '3',
    title: 'Pricing & Plans',
    onItemClick: () => {},
  },
  {
    id: '4',
    title: 'Wishlist',
    onItemClick: () => {},
  },
];

/** AppShell with Engage enabled */
function App() {
  return (
    <>
    <Button type="primary" onClick={() => {}} label="Click Me" fullWidth />
    <AppShell
      featureFlips={['engageRollOut']}
      enabledProducts={['publish', 'analyze', 'engage']}
      activeProduct="engage"
      user={{
        name: 'Hamish Macpherson',
        email: 'hamstu@gmail.com',
        avatar: 'https://pbs.twimg.com/profile_images/847849987841167360/WEVTxvUA_400x400.jpg',
        menuItems: userMenuItems,
      }}
      helpMenuItems={helpMenuItems}
      content={<div>Main content.</div>}
    />
    </>
  );
}

export default App;
