import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

export default function MasukPage() {
  const navigate = useNavigate();
  const [passwordTerlihat, setPasswordTerlihat] = useState(false);
  const [memuat, setMemuat] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMemuat(true);
    setTimeout(() => {
      setMemuat(false);
      navigate(ROUTES.DASHBOARD);
    }, 800);
  };

  return (
    <AuthLayout>
      <div className="flex w-full max-w-[440px] flex-col items-center">
        <div className="mb-stack-lg text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container">
              <Icon name="point_of_sale" className="text-white" filled size={28} />
            </div>
            <h1 className="text-2xl font-semibold text-primary">Laku POS</h1>
          </div>
          <p className="text-sm text-on-surface-variant">Mitra Setia Bisnis Anda</p>
        </div>

        <div className="w-full rounded-xl border border-outline-variant bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-on-surface">Selamat Datang Kembali</h2>
            <p className="text-sm text-on-surface-variant">Silakan masuk ke akun Anda</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-medium text-on-surface-variant" htmlFor="hp">
                Nomor HP
              </label>
              <div className="relative">
                <Icon name="call" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={20} />
                <input id="hp" type="tel" required className="input-field" placeholder="081234567890" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-on-surface-variant" htmlFor="sandi">
                  Kata Sandi
                </label>
                <Link to={ROUTES.LUPA_PASSWORD} className="text-xs text-secondary hover:underline">
                  Lupa kata sandi?
                </Link>
              </div>
              <div className="relative">
                <Icon name="lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={20} />
                <input
                  id="sandi"
                  type={passwordTerlihat ? 'text' : 'password'}
                  required
                  className="input-field pr-12"
                  placeholder="Masukkan kata sandi"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline"
                  onClick={() => setPasswordTerlihat((v) => !v)}
                  aria-label="Tampilkan kata sandi"
                >
                  <Icon name={passwordTerlihat ? 'visibility_off' : 'visibility'} size={20} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={memuat}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container py-3.5 text-base font-medium text-white transition-all hover:brightness-110 disabled:opacity-70"
            >
              {memuat ? 'Memproses...' : 'Masuk'}
              {!memuat && <Icon name="login" size={20} />}
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4 text-outline">
            <div className="h-px flex-grow bg-outline-variant/30" />
            <span className="text-xs uppercase">Atau</span>
            <div className="h-px flex-grow bg-outline-variant/30" />
          </div>

          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-outline-variant py-2.5 text-sm hover:bg-surface-container-low"
          >
            Masuk dengan Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-on-surface-variant">
          Belum punya akun?{' '}
          <Link to={ROUTES.DAFTAR} className="font-bold text-accent-red hover:underline">
            Daftar gratis
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
