import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import { ROUTES } from './constants/routes';

const MasukPage = lazy(() => import('./pages/MasukPage'));
const DaftarPage = lazy(() => import('./pages/DaftarPage'));
const VerifikasiPage = lazy(() => import('./pages/VerifikasiPage'));
const PilihBisnisPage = lazy(() => import('./pages/PilihBisnisPage'));
const AturTokoPage = lazy(() => import('./pages/AturTokoPage'));
const LupaPasswordPage = lazy(() => import('./pages/LupaPasswordPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const KasirPage = lazy(() => import('./pages/KasirPage'));
const ProdukPage = lazy(() => import('./pages/ProdukPage'));
const ProdukKosongPage = lazy(() => import('./pages/ProdukKosongPage'));
const StokPage = lazy(() => import('./pages/StokPage'));
const LaporanPage = lazy(() => import('./pages/LaporanPage'));
const LaporanSelisihPage = lazy(() => import('./pages/LaporanSelisihPage'));
const KaryawanPage = lazy(() => import('./pages/KaryawanPage'));
const PengaturanPage = lazy(() => import('./pages/PengaturanPage'));
const NotifikasiPage = lazy(() => import('./pages/NotifikasiPage'));
const MejaPage = lazy(() => import('./pages/MejaPage'));
const StrukPage = lazy(() => import('./pages/StrukPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function Muat() {
  return (
    <div className="flex min-h-screen items-center justify-center text-on-surface-variant">
      Memuat...
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Muat />}>
        <Routes>
          <Route path={ROUTES.BERANDA} element={<Navigate to={ROUTES.MASUK} replace />} />

          <Route path={ROUTES.MASUK} element={<MasukPage />} />
          <Route path={ROUTES.DAFTAR} element={<DaftarPage />} />
          <Route path={ROUTES.VERIFIKASI} element={<VerifikasiPage />} />
          <Route path={ROUTES.PILIH_BISNIS} element={<PilihBisnisPage />} />
          <Route path={ROUTES.ATUR_TOKO} element={<AturTokoPage />} />
          <Route path={ROUTES.LUPA_PASSWORD} element={<LupaPasswordPage />} />

          <Route element={<AppLayout />}>
            <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
            <Route path={ROUTES.KASIR} element={<KasirPage />} />
            <Route path={ROUTES.PRODUK} element={<ProdukPage />} />
            <Route path={ROUTES.PRODUK_KOSONG} element={<ProdukKosongPage />} />
            <Route path={ROUTES.STOK} element={<StokPage />} />
            <Route path={ROUTES.LAPORAN} element={<LaporanPage />} />
            <Route path={ROUTES.LAPORAN_SELISIH} element={<LaporanSelisihPage />} />
            <Route path={ROUTES.KARYAWAN} element={<KaryawanPage />} />
            <Route path={ROUTES.PENGATURAN} element={<PengaturanPage />} />
            <Route path={ROUTES.NOTIFIKASI} element={<NotifikasiPage />} />
            <Route path={ROUTES.MEJA} element={<MejaPage />} />
            <Route path={ROUTES.STRUK} element={<StrukPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
