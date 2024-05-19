const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menampilkan menu dan mendapatkan input dari pengguna
function displayMenu() {
    console.log('\nKalkulator Sederhana');
    console.log('Pilih operasi:');
    console.log('1. Penjumlahan');
    console.log('2. Pengurangan');
    console.log('3. Perkalian');
    console.log('4. Pembagian');
    console.log('5. Keluar');
    rl.question('Masukkan pilihan Anda (1-5): ', handleMenuSelection);
}

// Fungsi untuk menangani pilihan menu
function handleMenuSelection(choice) {
    switch (choice) {
        case '1':
        case '2':
        case '3':
        case '4':
            rl.question('Masukkan angka pertama: ', (num1) => {
                rl.question('Masukkan angka kedua: ', (num2) => {
                    performCalculation(choice, parseFloat(num1), parseFloat(num2));
                });
            });
            break;
        case '5':
            console.log('Terima kasih telah menggunakan kalkulator ini!');
            rl.close();
            break;
        default:
            console.log('Pilihan tidak valid, silakan coba lagi.');
            displayMenu();
    }
}

// Fungsi untuk melakukan perhitungan
function performCalculation(choice, num1, num2) {
    let result;
    switch (choice) {
        case '1':
            result = num1 + num2;
            console.log(`Hasil: ${num1} + ${num2} = ${result}`);
            break;
        case '2':
            result = num1 - num2;
            console.log(`Hasil: ${num1} - ${num2} = ${result}`);
            break;
        case '3':
            result = num1 * num2;
            console.log(`Hasil: ${num1} * ${num2} = ${result}`);
            break;
        case '4':
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`Hasil: ${num1} / ${num2} = ${result}`);
            } else {
                console.log('Kesalahan: Pembagian dengan nol tidak diperbolehkan.');
            }
            break;
    }
    displayMenu();
}

// Memulai kalkulator dengan menampilkan menu
displayMenu();
