async function tampilkanDataMap() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Gagal mengambil data!');

    const dataTim = await response.json();
    const ulContainer = document.getElementById('daftar-map');

    // 1. GUNAKAN .map() UNTUK MENGUBAH DATA MENJADI ARRAY HTML STRING
    // .map() akan melooping dan mereturn satu per satu elemen string <li> 
    const arrayHtml = dataTim.map(orang => {
      return `<li><strong>${orang.nama}</strong> - ${orang.role} (${orang.status})</li>`;
    });

    // Cek di console untuk melihat wujud asli hasil .map() (berupa array of strings)
    console.log("Hasil .map():", arrayHtml);

    // 2. GUNAKAN .join('') 
    // Menggabungkan seluruh isi array string di atas menjadi satu string utuh tanpa pemisah koma
    ulContainer.innerHTML = arrayHtml.join('');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Pasang event listener ke tombol
const tombolMap = document.getElementById('btn-map');
tombolMap.addEventListener('click', tampilkanDataMap);