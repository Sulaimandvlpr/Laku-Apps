import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

export default function StokPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Manajemen Stok</h2>
          <p className="text-sm text-on-surface-variant">Pantau masuk, keluar, dan level inventaris</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-secondary flex items-center gap-2">
            <Icon name="download" size={18} />
            Ekspor
          </button>
          <button type="button" className="btn-primary flex items-center gap-2">
            <Icon name="add" size={18} />
            Stok Masuk
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ['Stok Aman', '120', 'sku'],
          ['Perlu Restock', '8', 'sku'],
          ['Stok Kritis', '3', 'sku'],
        ].map(([label, val, sub]) => (
          <div key={label} className="glass-card p-5">
            <p className="text-xs uppercase text-on-surface-variant">{label}</p>
            <p className="mt-1 text-2xl font-bold text-primary">
              {val} <span className="text-sm font-normal">{sub}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="glass-card p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-primary">Riwayat Pergerakan Stok</h3>
          <Link to={ROUTES.LAPORAN_SELISIH} className="text-sm text-secondary hover:underline">
            Laporan Selisih Stok
          </Link>
        </div>
        <ul className="divide-y divide-outline-variant/50 text-sm">
          {[
            ['Stok masuk — Kopi Kapal Api', '+50', '26 Mei 2026'],
            ['Penjualan — Indomie Goreng', '-12', '26 Mei 2026'],
            ['Penyesuaian — Teh Botol', '-2', '25 Mei 2026'],
          ].map(([judul, qty, tgl]) => (
            <li key={judul} className="flex justify-between py-3">
              <span>{judul}</span>
              <span className={qty.startsWith('+') ? 'font-bold text-success' : 'font-bold text-error'}>
                {qty}
              </span>
              <span className="text-on-surface-variant">{tgl}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
