document.getElementById('btnTienDien').addEventListener('click', TinhTienDienTT)

function TinhTienDienTT(){
    var hoTen = document.getElementById('Name').value;
    var soTienDien = dienTieuThu();
    var divKetQua = document.getElementById('divKetQua');
    divKetQua.style.display = 'block';

    var p = 'Số tiền điện tiêu thụ của khách hàng'  + hoTen + ' là: ' + soTienDien + ' VNĐ.';

    var spanThongBao = document.getElementById('ThongBao');
    spanThongBao.innerHTML = p;
}

function dienTieuThu(){
    var dienTieuThu = document.getElementById('soDienTieuThu').value;

    dienTieuThu = parseInt(dienTieuThu);

    if(dienTieuThu <= 50){
        return dienTieuThu * 500;
    }
    if(dienTieuThu > 50 && dienTieuThu <=100){
        return 50 *500 + (dienTieuThu - 50) *650;
    }
    if(dienTieuThu > 100 && dienTieuThu <= 200){
        return 50 * 500 + 50 * 650 + (dienTieuThu - 100) * 850;
    }
    if(dienTieuThu > 200 && dienTieuThu <=350){
        return 50 * 500 + 50 * 650 + 100 * 850 + (dtt - 200) * 1100;
    }
    else{
        return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (dienTieuThu - 350) * 1300;
    }
    
}