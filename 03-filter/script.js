async function tampilkanDataFilter() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Gagal mengambil data!');

    const dataTim = await response.json();
    const ulContainer = document.getElementById('daftar-filter');

    // =========================================================================
    // JURUS .filter(): Hanya ambil data yang statusnya "Aktif"
    // =========================================================================
    const dataAktif = dataTim.filter(orang => orang.status === 'Aktif');

    // Ubah hasil filter menjadi HTML string pakai .map() lalu .join('')
    const arrayHtml = dataAktif.map(orang => {
      return `<li><strong>${orang.nama}</strong> - ${orang.role} (${orang.status})</li>`;
    });

    ulContainer.innerHTML = arrayHtml.join('');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

const tombolFilter = document.getElementById('btn-filter');
tombolFilter.addEventListener('click', tampilkanDataFilter);