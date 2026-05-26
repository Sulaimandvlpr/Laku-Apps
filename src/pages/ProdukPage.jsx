import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import MetricCard from '../components/MetricCard';
import { ROUTES } from '../constants/routes';

const DATA = [
  { sku: 'PRD-001', nama: 'Kopi Kapal Api 65g', stok: 45, harga: 'Rp 6.000', status: 'Aman' },
  { sku: 'PRD-002', nama: 'Indomie Goreng', stok: 8, harga: 'Rp 3.500', status: 'Menipis' },
  { sku: 'PRD-003', nama: 'Teh Botol Sosro', stok: 0, harga: 'Rp 5.000', status: 'Habis' },
];

export default function ProdukPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Produk</h2>
          <p className="text-sm text-on-surface-variant">Kelola katalog dan harga jual</p>
        </div>
        <button type="button" className="btn-primary flex items-center justify-center gap-2">
          <Icon name="add" size={20} />
          Tambah Produk
        </button>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Total Produk" value="128" ikon="inventory_2" />
        <MetricCard label="Stok Menipis" value="5" sub="produk" ikon="trending_down" peringatan />
        <MetricCard label="Stok Habis" value="2" ikon="block" peringatan />
        <MetricCard label="Nilai Inventaris" value="Rp 24,5 jt" ikon="payments" />
      </section>

      <div className="glass-card overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-surface-container-low text-xs uppercase text-on-surface-variant">
            <tr>
              <th className="px-6 py-4">SKU</th>
              <th className="px-6 py-4">Nama Produk</th>
              <th className="px-6 py-4">Stok</th>
              <th className="px-6 py-4">Harga Jual</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((row) => (
              <tr key={row.sku} className="border-t border-outline-variant/50">
                <td className="px-6 py-4 font-mono text-xs">{row.sku}</td>
                <td className="px-6 py-4 font-medium text-primary">{row.nama}</td>
                <td className="px-6 py-4">{row.stok}</td>
                <td className="px-6 py-4">{row.harga}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      row.status === 'Aman'
                        ? 'bg-green-100 text-green-800'
                        : row.status === 'Menipis'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button type="button" className="text-secondary hover:underline">
                    Ubah
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-sm text-on-surface-variant">
        Belum ada produk?{' '}
        <Link to={ROUTES.PRODUK_KOSONG} className="font-medium text-secondary hover:underline">
          Lihat tampilan kosong
        </Link>
      </p>
    </div>
  );
}
