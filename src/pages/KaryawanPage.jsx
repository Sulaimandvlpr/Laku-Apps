import Icon from '../components/Icon';

const KARYAWAN = [
  { nama: 'Siti Aminah', peran: 'Kasir', status: 'Aktif' },
  { nama: 'Rudi Hartono', peran: 'Kasir', status: 'Aktif' },
  { nama: 'Dewi Lestari', peran: 'Manajer', status: 'Aktif' },
];

export default function KaryawanPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Karyawan & Peran</h2>
          <p className="text-sm text-on-surface-variant">Atur akses kasir, manajer, dan pemilik</p>
        </div>
        <button type="button" className="btn-primary flex items-center gap-2">
          <Icon name="person_add" />
          Tambah Karyawan
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {KARYAWAN.map((k) => (
          <div key={k.nama} className="glass-card p-5">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-panel-tint">
              <Icon name="person" className="text-primary-container" />
            </div>
            <h3 className="font-semibold text-primary">{k.nama}</h3>
            <p className="text-sm text-on-surface-variant">{k.peran}</p>
            <span className="mt-3 inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
              {k.status}
            </span>
          </div>
        ))}
      </div>

      <div className="glass-card p-6">
        <h3 className="mb-4 font-semibold text-primary">Hak Akses Peran</h3>
        <div className="grid gap-3 text-sm md:grid-cols-3">
          {[
            ['Pemilik', 'Semua fitur + laporan keuangan'],
            ['Manajer', 'Produk, stok, laporan operasional'],
            ['Kasir', 'Hanya layar kasir dan struk'],
          ].map(([peran, hak]) => (
            <div key={peran} className="rounded-lg border border-outline-variant p-4">
              <p className="font-bold text-primary">{peran}</p>
              <p className="mt-1 text-on-surface-variant">{hak}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
