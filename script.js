// Mengambil elemen form dari HTML
const formPemesanan = document.getElementById("formPemesanan");

// Mengambil bagian tabel tempat data pesanan akan ditampilkan
const tabelPesanan = document.getElementById("tabelPesanan");

// Nomor urut pesanan
let nomor = 1;


// Ketika form dikirim
formPemesanan.addEventListener("submit", function(event) {

    // Mencegah halaman melakukan refresh
    event.preventDefault();

    // Mengambil nilai dari form
    const nama = document.getElementById("nama").value.trim();
    const bahanAjar = document.getElementById("bahanAjar").value;
    const jumlah = document.getElementById("jumlah").value;


    // =========================
    // VALIDASI FORM
    // =========================

    if (nama === "") {
        alert("Nama pemesan harus diisi!");
        return;
    }

    if (bahanAjar === "") {
        alert("Silakan pilih bahan ajar!");
        return;
    }

    if (jumlah === "" || jumlah <= 0) {
        alert("Jumlah harus lebih dari 0!");
        return;
    }


    // =========================
    // MEMBUAT BARIS TABEL
    // =========================

    const baris = document.createElement("tr");

    baris.innerHTML = `
        <td>${nomor}</td>
        <td>${nama}</td>
        <td>${bahanAjar}</td>
        <td>${jumlah}</td>
        <td>Menunggu</td>
        <td>
            <button type="button" class="btn-hapus">
                Hapus
            </button>
        </td>
    `;


    // Memasukkan baris ke tabel
    tabelPesanan.appendChild(baris);

    nomor++;


    // =========================
    // TOMBOL HAPUS
    // =========================

    const tombolHapus = baris.querySelector(".btn-hapus");

    tombolHapus.addEventListener("click", function() {

        const konfirmasi = confirm(
            "Apakah Anda yakin ingin menghapus pesanan ini?"
        );

        if (konfirmasi) {
            baris.remove();
            alert("Pesanan berhasil dihapus.");
        }

    });


    // =========================
    // RESET FORM
    // =========================

    formPemesanan.reset();

    alert("Pesanan berhasil ditambahkan!");

});