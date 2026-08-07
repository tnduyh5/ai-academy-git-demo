// Tính tiền cho một đơn hàng của quán ăn.

/**
 * Cộng tiền tất cả các món trong đơn.
 * @param {{ten: string, gia: number, soLuong: number}[]} monAn
 * @returns {number} tổng tiền trước khi giảm giá
 */
export function tinhTamTinh(monAn) {
  return monAn.reduce((tong, mon) => tong + mon.gia * mon.soLuong, 0);
}

/**
 * Áp mã giảm giá theo phần trăm.
 * @param {number} tamTinh
 * @param {number} phanTram  0–100
 * @returns {number} số tiền phải trả
 */
export function apGiamGia(tamTinh, phanTram) {
  return tamTinh - (tamTinh * phanTram) / 100;
}
