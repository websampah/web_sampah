alert("Selamat datang di Bank Sampah!");

console.log("Bank Sampah berhasil dijalankan!");

const tombol = document.getElementById("hitungBtn");

if (tombol) {
    tombol.addEventListener("click", function () {
        const berat = Number(document.getElementById("berat").value);
        const harga = Number(document.getElementById("harga").value);

        if (berat <= 0 || harga <= 0) {
            alert("Masukkan berat dan harga terlebih dahulu!");
            return;
        }

        const total = berat * harga;

        document.getElementById("hasil").innerHTML =
            "💰 Total harga: Rp " +
            total.toLocaleString("id-ID");
    });
}
