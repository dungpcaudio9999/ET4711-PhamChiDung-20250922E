# Quy trình thực hiện và các cải tiến — Session 01

## 1. Kết quả cuối cùng

`Session01` là trang giới thiệu cá nhân cho bài thực hành ET4711. Trang hiển thị họ tên **Phạm Chí Dũng**, MSSV **20250922E**, đoạn giới thiệu, năm mục tiêu học tập và một nút tạo lời chào. Khi nhấn nút, JavaScript đổi nội dung thông báo ngay trên trang mà không tải lại trang.

Các tệp tạo nên kết quả:

- [`index.html`](index.html): nội dung, cấu trúc trang, các liên kết điều hướng và phần tử để JavaScript tương tác.
- [`style.css`](style.css): màu sắc, bố cục, giao diện cho màn hình nhỏ và hiệu ứng chuyển động.
- [`script.js`](script.js): xử lý nút lời chào và hiệu ứng xuất hiện khi cuộn.
- [`README.md`](README.md): cách chạy bài và các bước tự kiểm tra bằng DevTools.

## 2. Quy trình tạo ra kết quả

Quy trình dưới đây được tổng hợp từ các phiên bản mã nguồn trong Git. Kho mã nguồn không có tài liệu Guided Lab riêng; mã khởi đầu chỉ ghi các việc cần làm ở **CP1** và **CP3**.

### Bước 1 — Lấy mã khởi đầu

Ở commit `792637c` (*Add starter code*, 18/09/2026), thư mục đã có bốn tệp: `index.html`, `style.css`, `script.js`, `README.md`. HTML có sẵn các vùng `header`, `main`, ba `section`, `footer`, nút `#hello` và vùng thông báo `#message`. Nội dung giới thiệu và danh sách mục tiêu còn là chỗ trống; JavaScript mới ghi lời chào mẫu. CSS là bố cục đơn giản, nền sáng, khung nội dung rộng tối đa 800px.

### Bước 2 — Hoàn thành nội dung và tương tác của bài lab

Ở commit `aec4c01` (*Add session 01*, 20/09/2026):

1. Thay nội dung mẫu bằng họ tên, MSSV và đoạn giới thiệu trong `index.html`.
2. Thêm danh sách `<ul>` gồm năm mục tiêu: HTML5, CSS, JavaScript/DOM, DevTools và Git. Yêu cầu trong mã khởi đầu là ít nhất ba mục tiêu.
3. Giữ nút `#hello` và vùng `#message`; thay lời chào mẫu trong `script.js` bằng `Xin chào! Tôi là Phạm Chí Dũng — 20250922E.`. Sự kiện `click` cập nhật `message.textContent`.
4. Viết `README.md` với hướng dẫn chạy máy chủ tĩnh và các bước kiểm tra HTML, CSS, Network, Console, tương tác nút và màn hình nhỏ.

Sau bước này, các yêu cầu nội dung CP1 và tương tác DOM CP3 đã có mặt trong mã nguồn.

### Bước 3 — Thiết kế lại giao diện và bổ sung hiệu ứng

Ở commit `d1b0c97` (*Add effect*, 22/09/2026), trang được phát triển từ bố cục bài lab đơn giản thành trang giới thiệu dạng portfolio:

1. Tổ chức lại HTML thành thanh điều hướng, phần giới thiệu lớn (*hero*), phần mục tiêu và phần tương tác. Các liên kết `#about`, `#goals`, `#interaction` giúp di chuyển đến từng phần.
2. Viết lại CSS với nền xanh đen, chữ màu kem, điểm nhấn vàng ấm, khu vực mục tiêu nền sáng và họa tiết vòng tròn/lưới tạo hoàn toàn bằng CSS. `README.md` ghi nguồn cảm hứng màu sắc từ [taalas.com](https://taalas.com/).
3. Dùng `clamp()` và các mốc `850px`, `600px` để bố cục, chữ và điều hướng thích ứng với màn hình nhỏ.
4. Thêm hiệu ứng xuất hiện cho phần đầu trang, hiệu ứng khi rê chuột và khi nhấn nút. `IntersectionObserver` đánh dấu các phần tử `.reveal` là `.is-visible` khi chúng đi vào vùng nhìn thấy.
5. Bổ sung hỗ trợ `prefers-reduced-motion`: giảm hoặc bỏ chuyển động khi người dùng bật chế độ giảm chuyển động. Hiệu ứng xuất hiện khi cuộn chỉ được khởi tạo khi trình duyệt hỗ trợ `IntersectionObserver` và người dùng không bật chế độ này.

## 3. Những cải tiến so với mã khởi đầu

| Khía cạnh | Mã khởi đầu | Kết quả hiện tại |
| --- | --- | --- |
| Nội dung | Giới thiệu mẫu, chưa có mục tiêu | Họ tên, MSSV, giới thiệu và năm mục tiêu cụ thể |
| Tương tác DOM | Lời chào mẫu | Lời chào đúng thông tin sinh viên, đổi màu trạng thái và có hiệu ứng ngắn khi nhấn |
| Bố cục | Các khung nội dung đơn giản | Hero, thanh điều hướng, danh sách mục tiêu và khu vực tương tác có phân cấp rõ |
| Giao diện | Nền sáng, một màu nhấn xanh | Bảng màu xanh đen/kem/vàng, gradient và họa tiết CSS |
| Màn hình nhỏ | Chỉ giảm khoảng đệm ở `560px` | Bố cục mục tiêu chuyển thành một cột, điều hướng và chữ điều chỉnh ở `850px`/`600px` |
| Chuyển động | Chưa có | Hiệu ứng tải trang, cuộn trang, hover và phản hồi khi nhấn nút |
| Khả năng tiếp cận | Có thẻ HTML ngữ nghĩa, `aria-live` và viền focus cho nút | Thêm nhãn điều hướng, `role="status"`, viền focus cho liên kết và hỗ trợ giảm chuyển động |
| Hướng dẫn kiểm tra | Chỉ nêu cách chạy và các TODO | Có quy trình dùng DevTools, kiểm tra Network, Console, thao tác bằng bàn phím và Git |

Những cải tiến về giao diện không thay đổi chức năng chính của bài lab: nhấn nút vẫn cập nhật nội dung của một phần tử `#message`; việc nhấn nhiều lần không tạo thêm phần tử mới.

## 4. Cách chạy và kiểm tra kết quả

Từ thư mục gốc của kho mã nguồn, chạy:

```bash
python3 -m http.server 8001 --bind 127.0.0.1 --directory Session01
```

Mở <http://127.0.0.1:8001> và kiểm tra:

1. Trang có đủ thông tin sinh viên, năm mục tiêu và các liên kết điều hướng hoạt động.
2. Trước khi nhấn nút, `#message` hiển thị `Chưa có thông báo.`; sau khi nhấn, nội dung đổi thành `Xin chào! Tôi là Phạm Chí Dũng — 20250922E.`.
3. Dùng phím `Tab` để đến nút và kích hoạt bằng `Enter` hoặc phím cách; viền focus phải nhìn thấy được.
4. Mở DevTools: **Network** tải được HTML/CSS/JS, **Console** không có lỗi, **Elements** cho thấy `#message` đổi nội dung sau khi nhấn.
5. Kiểm tra ở chiều rộng khoảng 375px và thử bật **Reduce motion** trong hệ điều hành hoặc công cụ giả lập để xem bố cục và chuyển động thích ứng.

Đây là **các bước kiểm tra đề xuất**, không phải khẳng định rằng mọi trường hợp trên đã được kiểm thử tự động.
