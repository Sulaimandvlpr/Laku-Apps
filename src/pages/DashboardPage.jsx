import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import MetricCard from '../components/MetricCard';
import { ROUTES } from '../constants/routes';

const TERLARIS = [
  { nama: 'Kopi Kapal Api 65g', kat: 'Sembako', jml: '24 Item', total: 'Rp 144.000' },
  { nama: 'Indomie Goreng Original', kat: 'Mie Instan', jml: '18 Item', total: 'Rp 54.000' },
];

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#FDE68A] bg-[#FFF9E6] px-4 py-3 text-[#92400E]">
        <div className="flex items-center gap-2 text-sm">
          <Icon name="report_problem" size={20} />
          <span>3 produk hampir habis stoknya — Cek sekarang</span>
        </div>
        <Link to={ROUTES.PRODUK} className="text-xs font-bold underline">
          Lihat Produk
        </Link>
      </div>

      <section className="relative overflow-hidden rounded-xl bg-primary-container p-6 text-on-primary md:p-8">
        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Selamat pagi, Pak Harto!</h2>
            <p className="mt-1 opacity-80">Warung Pak Budi — Semangat jualan hari ini!</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm hover:bg-white/20"
              onClick={() => navigate(ROUTES.LAPORAN)}
            >
              Lihat Laporan
            </button>
            <button
              type="button"
              className="rounded-lg bg-tertiary-container px-5 py-2.5 text-sm font-medium text-white active:scale-95"
              onClick={() => navigate(ROUTES.KASIR)}
            >
              Mulai Transaksi
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Pendapatan Hari Ini" value="Rp 847.500" ikon="account_balance_wallet" />
        <MetricCard label="Transaksi" value="34" sub="transaksi" ikon="shopping_bag" />
        <MetricCard label="Produk Terjual" value="89" sub="item" ikon="package_2" />
        <MetricCard label="Stok Perlu Diisi" value="3" sub="produk" ikon="warning" peringatan />
      </section>

      <section className="glass-card p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-primary">Grafik Pendapatan</h3>
            <p className="text-sm text-on-surface-variant">Ikhtisar penjualan 7 hari terakhir</p>
          </div>
          <div className="flex rounded-lg border border-outline-variant bg-surface-container-low p-1">
            {['7H', '30H', '3B'].map((t, i) => (
              <button
                key={t}
                type="button"
                className={`rounded-md px-4 py-1.5 text-xs font-medium ${
                  i === 0 ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="flex h-48 items-end justify-between gap-2 px-2 md:px-8">
          {[40, 60, 55, 85, 70, 95, 80].map((h, i) => (
            <div
              key={i}
              className={`w-full max-w-12 flex-1 rounded-t-lg transition-colors ${
                i === 6 ? 'bg-primary-container' : 'bg-primary/20 hover:bg-primary/40'
              }`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-between px-2 text-xs text-on-surface-variant md:px-8">
          {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((d, i) => (
            <span key={d} className={i === 6 ? 'font-bold text-primary' : ''}>
              {d}
            </span>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="glass-card flex flex-col">
          <div className="flex items-center justify-between border-b border-outline-variant p-4 md:p-6">
            <h3 className="font-semibold text-primary">Produk Terlaris Hari Ini</h3>
            <Link to={ROUTES.PRODUK} className="text-xs text-secondary hover:underline">
              Lihat Semua
            </Link>
          </div>
          <div className="space-y-1 p-4">
            {TERLARIS.map((p) => (
              <div
                key={p.nama}
                className="flex items-center justify-between rounded-lg p-3 hover:bg-surface-container-low"
              >
                <div>
                  <p className="text-sm font-semibold text-primary">{p.nama}</p>
                  <p className="text-xs text-on-surface-variant">Kategori: {p.kat}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">{p.jml}</p>
                  <p className="text-xs text-success">{p.total}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card overflow-hidden">
          <div className="border-b border-outline-variant p-4 md:p-6">
            <h3 className="font-semibold text-primary">Ringkasan Keuangan</h3>
            <p className="text-sm text-on-surface-variant">Periode hari ini</p>
          </div>
          <div className="divide-y divide-outline-variant/50 p-4">
            {[
              ['Pendapatan Kotor', 'Rp 920.000'],
              ['Harga Pokok Penjualan', 'Rp 312.000'],
              ['Laba Kotor', 'Rp 608.000'],
              ['Biaya Operasional', 'Rp 45.000'],
              ['Laba Bersih', 'Rp 563.000'],
            ].map(([label, nilai]) => (
              <div key={label} className="flex justify-between py-3 text-sm">
                <span className={label === 'Laba Bersih' ? 'font-bold text-primary' : 'text-on-surface-variant'}>
                  {label}
                </span>
                <span className={label === 'Laba Bersih' ? 'font-bold text-success' : 'font-semibold'}>
                  {nilai}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
