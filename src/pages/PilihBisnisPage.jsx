import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

const TIPE = [
  { id: 'warung', ikon: 'store', label: 'Warung / Retail', desc: 'Sembako, warung kelontong' },
  { id: 'kafe', ikon: 'local_cafe', label: 'Kafe & Minuman', desc: 'Kopi, jus, snack' },
  { id: 'resto', ikon: 'restaurant', label: 'Restoran / F&B', desc: 'Makanan dengan meja' },
  { id: 'lain', ikon: 'category', label: 'Lainnya', desc: 'Jenis usaha lain' },
];

export default function PilihBisnisPage() {
  const navigate = useNavigate();
  const [pilih, setPilih] = useState('warung');

  return (
    <AuthLayout>
      <div className="w-full max-w-lg rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-semibold text-primary">Pilih Tipe Bisnis</h2>
        <p className="mt-1 text-sm text-on-surface-variant">
          Sesuaikan fitur Laku POS dengan jenis usaha Anda
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {TIPE.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setPilih(t.id)}
              className={`rounded-xl border p-4 text-left transition-all ${
                pilih === t.id
                  ? 'border-secondary bg-panel-tint ring-2 ring-secondary/20'
                  : 'border-outline-variant hover:border-secondary/50'
              }`}
            >
              <Icon name={t.ikon} className="text-primary-container" />
              <p className="mt-2 font-semibold text-primary">{t.label}</p>
              <p className="text-xs text-on-surface-variant">{t.desc}</p>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="btn-primary mt-8 w-full"
          onClick={() => navigate(ROUTES.ATUR_TOKO)}
        >
          Lanjutkan
        </button>
      </div>
    </AuthLayout>
  );
}
