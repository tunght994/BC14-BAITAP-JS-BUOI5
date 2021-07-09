document.getElementById('btnKetQua').addEventListener('click', ketQua)

function XetDiemUuTien(){  
    var diemUuTien = khuVuc() + doiTuong();
    return diemUuTien;
}

function khuVuc () {
    var kVa = document.getElementById('khuVucA').checked
    var kVb = document.getElementById('khuVucB').checked
    var kVc = document.getElementById('khuVucC').checked
    if(kVa){
        return 2;
    }
    if(kVb){
        return 1;
    }
    if(kVc){
        return 0.5;
    }
}

function doiTuong () {
    var dT1 = document.getElementById('doiTuong1').checked
    var dT2 = document.getElementById('doiTuong2').checked
    var dT3 = document.getElementById('doiTuong3').checked
    if(dT1){
        return 2.5;
    }
    if(dT2){
        return 1.5;
    }
    if(dT3){
        return 1;
    }
}

function ketQua () {
    var diemChuanIn= document.getElementById("inputDiemChuan").value;
    var diemChuan= parseInt(diemChuanIn);

    var mon1IP = document.getElementById('Mon1').value
    var Mon1 = parseFloat(mon1IP)
    var mon2IP = document.getElementById('Mon2').value
    var Mon2 = parseFloat(mon2IP)
    var mon3IP = document.getElementById('Mon3').value
    var Mon3 = parseFloat(mon3IP)

    if(Mon1 == 0 && Mon2 == 0 && Mon3 == 0){
        var divKetQua = document.getElementById('divKQ');
        divKetQua.style.display = 'block';

        var spanThongBao = document.getElementById('thongBao');
        spanThongBao.innerHTML = 'Rất tiếc, điểm số một trong ba môn của bạn không đạt!'
    }
    else{
        var uuTien = XetDiemUuTien();
        var tongKet = Mon1 + Mon2 + Mon3 + uuTien;

        if(tongKet >= diemChuan){
            var divKetQua = document.getElementById('divKQ');
            divKetQua.style.display = 'block';

            var spanThongBao = document.getElementById('thongBao');
            spanThongBao.innerHTML = 'Chúc mừng bạn đã trúng tuyển với số điểm là:'  + tongKet
        }
        else{
            var divKetQua = document.getElementById('divKQ');
            divKetQua.style.display = 'block';

            var spanThongBao = document.getElementById('thongBao');
            spanThongBao.innerHTML = 'Rất tiếc, điểm của bạn không đạt điểm tiêu chuẩn!'
        }
    }
}