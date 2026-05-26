import { Link } from 'react-router-dom';
import Icon from './Icon';
import { ROUTES } from '../constants/routes';

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDloaqB7swr0TesJlwmnKkAovz3rpF8J6Pd9yDr79M8OtxsSMSG-qbtBqkrqP7eCzGGbwYz-zSTFVKbW7bc3TEKwsFiEjmpgGQCZTPQJuhnyhssiG-K5yk7x10QHSSZk6jbnB0JGI2hy--1qEepHnJ3TlVoAmtlBdKjIb7OwbrUInCMGuvvooQYqEg8mh5faklzCTgXAKT0TQtSWWkvoA82ETTqNtwVmPO91GOldgHKJyBJMuRQ1X-K-UK7U2tyBvYiT-igzGP1UxY';

export default function TopBar({ placeholderCari, onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-surface-variant bg-surface px-4 md:px-gutter">
      <div className="flex flex-1 items-center gap-3">
        <button
          type="button"
          className="rounded-lg p-2 text-on-surface-variant hover:bg-surface-container-low lg:hidden"
          onClick={onMenuClick}
          aria-label="Buka menu"
        >
          <Icon name="menu" />
        </button>
        <div className="relative w-full max-w-md">
          <Icon
            name="search"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-on-surface-variant"
            size={20}
          />
          <input
            type="search"
            className="w-full border-none bg-transparent py-2 pl-8 text-sm focus:ring-0"
            placeholder={placeholderCari}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <Link
          to={ROUTES.NOTIFIKASI}
          className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low"
          aria-label="Notifikasi"
        >
          <Icon name="notifications" />
        </Link>
        <button
          type="button"
          className="hidden rounded-full p-2 text-on-surface-variant hover:bg-surface-container-low sm:block"
          aria-label="Bantuan"
        >
          <Icon name="help_outline" />
        </button>
        <div className="hidden h-8 w-px bg-surface-variant sm:block" />
        <div className="flex items-center gap-2">
          <div className="hidden text-right sm:block">
            <p className="text-xs font-bold text-primary">Pak Harto</p>
            <p className="text-[10px] text-on-surface-variant">Pemilik Toko</p>
          </div>
          <img src={AVATAR} alt="Profil" className="h-9 w-9 rounded-full border border-outline-variant md:h-10 md:w-10" />
        </div>
      </div>
    </header>
  );
}
