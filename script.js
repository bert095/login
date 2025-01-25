const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Mencegah form submit secara default
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (password === '12345') {
    message.textContent = 'Login berhasil!';
    // Redirect ke halaman administrasi setelah login berhasil
    window.location.href = 'https://www.komplexkocak.info/';
  } else {
    message.textContent = 'Password salah.';
  }
});
