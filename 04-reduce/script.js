async function hitungDataReduce() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Gagal mengambil data!');

    const dataTim = await response.json();
    const infoContainer = document.getElementById('info-reduce');

    // =========================================================================
    // JURUS .reduce(): Menghitung jumlah total anggota tim
    // =========================================================================
    const totalAnggota = dataTim.reduce((accumulator, orang) => {
      return accumulator + 1;
    }, 0); // Angka 0 di ujung adalah nilai awal (initial value) dari accumulator

    // =========================================================================
    // JURUS .reduce(): Menghitung berapa orang yang statusnya "Aktif"
    // =========================================================================
    const totalAktif = dataTim.reduce((total, orang) => {
      if (orang.status === 'Aktif') {
        return total + 1;
      }
      return total;
    }, 0);

    // Tampilkan hasil rangkuman ke HTML
    infoContainer.innerHTML = `
      <li>Total Seluruh Anggota: <strong>${totalAnggota} orang</strong></li>
      <li>Anggota yang Aktif: <strong>${totalAktif} orang</strong></li>
    `;

  } catch (error) {
    console.error('Error:', error.message);
  }
}

const tombolReduce = document.getElementById('btn-reduce');
tombolReduce.addEventListener('click', hitungDataReduce);