const isAnagram = (str1, str2) => { // Fungsi anagram
    const normal = (str) => str.replace(/\s+/g, '').toLowerCase(); // Normalisasi string

    const str1normal = normal(str1); // Normalisasi string pertama
    const str2normal = normal(str2); // Normalisasi string kedua

    if (str1normal.length !== str2normal.length) { // Memeriksa panjang string
        return false; // Jika panjang berbeda, bukan anagram
    }

    const countChar = (str) => {
        const count = {};
        for (let char of str) {
            count[char] = (count[char] || 0) + 1;
        }
        return count; // Mengembalikan objek frekuensi
    }

    const str1char = countChar(str1normal); // Hitung frekuensi untuk string pertama
    const str2char = countChar(str2normal); // Hitung frekuensi untuk string kedua

    // Bandingkan frekuensi karakter
    for (let char in str1char) {
        if (str1char[char] !== str2char[char]) {
            return false; // Jika frekuensi tidak cocok, bukan anagram
        }
    }

    return true; // Jika semua frekuensi cocok, maka anagram
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
