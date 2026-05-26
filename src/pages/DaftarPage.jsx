import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

export default function DaftarPage() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="w-full max-w-[440px] rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6 text-center">
          <Icon name="person_add" className="text-primary-container" size={40} />
          <h2 className="mt-2 text-xl font-semibold text-primary">Buat Akun Baru</h2>
          <p className="text-sm text-on-surface-variant">Mulai kelola toko Anda dengan Laku POS</p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(ROUTES.VERIFIKASI);
          }}
        >
          <div>
            <label className="text-xs font-medium text-on-surface-variant">Nama Lengkap</label>
            <input required className="input-field !pl-4" placeholder="Contoh: Budi Santoso" />
          </div>
          <div>
            <label className="text-xs font-medium text-on-surface-variant">Nomor HP</label>
            <input required type="tel" className="input-field !pl-4" placeholder="08xxxxxxxxxx" />
          </div>
          <div>
            <label className="text-xs font-medium text-on-surface-variant">Kata Sandi</label>
            <input required type="password" className="input-field !pl-4" placeholder="Minimal 8 karakter" />
          </div>
          <button type="submit" className="btn-primary w-full">
            Lanjut Verifikasi
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-on-surface-variant">
          Sudah punya akun?{' '}
          <Link to={ROUTES.MASUK} className="font-bold text-secondary hover:underline">
            Masuk di sini
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
