# ET4711 — Session 01

**Nhóm 06** gồm hai thành viên:

- **Phạm Chí Dũng** — MSSV: **20250922E**.
- **Nguyễn Hoàng Nam** — MSSV: **20250169E**.

Thư mục khởi đầu không kèm tài liệu Guided Lab riêng, nên phần thực hiện dựa trên
các TODO CP1 và CP3 trong mã nguồn.

## Tính năng hiện có

- **Giới thiệu Nhóm 06:** Phần đầu trang nêu tên nhóm và hai thành viên; các thẻ thành viên hiển thị họ tên cùng MSSV của từng người.
- **Điều hướng trong trang:** Thanh menu dẫn đến phần giới thiệu, thành viên, mục tiêu và tương tác; liên kết cuối trang đưa người xem về đầu trang.
- **Mục tiêu học tập:** Danh sách năm chủ đề nhóm hướng tới trong môn ET4711.
- **Lời chào tương tác:** Nhấn **Nhận lời chào** để JavaScript cập nhật thông báo bằng tên và MSSV của cả hai thành viên, không tải lại trang. Vùng thông báo dùng `role="status"` và `aria-live="polite"`.
- **Giao diện thích ứng:** Bố cục và cỡ chữ điều chỉnh theo chiều rộng màn hình; thẻ thành viên và phần mục tiêu chuyển thành một cột trên màn hình hẹp.
- **Hiệu ứng giao diện:** Có chuyển động khi tải/cuộn trang, hiệu ứng hover và phản hồi khi nhấn nút. Chuyển động được giảm theo cài đặt **Reduce motion** của người dùng.
- **Sử dụng bằng bàn phím:** Liên kết và nút có viền focus; nút có thể kích hoạt bằng `Enter` hoặc phím cách.

## Nội dung đã thực hiện

- **CP1 — HTML5:** Giới thiệu Nhóm 06, hiển thị họ tên và MSSV của hai thành viên, cùng danh sách năm mục tiêu học tập.
- **CP3 — DOM:** Bắt sự kiện nhấn nút `#hello` và cập nhật `textContent` của `#message`
  thành lời chào có tên và MSSV của cả hai thành viên.
- Giữ cấu trúc HTML có ngữ nghĩa, CSS hỗ trợ màn hình nhỏ và vùng thông báo
  `aria-live="polite"` của mã khởi đầu.

Giao diện dùng nền xanh đen, chữ màu kem và điểm nhấn vàng ấm, lấy cảm hứng từ
[taalas.com](https://taalas.com/). Họa tiết được tạo bằng CSS, không dùng ảnh hay
thư viện ngoài. Hiệu ứng xuất hiện khi tải/cuộn trang và khi bấm nút sẽ tự giảm
theo cài đặt **Reduce motion** của hệ điều hành.

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
Sau khi lưu thay đổi, nhấn `Ctrl+Shift+R` để trình duyệt tải lại CSS và JavaScript.

## Kiểm tra với DevTools

1. Kiểm tra trang hiển thị Nhóm 06, đúng họ tên và MSSV của hai thành viên, phần giới thiệu và năm mục tiêu học tập.
2. Trong **Elements**, tìm các thẻ `header`, `main`, `section`, `footer` và danh sách `ul/li`.
   Chọn nút `#hello`, xem các quy tắc CSS ở **Styles** và thử sửa màu nền để quan sát.
   Thay đổi trực tiếp trong DevTools chỉ là tạm thời và mất khi tải lại trang.
3. Trong **Network**, bật **Disable cache** khi DevTools đang mở, rồi tải lại trang.
   Kiểm tra tài liệu HTML, `style.css` và `script.js` được tải thành công (HTTP `200`),
   cùng kiểu nội dung tương ứng HTML, CSS và JavaScript.
4. Kiểm tra **Console** không có lỗi JavaScript. Trước khi nhấn nút, thông báo là
   `Chưa có thông báo.`. Nhấn **Nhận lời chào** và kiểm tra lời chào có thông tin của cả hai thành viên.
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
