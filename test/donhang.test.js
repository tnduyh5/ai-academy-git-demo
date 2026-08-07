import test from "node:test";
import assert from "node:assert/strict";
import { tinhTamTinh, apGiamGia } from "../src/donhang.js";

test("cộng tiền nhiều món", () => {
  const don = [
    { ten: "Phở bò", gia: 45000, soLuong: 2 },
    { ten: "Trà đá", gia: 3000, soLuong: 2 },
  ];
  assert.equal(tinhTamTinh(don), 96000);
});

test("đơn rỗng thì tổng bằng 0", () => {
  assert.equal(tinhTamTinh([]), 0);
});

test("giảm 10 phần trăm", () => {
  assert.equal(apGiamGia(100000, 10), 90000);
});
