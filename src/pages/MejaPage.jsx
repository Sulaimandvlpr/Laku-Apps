import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

const MEJA = [
  { no: 1, status: 'Kosong' },
  { no: 2, status: 'Terisi' },
  { no: 3, status: 'Kosong' },
  { no: 4, status: 'Pesan' },
  { no: 5, status: 'Terisi' },
  { no: 6, status: 'Kosong' },
];

export default function MejaPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Manajemen Meja</h2>
          <p className="text-sm text-on-surface-variant">Untuk restoran, kafe, dan F&B</p>
        </div>
        <Link to={ROUTES.KASIR} className="btn-primary">
          Buka Kasir Meja
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {MEJA.map((m) => (
          <button
            key={m.no}
            type="button"
            className={`glass-card p-6 text-center transition-all active:scale-95 ${
              m.status === 'Terisi' ? 'border-secondary ring-2 ring-secondary/20' : ''
            }`}
          >
            <Icon name="table_restaurant" className="mx-auto text-primary-container" size={32} />
            <p className="mt-2 font-bold text-primary">Meja {m.no}</p>
            <span
              className={`mt-2 inline-block rounded-full px-2 py-1 text-xs font-medium ${
                m.status === 'Kosong'
                  ? 'bg-green-100 text-green-800'
                  : m.status === 'Pesan'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-blue-100 text-blue-800'
              }`}
            >
              {m.status}
            </span>
          </button>
        ))}
      </div>

      <Link to={ROUTES.PENGATURAN} className="text-sm text-secondary hover:underline">
        ← Kembali ke pengaturan
      </Link>
    </div>
  );
}
