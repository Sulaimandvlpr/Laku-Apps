import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

const MENU_LAPORAN = [
  { ke: ROUTES.LAPORAN_SELISIH, ikon: 'difference', judul: 'Selisih Stok', desc: 'Variance dan audit stok fisik' },
  { ke: ROUTES.DASHBOARD, ikon: 'account_balance', judul: 'Laba Rugi', desc: 'Laba kotor, laba bersih, dan biaya' },
  { ke: ROUTES.DASHBOARD, ikon: 'receipt_long', judul: 'Penjualan Harian', desc: 'Ringkasan transaksi per periode' },
  { ke: ROUTES.STOK, ikon: 'inventory', judul: 'Inventaris', desc: 'Nilai stok dan pergerakan barang' },
];

export default function LaporanPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-primary">Laporan</h2>
        <p className="text-sm text-on-surface-variant">Analisis bisnis dan performa toko</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {MENU_LAPORAN.map((item) => (
          <Link
            key={item.judul}
            to={item.ke}
            className="glass-card flex gap-4 p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-panel-tint">
              <Icon name={item.ikon} className="text-primary-container" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">{item.judul}</h3>
              <p className="text-sm text-on-surface-variant">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="glass-card p-6">
        <h3 className="font-semibold text-primary">Ringkasan Bulan Ini</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Pendapatan Kotor', 'Rp 28,4 jt'],
            ['Laba Kotor', 'Rp 18,2 jt'],
            ['Biaya Operasional', 'Rp 2,1 jt'],
            ['Laba Bersih', 'Rp 16,1 jt'],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg bg-surface-container-low p-4">
              <p className="text-xs text-on-surface-variant">{l}</p>
              <p className="mt-1 text-lg font-bold text-primary">{v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
