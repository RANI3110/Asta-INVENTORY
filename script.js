document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form agar tidak mengirimkan data secara default
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });
  
    // Menampilkan data yang diinputkan
    console.log(data);
    alert("Data berhasil disubmit!");
  });
  