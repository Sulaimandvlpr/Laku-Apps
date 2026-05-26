import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <Icon name="error_outline" className="text-outline" size={64} />
      <h1 className="mt-4 text-2xl font-bold text-primary">Halaman Tidak Ditemukan</h1>
      <p className="mt-2 text-sm text-on-surface-variant">
        Maaf, alamat yang Anda buka tidak tersedia.
      </p>
      <Link to={ROUTES.DASHBOARD} className="btn-primary mt-8">
        Kembali ke Dashboard
      </Link>
    </div>
  );
}
