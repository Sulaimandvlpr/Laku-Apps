import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

export default function VerifikasiPage() {
  const navigate = useNavigate();
  const [kode, setKode] = useState(['', '', '', '', '', '']);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const baru = [...kode];
    baru[index] = value;
    setKode(baru);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-[440px] rounded-xl border border-outline-variant bg-white p-6 text-center shadow-sm md:p-8">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-panel-tint">
          <Icon name="sms" className="text-primary-container" size={28} />
        </div>
        <h2 className="text-xl font-semibold text-primary">Verifikasi Nomor HP</h2>
        <p className="mt-2 text-sm text-on-surface-variant">
          Masukkan kode 6 digit yang dikirim ke <strong>0812****7890</strong>
        </p>

        <div className="mt-8 flex justify-center gap-2">
          {kode.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              className="h-12 w-10 rounded-lg border border-outline-variant text-center text-lg font-bold focus:border-secondary focus:ring-2 focus:ring-secondary/10 md:w-12"
            />
          ))}
        </div>

        <button
          type="button"
          className="btn-primary mt-8 w-full"
          onClick={() => navigate(ROUTES.PILIH_BISNIS)}
        >
          Verifikasi
        </button>
        <button type="button" className="mt-4 text-sm text-secondary hover:underline">
          Kirim ulang kode (00:45)
        </button>
      </div>
    </AuthLayout>
  );
}
