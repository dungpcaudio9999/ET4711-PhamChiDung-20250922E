# ET4711 — Session 01

Sinh viên: **Phạm Chí Dũng** — MSSV: **20250922E**.

Thông tin sinh viên được suy ra từ tên thư mục dự án; cần đối chiếu trước khi nộp.
Thư mục khởi đầu không kèm tài liệu Guided Lab riêng, nên phần thực hiện dựa trên
các TODO CP1 và CP3 trong mã nguồn.

## Nội dung đã thực hiện

- **CP1 — HTML5:** Thêm họ tên, MSSV, đoạn giới thiệu và danh sách năm mục tiêu học tập.
- **CP3 — DOM:** Bắt sự kiện nhấn nút `#hello` và cập nhật `textContent` của `#message`
  thành `Xin chào T4711! Tôi là Phạm Chí Dũng — 20250922E.`.
- Giữ cấu trúc HTML có ngữ nghĩa, CSS hỗ trợ màn hình nhỏ và vùng thông báo
  `aria-live="polite"` của mã khởi đầu.

## Chạy bài lab

Mở thư mục `Session01` bằng VS Code và chạy `index.html` bằng Live Server.

Nếu terminal đang ở thư mục gốc của kho mã nguồn
`ET4711-PhamChiDung-20250922E`, chạy:

```bash
python3 -m http.server 8001 --bind 127.0.0.1 --directory Session01
```

Nếu terminal đang ở ngay trong thư mục `Session01`, chạy:

```bash
python3 -m http.server 8001 --bind 127.0.0.1
```

Truy cập <http://127.0.0.1:8001>. Nhấn `Ctrl+C` trong terminal để dừng máy chủ.
Dùng máy chủ HTTP để kiểm tra Network, thay vì mở tệp qua `file://`.

## Kiểm tra với DevTools

1. Kiểm tra trang hiển thị đúng họ tên, MSSV, giới thiệu và năm mục tiêu học tập.
2. Trong **Elements**, tìm các thẻ `header`, `main`, `section`, `footer` và danh sách `ul/li`.
   Chọn nút `#hello`, xem các quy tắc CSS ở **Styles** và thử sửa màu nền để quan sát.
   Thay đổi trực tiếp trong DevTools chỉ là tạm thời và mất khi tải lại trang.
3. Trong **Network**, bật **Disable cache** khi DevTools đang mở, rồi tải lại trang.
   Kiểm tra tài liệu HTML, `style.css` và `script.js` được tải thành công (HTTP `200`),
   cùng kiểu nội dung tương ứng HTML, CSS và JavaScript.
4. Kiểm tra **Console** không có lỗi JavaScript. Trước khi nhấn nút, thông báo là
   `Chưa có thông báo.`. Nhấn **Hiển thị lời chào** và kiểm tra lời chào đúng như trên.
   Quan sát `#message` trong **Elements** để thấy DOM được cập nhật.
5. Nhấn nút nhiều lần: lời chào vẫn đúng, không tạo thêm phần tử hay tải lại trang.
   Tải lại trang để đưa thông báo về trạng thái ban đầu.
6. Dùng phím `Tab` để chuyển đến nút, kiểm tra viền focus và kích hoạt bằng `Enter`
   hoặc phím cách. Dùng chế độ thiết bị để kiểm tra trang ở chiều rộng 375px.

## Kiểm tra thay đổi bằng Git

Từ thư mục gốc kho mã nguồn:

```bash
git status --short
git diff --check
git diff -- Session01
```

Nếu yêu cầu nộp bài là một thư mục riêng, sao chép `Session01` và đặt tên
`T4711-Session01-PhamChiDung-20250922E` theo hướng dẫn của mã khởi đầu.
