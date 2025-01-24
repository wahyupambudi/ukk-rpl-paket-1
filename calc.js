let button = document.querySelector(".container-button");
let screen = document.querySelector("#screen");

button.addEventListener("click", function (e) {
  let buttonClick = e.target;
  let nilaibutton = buttonClick.innerText;

  // Pastikan elemen yang diklik memiliki class "button"
  if (!buttonClick.classList.contains("button")) {
    return;
  }

  if (nilaibutton == "C") {
    screen.value = "";
  } else if (nilaibutton == "Del") {
    screen.value = screen.value.slice(0, -1);
  } else if (nilaibutton == "=" && screen.value == "") {
    alert("Silahkan Masukkan Angka!");
  } else if (nilaibutton == "=") {
    try {
      screen.value = eval(screen.value);
    } catch {
      alert("Input tidak valid!");
    }
  } else {
    // Logika untuk mengganti operator sebelumnya jika operator ditekan berurutan
    let lastChar = screen.value.slice(-1); // Karakter terakhir di layar
    let operators = [".","+", "-", "*", "/"]; // Daftar operator

    if (operators.includes(nilaibutton)) {
      if (operators.includes(lastChar)) {
        // Ganti operator terakhir dengan operator baru
        screen.value = screen.value.slice(0, -1) + nilaibutton;
      } else if (screen.value !== "") {
        // Tambahkan operator jika ada angka sebelumnya
        screen.value += nilaibutton;
      }
    } else {
      // Tambahkan nilai tombol ke layar jika bukan operator
      screen.value += nilaibutton;
    }
  }
});
