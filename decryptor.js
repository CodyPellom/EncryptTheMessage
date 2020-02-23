let inputMsg = document.getElementById('inputMsg');
let decrpyt_Passphrase = document.getElementById('decrpyt_Passphrase');
let finished_decryption = document.getElementById('finished-decryption');


decryptSubmission = () => {
    var decryption = CryptoJS.AES.decrypt(inputMsg.value, decrpyt_Passphrase.value);
    finished_decryption.textContent = decryption;
}
