import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

export default function LaporanSelisihPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm">
        <Link to={ROUTES.LAPORAN} className="text-secondary hover:underline">
          Laporan
        </Link>
        <span className="text-on-surface-variant">/</span>
        <span className="text-on-surface">Selisih Stok</span>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Laporan Selisih Stok</h2>
          <p className="text-sm text-on-surface-variant">Perbandingan stok sistem vs stok fisik</p>
        </div>
        <button type="button" className="btn-secondary flex items-center gap-2">
          <Icon name="print" size={18} />
          Cetak Laporan
        </button>
      </div>

      <div className="glass-card overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="bg-surface-container-low text-xs uppercase text-on-surface-variant">
            <tr>
              <th className="px-4 py-3 text-left">Produk</th>
              <th className="px-4 py-3 text-right">Sistem</th>
              <th className="px-4 py-3 text-right">Fisik</th>
              <th className="px-4 py-3 text-right">Selisih</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Kopi Kapal Api', 45, 44, -1, 'Kurang'],
              ['Indomie Goreng', 30, 30, 0, 'Sesuai'],
              ['Teh Botol', 20, 22, 2, 'Lebih'],
            ].map(([nama, sys, fisik, sel, status]) => (
              <tr key={nama} className="border-t border-outline-variant/50">
                <td className="px-4 py-3 font-medium">{nama}</td>
                <td className="px-4 py-3 text-right">{sys}</td>
                <td className="px-4 py-3 text-right">{fisik}</td>
                <td className={`px-4 py-3 text-right font-bold ${sel === 0 ? '' : sel < 0 ? 'text-error' : 'text-warning'}`}>
                  {sel > 0 ? `+${sel}` : sel}
                </td>
                <td className="px-4 py-3">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
