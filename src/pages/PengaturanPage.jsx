import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

const PENGATURAN = [
  { ikon: 'store', label: 'Profil Toko', desc: 'Nama, alamat, logo', ke: ROUTES.ATUR_TOKO },
  { ikon: 'notifications', label: 'Notifikasi', desc: 'Stok menipis, laporan harian', ke: ROUTES.NOTIFIKASI },
  { ikon: 'table_restaurant', label: 'Manajemen Meja', desc: 'Untuk restoran & kafe', ke: ROUTES.MEJA },
  { ikon: 'receipt', label: 'Struk & Printer', desc: 'Format struk digital', ke: ROUTES.STRUK },
  { ikon: 'lock', label: 'Keamanan Akun', desc: 'Kata sandi dan PIN kasir', ke: ROUTES.LUPA_PASSWORD },
];

export default function PengaturanPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-primary">Pengaturan Aplikasi</h2>
        <p className="text-sm text-on-surface-variant">Sesuaikan toko dan preferensi sistem</p>
      </div>

      <div className="space-y-2">
        {PENGATURAN.map((item) => (
          <Link
            key={item.label}
            to={item.ke}
            className="glass-card flex items-center gap-4 p-4 transition-colors hover:bg-surface-container-low"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-panel-tint">
              <Icon name={item.ikon} className="text-primary-container" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-primary">{item.label}</p>
              <p className="text-sm text-on-surface-variant">{item.desc}</p>
            </div>
            <Icon name="chevron_right" className="text-outline" />
          </Link>
        ))}
      </div>

      <div className="glass-card p-6">
        <h3 className="font-semibold text-primary">Preferensi Tampilan</h3>
        <label className="mt-4 flex items-center justify-between">
          <span className="text-sm">Mode gelap (segera hadir)</span>
          <input type="checkbox" disabled className="rounded" />
        </label>
        <label className="mt-3 flex items-center justify-between">
          <span className="text-sm">Bahasa Indonesia</span>
          <span className="text-xs font-medium text-success">Aktif</span>
        </label>
      </div>

      <button
        type="button"
        className="text-sm font-medium text-error hover:underline"
        onClick={() => navigate(ROUTES.MASUK)}
      >
        Keluar dari Akun
      </button>
    </div>
  );
}
