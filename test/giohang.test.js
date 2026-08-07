import test from "node:test";
import assert from "node:assert/strict";
import { tinhGioHang } from "../src/giohang.js";

test("gộp hai đơn của cùng một bàn", () => {
  const don1 = [{ ten: "Phở bò", gia: 45000, soLuong: 1 }];
  const don2 = [{ ten: "Trà đá", gia: 3000, soLuong: 2 }];
  assert.equal(tinhGioHang([don1, don2]), 51000);
});
