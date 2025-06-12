document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk submit secara default

        // Reset status pesan
        formStatus.textContent = '';
        formStatus.className = 'form-status';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formStatus.textContent = 'Harap isi semua kolom yang wajib diisi.';
            formStatus.classList.add('error');
            return;
        }

        // Validasi format email dasar
        if (!isValidEmail(email)) {
            formStatus.textContent = 'Format email tidak valid.';
            formStatus.classList.add('error');
            return;
        }

        

        
        formStatus.textContent = 'Pesan Anda berhasil terkirim!';
        formStatus.classList.add('success');
        contactForm.reset(); 
    });

    function isValidEmail(email) {
        // Regex untuk validasi email dasar
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});