
var t = document.getElementById('tinggi');
var b = document.getElementById('berat');
var u = document.getElementById('usia')
var a = document.getElementById('level')
var submit = document.querySelector('.submit');
var rd1 = document.getElementById('rd1');
var rd2 = document.getElementById('rd2')
var hasil = document.querySelector('.hasil p')

submit.addEventListener('click', function(){
    var aktifitas = a.value
    var tinggi = t.value
    var berat = b.value
    var usia = u.value
    var gender = ''
    
    var totalberat = 0;
    var totalTinggi = 0;
    var totalUsia = 0;
    var kalori = 0;
    var tdee = 0;
    var resBmr = ''
    var resTdee = ''

    console.log(aktifitas)
    if(rd1.checked == true) {
        gender = rd1.value
    } else if(rd2.checked == true) {
        gender = rd2.value
    }

    // hitung BMR
    if(gender == 'male') {
        totalberat = 13.397*berat;
        totalTinggi = 4.799*tinggi;
        totalUsia = 5.677*usia;
        kalori = 88.362 + totalberat + totalTinggi - totalUsia;
        resBmr = 'Total BMR anda adalah ' + Math.round(kalori) + ' Kcals.';
    } else if(gender == 'female') {
        totalberat = 9.6*berat;
        totalTinggi = 1.9*tinggi;
        totalUsia = 4.7*usia;
        kalori = 655.1 + totalberat + totalTinggi - totalUsia;
        resBmr = 'Total BMR anda adalah ' + Math.round(kalori) + ' Kcals.';
    }

    // Hitung TDEE
    if(aktifitas == '1') {
        tdee = kalori*1.2;
    } else if(aktifitas == '2') {
        tdee = kalori*1.375;
    } else if(aktifitas == '3') {
        tdee = kalori*1.55;
    } else {
        tdee = kalori*1.725;
    }

    resTdee = 'Kebutuhan kalori (TDEE) Anda setiap hari adalah  ' + Math.round(tdee) + ' Kcals.';
    var res = resBmr + '<br>' +resTdee
    
    if(tinggi == 0 || berat == 0 || usia == 0 || gender == 0) {
        alert('Data tidak lengkap')
    } else if(isNaN(kalori) == true || isNaN(tdee) == true) {
        alert('Data yang anda masukan salah')
    } else {
        hasil.innerHTML = res
    }
    
})
