import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Icon from './Icon';
import TopBar from './TopBar';
import { NAV_ITEMS, ROUTES } from '../constants/routes';

export default function AppLayout({ judulCari = 'Cari transaksi atau produk...' }) {
  const navigate = useNavigate();
  const [menuBuka, setMenuBuka] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-background">
      {menuBuka && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-label="Tutup menu"
          onClick={() => setMenuBuka(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-sidebar-width flex-col border-r border-outline-variant bg-primary-container py-6 transition-transform duration-200 lg:translate-x-0 ${
          menuBuka ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-center gap-3 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-on-primary-container">
            <Icon name="storefront" className="text-primary-container" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-on-primary">Laku POS</h1>
            <p className="text-xs text-on-primary-container/70">Mitra Setia Bisnis</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.ke}
              to={item.ke}
              onClick={() => setMenuBuka(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-l-4 border-tertiary-container bg-white/10 text-on-primary'
                    : 'text-on-primary-container/80 hover:bg-white/5 hover:text-on-primary'
                }`
              }
            >
              <Icon name={item.ikon} size={22} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto space-y-4 px-3">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3 text-sm font-medium text-on-primary active:scale-95"
            onClick={() => {
              setMenuBuka(false);
              navigate(ROUTES.KASIR);
            }}
          >
            <Icon name="add_circle" size={20} />
            Buka Kasir
          </button>
          <div className="flex items-center gap-3 border-t border-white/10 px-2 pt-4">
            <Icon name="storefront" className="text-on-primary-container" />
            <span className="text-sm text-on-primary">Toko Maju Jaya</span>
          </div>
        </div>
      </aside>

      <div className="lg:ml-sidebar-width flex min-h-screen flex-col">
        <TopBar
          placeholderCari={judulCari}
          onMenuClick={() => setMenuBuka(true)}
        />
        <main className="flex-1 p-4 md:p-container-padding">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
