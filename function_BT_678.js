/********** bai 6 ************/
let n = +prompt("nhap n");

function soLonNhat(a){
    a.sort( function(a,b){
        return a - b;
    });
    return a[a.length - 1];
}
function nhapMang(a){
    let mang = [];
    for(let i = 0; i < a; i++){
        mang[i] = +prompt("nhap phan tu thu " + i);
    }
    return mang;
}
let mangMoi = nhapMang(n); 
let ketQua = soLonNhat(mangMoi);
console.log("so lon nhat trong mang la " + ketQua);


/********** bai 7 ************/
//kiem tra so chan, le, nguyen to, hoan hao.
// let num = +prompt("nhap vao mot so");
// let bienKT = true;
// function soChanLe(a){
//     if(a % 2 != 0) bienKT = false;
//     return bienKT;
   
// }

// let kiemTra = soChanLe(num);
// if(bienKT == true) console.log(num + " la so chan");
// else console.log(num + " la so le");

// function soNguyenTo(a){
//     if(a < 2) {
//         return  a + " khong phai so nguyen to";
//     } else if(a == 2) {
//         return a + " la so nguyen to";
//     } else {
//         for( let i = 2; i < a; i++){
//             if( a % i == 0){
//                 return a + " khong phai so nguyen to";
//                 break;
//             } else {
//                 return a + " la so ngyen to";
//             }
            
//         }
//     }
// }
// let ketQua1 = soNguyenTo(num);
// console.log(ketQua1);


// let mang = [];
// function soHoanThien(a){
//     let soMang = 0;
//     let b = parseInt(a/2);
//     for(let i = 1; i <= b; i++ ){
//         if(a % i == 0){
//             mang[soMang] = i;
//             soMang++;
//         }
        
//     }

//     let tong = 0;
//     for(let value of mang){
//         tong = tong + value;
//     }
//     if( tong == a){
//         return a + " la so hoan hao";
//     } else {
//         return a + " khong phai so hoan hao";
//     }
// }
// let ketQua2 = soHoanThien(num);
// console.log(ketQua2);


/********** bai 8 ************/
// trung binh cong cua mot mang so

// let mang = [];
// let n = +prompt("nhap vao n");

// function nhapMang(a){
//     let mang = [];
//     for(let i = 0; i < a; i++){
//         mang[i] = +prompt("nhap phan tu thu " + i);
//     }
//     return mang;
// }

// function trungBinh(a){
//     let tong = 0;
//     for(let i = 0; i < a.length; i++){
//         tong = tong + a[i];
//     }
//     return tong/(a.length);
// }
// let mangMoi = nhapMang(n);
// let ketQua = trungBinh(mangMoi);
// console.log(ketQua);