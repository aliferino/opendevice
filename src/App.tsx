import { useState } from 'react'

// Komponen ini sengaja ditulis tanpa useMemo atau useCallback.
// Kalau React Compiler aktif, dia akan otomatis menambahkan memo cache.
function App() {
  const [count, setCount] = useState(0)

  const doubled = count * 2
  const label = `Angka: ${doubled}`

  return (
    <div>
      <p>{label}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  )
}

export default App
