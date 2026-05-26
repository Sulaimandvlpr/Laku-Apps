import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { ROUTES } from '../constants/routes';

const KATEGORI = ['Semua', 'Minuman', 'Makanan', 'Snack', 'Lainnya'];
const PRODUK = [
  { id: 1, nama: 'Kopi Susu Gula Aren', harga: 18000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_OcFIZHnke54KTkJANNs4Vuf1ceR1-EfKIPuxI7zOLU7yCsmvlfcK20FAO__c1neWvEDoCNqm3q941huDJYqeMmETXsuSeZUZqae6pF0TOl3vqxnVqHig4Z-bBw0pbkn99cAisB6GPaH8UKXqseH3A12ajSHMj0gKZhanhKfHiH5TknwQtDdBq2GVdSa953WFiBJH0oE8-zg7JOgQpEa4n_c8V_OTOerQxretc9Xgg6tYHpgKueq0St7LT87gJXjjGfkKxACyMGA' },
  { id: 2, nama: 'Teh Tarik Manis', harga: 12000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLtkpBzZ9m57Yv66HAUoQk8TbGnQyATzHdp6_JxP6t9dD1pyn3RZYFpuHoIG0JAHpEOuME9BQQ3ItIcztG0IHIUw37Px7_nc5hqPuB0zPdIB8TToGcwfBYE3Y3XzdPS4blHBJ1g18P4h8hXs2-yKnku7c6sPQkozUmiq9Kt81H9ND2kebikms43Nm-cV3oJ7UWfeCgMplTTk85-4m2ixOt2Jw9GLy7PnBizFrlb8vueetrLDCvI60GEhdKgM9gkF549SjqAp_bTUo' },
  { id: 3, nama: 'Indomie Goreng', harga: 3500, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbEoBUq_fSrpdfBGiuC5IXgL-YkMtk40q7CpSO2W1-z9QkB2TNlEHXsrXsDb1QM_2ChYmVGyeREwEKIfAowoonD7XHmBDjOZy0356MWm95t7ymw4PzvKbu9LqDC6FwRsIcmJCKVDOXRX3VwnPck6TWcp2JzMvfznE5TSsvvZMbNKuMZfm5sTVcvqL5EIE_uUqffV1RLoyGzBHKB4hKaxAIuWA81ONYczDVOuTLahpzlUV2hM7BS4_l5r8HwoXXxOMh1fwlGVlT8hc' },
];

function formatRupiah(n) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
}

export default function KasirPage() {
  const navigate = useNavigate();
  const [keranjang, setKeranjang] = useState([]);
  const [kategori, setKategori] = useState('Semua');

  const tambah = (produk) => {
    setKeranjang((prev) => {
      const ada = prev.find((x) => x.id === produk.id);
      if (ada) return prev.map((x) => (x.id === produk.id ? { ...x, qty: x.qty + 1 } : x));
      return [...prev, { ...produk, qty: 1 }];
    });
  };

  const total = keranjang.reduce((s, i) => s + i.harga * i.qty, 0);

  return (
    <div className="-mx-4 -mt-4 flex min-h-[calc(100vh-4rem)] flex-col md:-mx-container-padding md:-mt-0 md:min-h-[calc(100vh-8rem)] lg:flex-row">
      <section className="flex min-h-0 flex-1 flex-col border-b border-outline-variant lg:border-r lg:border-b-0 lg:w-[58%]">
        <div className="border-b border-surface-variant bg-white p-3">
          <div className="flex gap-2 overflow-x-auto">
            {KATEGORI.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKategori(k)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium ${
                  kategori === k
                    ? 'bg-primary text-white'
                    : 'border border-outline-variant/30 bg-surface-container-low'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto p-3 sm:grid-cols-3">
          {PRODUK.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => tambah(p)}
              className="overflow-hidden rounded-xl border border-outline-variant bg-white text-left active:scale-[0.98]"
            >
              <img src={p.img} alt={p.nama} className="h-24 w-full object-cover sm:h-28" />
              <div className="p-3">
                <h3 className="line-clamp-1 text-sm font-bold text-primary">{p.nama}</h3>
                <p className="text-sm font-bold text-secondary">{formatRupiah(p.harga)}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="flex min-h-[280px] flex-col bg-white lg:w-[42%]">
        <div className="flex items-center justify-between border-b border-outline-variant p-4">
          <h3 className="font-semibold text-primary">Keranjang ({keranjang.length})</h3>
          <button type="button" className="text-xs text-error" onClick={() => setKeranjang([])} disabled={!keranjang.length}>
            Kosongkan
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {!keranjang.length ? (
            <p className="text-center text-sm text-on-surface-variant">Pilih produk untuk mulai transaksi</p>
          ) : (
            keranjang.map((item) => (
              <div key={item.id} className="mb-3 flex justify-between text-sm">
                <span>
                  {item.nama} × {item.qty}
                </span>
                <span className="font-semibold">{formatRupiah(item.harga * item.qty)}</span>
              </div>
            ))
          )}
        </div>
        <div className="space-y-3 border-t border-outline-variant p-4">
          <div className="flex justify-between text-lg font-bold text-primary">
            <span>Total Bayar</span>
            <span>{formatRupiah(total)}</span>
          </div>
          <button
            type="button"
            disabled={!keranjang.length}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container py-3.5 font-semibold text-white disabled:opacity-50"
            onClick={() => navigate(ROUTES.STRUK)}
          >
            <Icon name="payments" size={20} />
            Bayar Sekarang
          </button>
        </div>
      </section>
    </div>
  );
}
