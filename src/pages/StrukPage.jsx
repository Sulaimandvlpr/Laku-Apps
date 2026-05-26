import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

export default function StrukPage() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-primary">Struk Belanja Digital</h2>
        <p className="text-sm text-on-surface-variant">Transaksi #TRX-20260526-1042</p>
      </div>

      <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
        <div className="border-b border-dashed border-outline-variant pb-4 text-center">
          <p className="font-bold text-primary">Toko Maju Jaya</p>
          <p className="text-xs text-on-surface-variant">Jl. Merdeka No. 12, Jakarta</p>
          <p className="mt-2 text-xs">26 Mei 2026 · 14:32 WIB</p>
        </div>

        <ul className="my-4 space-y-2 text-sm">
          <li className="flex justify-between">
            <span>Kopi Susu Gula Aren ×2</span>
            <span>Rp 36.000</span>
          </li>
          <li className="flex justify-between">
            <span>Indomie Goreng ×1</span>
            <span>Rp 3.500</span>
          </li>
        </ul>

        <div className="space-y-1 border-t border-dashed border-outline-variant pt-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rp 39.500</span>
          </div>
          <div className="flex justify-between font-bold text-primary">
            <span>Total Bayar</span>
            <span>Rp 39.500</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span>Tunai</span>
            <span>Rp 50.000</span>
          </div>
          <div className="flex justify-between text-success">
            <span>Kembalian</span>
            <span>Rp 10.500</span>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-on-surface-variant">
          Terima kasih sudah berbelanja! Semangat jualan terus.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" className="btn-secondary flex flex-1 items-center justify-center gap-2">
          <Icon name="share" size={18} />
          Bagikan Struk
        </button>
        <button type="button" className="btn-primary flex flex-1 items-center justify-center gap-2">
          <Icon name="print" size={18} />
          Cetak
        </button>
      </div>

      <Link to={ROUTES.KASIR} className="block text-center text-sm text-secondary hover:underline">
        Transaksi Baru
      </Link>
      <Link to={ROUTES.DASHBOARD} className="block text-center text-sm text-on-surface-variant hover:underline">
        Ke Dashboard
      </Link>
    </div>
  );
}
