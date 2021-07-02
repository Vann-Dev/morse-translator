//utama
const models = require('./model')

function translate (seb) {
    const isi = seb //ini buat translate nya
    
    const hasil = isi.replace(/./g, x => `${models[x]}\u2001`).trim(); //ngereplace setiap huruf atau angka

  return hasil; //ini ngimport dari model.js
}

module.exports = translate //export hasil nya :V

//NOTE =>
//For those of you who open this file, and think if this code is less effective or something, I'm sorry, this is the second package I've ever made :)
//All this note is indonesian language :P
