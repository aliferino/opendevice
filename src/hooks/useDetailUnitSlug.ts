import { useParams } from 'react-router-dom'

/**
 * Ambil parameter slug dari alamat halaman detail unit.
 *
 * Dipisah menjadi hook supaya komponen halaman detail tetap murni menerima
 * slug sebagai prop, sehingga mudah diuji tanpa router dan tidak bergantung
 * pada struktur rute.
 *
 * Bila parameter tidak ada, string kosong dikembalikan. Halaman detail akan
 * memperlakukannya sebagai unit tidak dikenal dan merender halaman 404.
 */
export function useDetailUnitSlug(): string {
  const params = useParams<{ slug?: string }>()
  return params.slug ?? ''
}
