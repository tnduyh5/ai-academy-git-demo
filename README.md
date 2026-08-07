# Quản lý đơn hàng — repo demo của AI Academy

Repo này tồn tại để **dạy Git và GitHub**. Mọi nhánh, Pull Request, Issue và lần chạy CI ở
đây đều được dựng có chủ ý để minh hoạ một bài học cụ thể trong track
`06-git-github` của AI Academy.

Đây là một ứng dụng nhỏ tính tiền đơn hàng cho một quán ăn: nhận danh sách món, tính tổng
tiền, áp mã giảm giá.

## Chạy thử

```bash
npm test
```

Không cần cài gì thêm — bài kiểm dùng thẳng bộ chạy test có sẵn của Node (từ Node 18).

## Cấu trúc

| Đường dẫn                  | Nội dung                          |
| -------------------------- | --------------------------------- |
| `src/donhang.js`           | Phần tính tiền                    |
| `test/donhang.test.js`     | Bài kiểm tự động                  |
| `.github/workflows/ci.yml` | Quy trình CI chạy khi có push/PR  |

## Giấy phép

MIT — xem `LICENSE`.
