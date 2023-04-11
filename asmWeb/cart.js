var arrGH = [];

function them(obj) {
    var row = obj.parentNode.parentNode;
    var ten = row.children[0].innerText;
    var giasp = row.children[1].innerText;
    var sl = 1;

    var gia = giasp.substr(1);

    var idx = arrGH.findIndex(item => {
        return item.tensp == ten;
    });
    if (idx < 0) {
        var sp = {
            'tensp': ten,
            'gia': gia,
            'soluong': sl
        }
        arrGH.push(sp);
    } else {
        arrGH[idx].soluong += 1;
    }

    console.log(arrGH);
    loadGH();
}

function loadGH() {
    var str = `<tr>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th>Ső lượng</th>
                <th></th>
            </tr>`;
    arrGH.forEach((item) => {
        str += `<tr>
        <td>${item.tensp} </td>
        <td>${item.gia}</td>
        <td>
        <label onclick="giamSL(this, '${item.tensp}');">-</label>
        <input type="number" value="${item.soluong}">
        <label onclick="tangSL(this, '${item.tensp}');">+</label>
        </td>
        <td>
        <button type="button" onclick="xoa('${item.tensp}')">Xóa</button>
        </td>
    </tr>`;

    });
    document.getElementById("tblGioHang").innerHTML = str;
    tinhTong();
}

function tinhTong() {
    var tong = 0;
    arrGH.forEach((item) => {
        tong += item.gia * item.soluong;
    });
    document.querySelector("span").innerHTML = tong + "VND";
}

function xoa(tenSp) {
    var idx = arrGH.findIndex((item) => {
        return item.tensp == tenSp;
    });
    if (idx < 0) {
        alert("sao kì vậy ???");
    } else {
        if (confirm("bạn chắc là muốn xóa không cho 2s suy nghĩ lại đấy!"))
            arrGH.splice(idx, 1);
    }
    loadGH();
}

function giamSL(btnGiam, tenSp) {
    var inputSl = btnGiam.parentNode.children[1];
    var sl = inputSl.value;
    sl--;
    if (sl <= 0) {
        xoa(tenSp);
    }
    btnGiam.parentNode.children[1].value = sl;
    var idx = arrGH.findIndex((item) => {
        return item.tensp == tenSp;
    });
    arrGH[idx].soluong = sl;
    tinhTong();
}

function tangSL(btnTang, tenSp) {
    var inputSl = btnTang.parentNode.children[1];
    var sl = inputSl.value;
    sl++;
    btnTang.parentNode.children[1].value = sl;
    var idx = arrGH.findIndex((item) => {
        return item.tensp == tenSp;
    });
    arrGH[idx].soluong = sl;
    tinhTong();
}