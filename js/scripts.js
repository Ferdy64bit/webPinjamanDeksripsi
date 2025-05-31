
    function formatRupiah(angka) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(angka);
    }

    // Simulasi 6%
    const input6 = document.getElementById('angka6');
    const hasil6 = document.getElementById('hasil6');
    const checkboxes6 = document.querySelectorAll('.checkbox6');

    function updateHasil6() {
      const pinjaman = parseFloat(input6.value);
      if (isNaN(pinjaman) || pinjaman <= 0) {
        hasil6.textContent = 'Masukkan jumlah pinjaman terlebih dahulu.';
        return;
      }

      let hasilText = '';
      checkboxes6.forEach(checkbox => {
        if (checkbox.checked) {
          const bulan = parseInt(checkbox.value);
          const tahun = bulan / 12;
          const bunga = 0.06;
          const totalBunga = pinjaman * bunga * tahun;
          const totalBayar = pinjaman + totalBunga;
          const angsuran = totalBayar / bulan;

          hasilText +=
            `Tenor: ${bulan} bulan (${tahun} tahun)\n` +
            `Plafond: ${formatRupiah(pinjaman)}\n` +
            `Angsuran per Bulan: ${formatRupiah(angsuran)}\n\n`;
        }
      });

      hasil6.textContent = hasilText || 'Pilih setidaknya satu tenor.';
    }

    input6.addEventListener('input', updateHasil6);
    checkboxes6.forEach(cb => cb.addEventListener('change', updateHasil6));

    // Simulasi 22.25%
    const input22 = document.getElementById('angka22');
    const hasil22 = document.getElementById('hasil22');
    const checkboxes22 = document.querySelectorAll('.checkbox22');

    function updateHasil22() {
      const pinjaman = parseFloat(input22.value);
      if (isNaN(pinjaman) || pinjaman <= 0) {
        hasil22.textContent = 'Masukkan jumlah pinjaman terlebih dahulu.';
        return;
      }

      let hasilText = '';
      checkboxes22.forEach(checkbox => {
        if (checkbox.checked) {
          const bulan = parseInt(checkbox.value);
          const tahun = bulan / 12;
          const bunga = 0.2225;
          const totalBunga = pinjaman * bunga * tahun;
          const totalBayar = pinjaman + totalBunga;
          const angsuran = totalBayar / bulan;

          hasilText +=
            `Tenor: ${bulan} bulan (${tahun} tahun)\n` +
            `Plafond: ${formatRupiah(pinjaman)}\n` +
            `Angsuran per Bulan: ${formatRupiah(angsuran)}\n\n`;
        }
      });

      hasil22.textContent = hasilText || 'Pilih setidaknya satu tenor.';
    }

    input22.addEventListener('input', updateHasil22);
    checkboxes22.forEach(cb => cb.addEventListener('change', updateHasil22));
