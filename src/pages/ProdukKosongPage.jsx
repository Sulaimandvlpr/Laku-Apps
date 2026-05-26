import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

export default function ProdukKosongPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-panel-tint">
        <Icon name="inventory_2" className="text-primary-container/40" size={64} />
      </div>
      <h2 className="text-xl font-semibold text-primary">Belum Ada Produk</h2>
      <p className="mt-2 max-w-md text-sm text-on-surface-variant">
        Yuk, tambahkan produk pertama Anda agar bisa mulai berjualan di kasir.
      </p>
      <button type="button" className="btn-primary mt-8 flex items-center gap-2">
        <Icon name="add" />
        Tambah Produk Pertama
      </button>
      <Link to={ROUTES.PRODUK} className="mt-4 text-sm text-secondary hover:underline">
        Kembali ke daftar produk
      </Link>
    </div>
  );
}
