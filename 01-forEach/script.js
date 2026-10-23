// ====================================================
// forEach
// ====================================================
// struktur sintkas


const btn = document.getElementById('tekan')


// async: Menandakan bahwa fungsi ini berjalan secara asynchronous (butuh waktu tunggu)
async function tampilkanDataTim() {
  try {
    
    // 1. fetch(): Mengambil file data.json dari folder lokal
    // 2. await: Menahan proses selanjutnya sampai file data.json selesai ditarik sepenuhnya
    const response = await fetch('data.json');

    // 3. !response.ok: Mengecek apakah status HTTP sukses (rentang 200-299)
    if (!response.ok) {
      throw new Error(`Gagal mengambil data! Status: ${response.status}`);
    }

    // 4. .json(): Membongkar paket data mentah dari fetch menjadi array/objek JavaScript
    const dataTim = await response.json();
    console.log(dataTim);
    
    

    // 5. document.getElementById(): Menangkap elemen HTML <ul> berdasarkan ID-nya
    const ulContainer = document.getElementById('daftar-tim');
    // Kosongkan isi <ul> terlebih dahulu setiap kali fungsi dijalankan
    ulContainer.innerHTML = '';

    // 6. .forEach(): Metode array untuk mengunjungi setiap data satu per satu
    dataTim.forEach(orang => {
      
      // 7. document.createElement(): Membuat elemen tag <li> baru secara dinamis di memori browser
      const li = document.createElement('li');
      
      // 8. .textContent & Template Literals (`...`): Mengisi teks ke dalam <li> dengan data dinamis
      li.textContent = `nama :  ${orang.nama} - saya adalah : ${orang.role}`;
      
      // 9. .appendChild(): Menempelkan elemen <li> yang sudah jadi ke dalam wadah <ul> di HTML
      ulContainer.appendChild(li);

    });

  } catch (error) {
    // Menangkap dan mencetak error ke console jika ada masalah di blok try
    console.error('Waduh, ada error:', error.message);
  }
}

// Menjalankan fungsi utama saat script dimuat
btn.addEventListener('click', tampilkanDataTim);