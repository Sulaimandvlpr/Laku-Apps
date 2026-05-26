import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { ROUTES } from '../constants/routes';

export default function LupaPasswordPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-[440px] rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-semibold text-primary">Atur Ulang Kata Sandi</h2>
        <p className="mt-1 text-sm text-on-surface-variant">
          Masukkan nomor HP terdaftar. Kami akan mengirim tautan reset.
        </p>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="tel" required className="input-field !pl-4" placeholder="08xxxxxxxxxx" />
          <button type="submit" className="btn-primary w-full">
            Kirim Tautan Reset
          </button>
        </form>
        <Link to={ROUTES.MASUK} className="mt-4 block text-center text-sm text-secondary hover:underline">
          Kembali ke halaman masuk
        </Link>
      </div>
    </AuthLayout>
  );
}
