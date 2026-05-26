import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

const LANGKAH = ['Info Toko', 'Tambah Produk', 'Selesai'];

export default function AturTokoPage() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="w-full max-w-lg rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6 flex justify-between gap-2">
          {LANGKAH.map((l, i) => (
            <div key={l} className="flex-1 text-center">
              <div
                className={`mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  i === 0 ? 'bg-primary-container text-white' : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                {i + 1}
              </div>
              <span className="text-[10px] text-on-surface-variant md:text-xs">{l}</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-primary">Pengaturan Toko Baru</h2>
        <p className="text-sm text-on-surface-variant">Lengkapi informasi dasar toko Anda</p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(ROUTES.DASHBOARD);
          }}
        >
          <div>
            <label className="text-xs font-medium text-on-surface-variant">Nama Toko</label>
            <input required className="input-field !pl-4" placeholder="Warung Pak Budi" />
          </div>
          <div>
            <label className="text-xs font-medium text-on-surface-variant">Alamat</label>
            <textarea
              rows={2}
              className="w-full rounded-lg border border-outline-variant p-3 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary/10"
              placeholder="Jl. Merdeka No. 12"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-on-surface-variant">Mata Uang</label>
            <select className="w-full rounded-lg border border-outline-variant p-3 text-sm">
              <option>Rupiah (IDR)</option>
            </select>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" className="btn-secondary flex-1" onClick={() => navigate(ROUTES.PILIH_BISNIS)}>
              Kembali
            </button>
            <button type="submit" className="btn-primary flex-1">
              Simpan & Masuk Dashboard
            </button>
          </div>
        </form>

        <p className="mt-4 flex items-center gap-2 text-xs text-on-surface-variant">
          <Icon name="info" size={16} />
          Anda bisa menambah produk nanti dari menu Produk
        </p>
      </div>
    </AuthLayout>
  );
}
