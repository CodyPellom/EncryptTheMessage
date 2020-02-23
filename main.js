let msg = document.getElementById('msg');
let pass = document.getElementById('passphrase');
let results = document.getElementById('results');
let finished_encrypt = document.getElementById('finished-encryption');
let finished_decryption = document.getElementById('finished-decryption');
let message_text = document.getElementById('message-text'); 


submission = () => {
    var encrypt = CryptoJS.AES.encrypt(msg.value, pass.value);    
    var decrypt = CryptoJS.AES.decrypt(encrypt, pass.value);
    var decryptedMessage = decrypt.toString(CryptoJS.enc.Utf8);
    

    finished_encrypt.innerHTML = encrypt.ciphertext;
    finished_decryption.innerHTML = decrypt;
    message_text.innerHTML = decryptedMessage;

}







