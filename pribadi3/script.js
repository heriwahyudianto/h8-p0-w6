function validateForm() {
	let valid = false;
	let userName = document.getElementById('username');
	let password = document.getElementById('password');
	let confirmPassword = document.getElementById('confirmPassword');
	let isContainA0 = /[a-zA-Z]/g.test(password.value) && /[0-9]/g.test(password.value);
	let email = document.getElementById('email');
	let confirmEmail = document.getElementById('confirmEmail');

	if (userName.value.length < 6) {
		alert('Username minimal 6 karakter');
	} else if (password.value === '') {
		alert('Password harus diisi');
	} else if (!isContainA0) {
		alert('Password harus kombinasi huruf dan angka');
	} else if (password.value !== confirmPassword.value) {
		alert('Password dan Confirm password harus sama');
	} else if (email.value === '') {
		alert('Email harus diisi');
	} else if (email.value !== confirmEmail.value) {
		alert('Email dan Confirm email harus sama');
	} else {
		valid = true;
	}
	return valid;
}