// ===================== CẤU HÌNH ỨNG DỤNG =====================
// Để trống phần firebase => app chạy CHẾ ĐỘ THỬ (dữ liệu chỉ lưu trên máy đang mở).
// Dán cấu hình Firebase vào => app chạy THẬT, nhiều người dùng chung, admin xem được tất cả.
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyB09C5hCb9O1OOqY7zX1MNw7ZMhyxoHnNQ",
    authDomain: "thoigianbieu-8bbfb.firebaseapp.com",
    projectId: "thoigianbieu-8bbfb",
    storageBucket: "thoigianbieu-8bbfb.firebasestorage.app",
    messagingSenderId: "148691409052",
    appId: "1:148691409052:web:9c1f576071fa089c5df559"
  },

  APP_NAME: "Thời Gian Biểu",
  ADMIN_USERNAME: "admin",   // tài khoản này là admin (phải khớp với firestore.rules)
  EMAIL_DOMAIN: "tgb.app",   // dùng nội bộ để đổi tên đăng nhập thành email Firebase, không cần sửa
  FINE_AMOUNT: 10000,        // tiền phạt mỗi việc không hoàn thành (đồng)
  GRACE_MINUTES: 60,         // sau khi hết khung giờ còn bao nhiêu phút để tick (phải khớp với firestore.rules)
  START_HOUR: 4,             // khung giờ đầu tiên trong ngày (5:00)
  END_HOUR: 24               // khung giờ cuối kết thúc lúc 24:00 (khung 23:00–24:00)
};
