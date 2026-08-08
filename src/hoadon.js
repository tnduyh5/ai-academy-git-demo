// Xuất hoá đơn — ĐANG LÀM DỞ, mở PR nháp để đồng đội góp ý sớm về cấu trúc.
// Chưa làm: định dạng tiền tệ, gộp thuế, in ra PDF.

export function xuatHoaDon(donHang) {
  return {
    ma: donHang.ma,
    tong: donHang.tong,
  };
}
