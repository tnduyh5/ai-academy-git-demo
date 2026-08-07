// Gom nhiều đơn của cùng một bàn thành một giỏ hàng.
import { tinhTamTinh } from "./donhang.js";

export function tinhGioHang(cacDon) {
  return cacDon.map(tinhTamTinh).reduce((a, b) => a + b, 0);
}
