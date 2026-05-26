import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

const NOTIF = [
  { ikon: 'warning', judul: 'Stok Kopi Kapal Api menipis', waktu: '5 menit lalu', ke: ROUTES.STOK },
  { ikon: 'check_circle', judul: 'Transaksi #1042 berhasil', waktu: '1 jam lalu', ke: ROUTES.STRUK },
  { ikon: 'bar_chart', judul: 'Laporan harian siap diunduh', waktu: 'Kemarin', ke: ROUTES.LAPORAN },
];

export default function NotifikasiPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Pusat Notifikasi</h2>
          <p className="text-sm text-on-surface-variant">Pemberitahuan penting untuk toko Anda</p>
        </div>
        <Link to={ROUTES.DASHBOARD} className="text-sm text-secondary hover:underline">
          Kembali
        </Link>
      </div>

      <ul className="space-y-2">
        {NOTIF.map((n) => (
          <li key={n.judul}>
            <Link
              to={n.ke}
              className="glass-card flex gap-4 p-4 transition-colors hover:bg-surface-container-low"
            >
              <Icon name={n.ikon} className="text-primary-container" />
              <div className="flex-1">
                <p className="font-medium text-primary">{n.judul}</p>
                <p className="text-xs text-on-surface-variant">{n.waktu}</p>
              </div>
              <Icon name="chevron_right" className="text-outline" />
            </Link>
          </li>
        ))}
      </ul>

      <button type="button" className="w-full text-center text-sm text-secondary hover:underline">
        Tandai semua sudah dibaca
      </button>
    </div>
  );
}
