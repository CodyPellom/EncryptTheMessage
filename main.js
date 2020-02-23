let msg = document.getElementById('msg');
let pass = document.getElementById('passphrase');
let notifications = document.getElementById('notifications');
let results = document.getElementById('results');
let finished_encrypt = document.getElementById('finished-encryption');
let finished_decryption = document.getElementById('finished-decryption');
let message_text = document.getElementById('message-text');


var storage = [];

submission = () => {
    var encrypt = CryptoJS.AES.encrypt(msg.value, pass.value);
    var decrypt = CryptoJS.AES.decrypt(encrypt, pass.value);
    var decryptedMessage = decrypt.toString(CryptoJS.enc.Utf8);
    storage.push(encrypt.ciphertext,decrypt,decryptedMessage);
    console.log(storage);
    notifications.innerHTML = 'Encrypted Message Available'
}

showMessage = () => {
    finished_encrypt.innerHTML = storage[0];
    finished_decryption.innerHTML = storage[1];
    message_text.innerHTML = storage[2];
}