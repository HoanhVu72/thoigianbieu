# 🗓️ Thời Gian Biểu – ứng dụng lịch tuần có phạt quỹ

Trang web dùng trên điện thoại. Mỗi người tự đăng ký, tự lên lịch theo khung giờ trong tuần và bấm tick khi làm xong.
Việc không tick đúng hạn chuyển màu đỏ và bị tính phạt 10.000đ vào quỹ. Admin xem được lịch của tất cả mọi người và xác nhận các khoản nộp quỹ.

## Các tệp trong gói

| Tệp | Công dụng |
|---|---|
| `index.html` | Toàn bộ ứng dụng |
| `config.js` | Cấu hình: Firebase, tài khoản admin, mức phạt, khung giờ |
| `firestore.rules` | Luật bảo mật cơ sở dữ liệu (chống sửa lịch, chống tick sau hạn) |
| `manifest.json`, `icon*.png`, `icon.svg` | Biểu tượng khi cài ra màn hình chính điện thoại |

---

## BƯỚC 1 – Đưa lên GitHub Pages (khoảng 5 phút)

1. Vào https://github.com, đăng nhập, bấm **New repository**. Đặt tên, ví dụ `thoigianbieu`, chọn **Public**, bấm **Create repository**.
2. Bấm **uploading an existing file**, kéo thả **tất cả các tệp** trong thư mục này (không kéo cả thư mục), bấm **Commit changes**.
3. Vào **Settings → Pages**. Mục *Source* chọn **Deploy from a branch**, *Branch* chọn **main** và **/(root)**, bấm **Save**.
4. Đợi 1–2 phút. Địa chỉ trang sẽ có dạng: `https://<tên-github>.github.io/thoigianbieu/`

Lúc này app đã chạy được ở **chế độ thử**: dữ liệu chỉ lưu trên máy đang mở, chưa dùng chung được. Tài khoản admin thử là `admin` / `admin123`.

## BƯỚC 2 – Bật chế độ dùng thật nhiều người (Firebase, miễn phí, khoảng 10 phút)

1. Vào https://console.firebase.google.com, bấm **Create a project** (Tạo dự án). Đặt tên tùy ý. Có thể tắt Google Analytics.
2. Menu trái **Build → Authentication → Get started → Sign-in method** → chọn **Email/Password** → bật **Enable** → **Save**.
3. Menu trái **Build → Firestore Database → Create database**. Chọn vùng `asia-southeast1 (Singapore)` và **Start in production mode**.
4. Trong Firestore, mở tab **Rules**, xóa hết nội dung cũ, dán toàn bộ nội dung tệp `firestore.rules`, bấm **Publish**.
5. Bấm bánh răng ⚙️ **Project settings**. Ở mục *Your apps*, bấm biểu tượng **`</>`** (Web), đặt tên rồi bấm **Register app**. Firebase sẽ hiện một đoạn `firebaseConfig = { apiKey: ..., ... }`.
6. Mở tệp `config.js` trên GitHub (bấm vào tệp rồi bấm biểu tượng ✏️) và chép 6 giá trị `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId` vào đúng chỗ. Bấm **Commit changes**.
7. Quay lại Firebase: **Authentication → Settings → Authorized domains → Add domain**, thêm `<tên-github>.github.io`.

> `apiKey` của Firebase được phép công khai, không phải mật khẩu. Dữ liệu được bảo vệ bằng `firestore.rules`.

## BƯỚC 3 – Tạo tài khoản admin (làm ngay sau Bước 2)

Mở trang web, chọn **Đăng ký**, đặt **tên đăng nhập là `admin`** và một mật khẩu mạnh. Tài khoản này có tab **👑 Quản trị**.
Phải đăng ký `admin` trước để không ai khác đăng ký mất tên này.

Muốn dùng tên admin khác, ví dụ `bithu`, thì sửa cả 2 chỗ:
- `config.js`: `ADMIN_USERNAME: "bithu"`
- `firestore.rules`: `'admin@tgb.app'` → `'bithu@tgb.app'` (sau đó bấm Publish lại)

## BƯỚC 4 – Tải mã QR MoMo của quỹ

Đăng nhập admin → tab **👑 Quản trị** → mục **⚙️ Cài đặt quỹ MoMo** → chọn ảnh QR (chụp màn hình mã QR nhận tiền trong app MoMo), nhập tên chủ ví và số điện thoại → **Lưu cài đặt**.

## BƯỚC 5 – Cài ra màn hình điện thoại như một ứng dụng

- **iPhone (Safari):** mở trang → nút Chia sẻ → **Thêm vào MH chính**.
- **Android (Chrome):** mở trang → menu ⋮ → **Thêm vào màn hình chính** / **Cài đặt ứng dụng**.

---

## Quy tắc hoạt động

- Mỗi ngày chia ô **30 phút**, từ 4:00 đến 24:00. Bấm ô trống để thêm việc, chọn **thời lượng** (30 phút, 1 giờ, 2 giờ...); việc dài sẽ chiếm liền nhiều ô. Có thể lặp lại cùng giờ cho nhiều ngày trong tuần và chép lịch tuần trước.
- **Hạn tick chọn riêng cho từng việc**: 30 phút, 1–12 giờ sau khi xong, hoặc đến 23:59 cùng ngày. Ví dụ đi học 7:00–11:00, chọn "Đến 23:59" thì về nhà tick vẫn kịp. Tick mở từ lúc việc bắt đầu.
- Trạng thái ô: 🔒 sắp tới · viền cầu vồng = đang diễn ra · 🟧 hết giờ, đang chờ tick · 🟩 **hoàn thành** · 🟥 **không hoàn thành, -10.000đ**.
- Khung giờ đã bắt đầu thì **không xóa, không sửa** được việc đó. Điều này chặn cả ở máy chủ, nên không lách được để né phạt.
- **Nộp quỹ:** tab 💰 Quỹ hiện số tiền đang nợ, mã QR MoMo và nội dung chuyển khoản `QUY <TÊN ĐĂNG NHẬP>`. Người dùng chuyển xong bấm **"Tôi đã chuyển khoản"**. Admin đối chiếu với lịch sử MoMo rồi bấm ✓ để xác nhận.

### Vì sao không tự trừ tiền MoMo?
MoMo không cho trang web nào tự rút tiền từ ví cá nhân của người khác; mỗi giao dịch đều phải chủ ví xác nhận trên app MoMo.
Thu tự động chỉ làm được qua cổng thanh toán doanh nghiệp (MoMo Business), phải đăng ký pháp nhân và có máy chủ riêng, nên không chạy được trên GitHub Pages.
Ứng dụng này vì vậy tự tính tiền phạt, hiện mã QR kèm số tiền, và để admin xác nhận.

## Tùy chỉnh trong `config.js`

| Thông số | Mặc định | Ý nghĩa |
|---|---|---|
| `FINE_AMOUNT` | 10000 | Tiền phạt mỗi việc (đồng) |
| `GRACE_MINUTES` | 60 | Hạn tick mặc định khi tạo việc (người dùng chọn lại được) |
| `START_HOUR` / `END_HOUR` | 4 / 24 | Giờ bắt đầu / kết thúc trong ngày |
| `SLOT_MINUTES` | 30 | Độ dài mỗi ô (phút) |
| `APP_NAME` | Thời Gian Biểu | Tên hiển thị |
