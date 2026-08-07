# Đóng góp vào repo này

## Quy ước đặt tên nhánh

| Loại việc      | Mẫu tên nhánh        | Ví dụ                    |
| -------------- | -------------------- | ------------------------ |
| Tính năng mới  | `feature/<mô-tả>`    | `feature/gio-hang`       |
| Sửa lỗi        | `fix/<mô-tả>`        | `fix/tinh-tong-tien`     |
| Sửa gấp        | `hotfix/<mô-tả>`     | `hotfix/hien-thi-ngay`   |

## Quy ước commit

Dùng [Conventional Commits](https://www.conventionalcommits.org/): `type(phạm-vi): mô tả`.

Các `type` dùng ở repo này: `feat`, `fix`, `docs`, `test`, `ci`, `chore`, `refactor`.

## Định nghĩa "xong"

Một Pull Request được coi là xong khi:

1. CI xanh;
2. có ít nhất một người duyệt;
3. mô tả PR nói rõ **vì sao** cần thay đổi này, không chỉ nói làm gì;
4. thay đổi có bài kiểm tự động đi kèm, hoặc PR giải thích vì sao không cần.

## Kích thước Pull Request

Cố giữ dưới 400 dòng thay đổi. PR lớn hơn thì tách ra — người review đọc PR 1000 dòng sẽ
bấm duyệt mà không thực sự đọc.
