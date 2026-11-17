// ===================== CẤU HÌNH ỨNG DỤNG =====================
// Để trống phần firebase => app chạy CHẾ ĐỘ THỬ (dữ liệu chỉ lưu trên máy đang mở).
// Dán cấu hình Firebase vào => app chạy THẬT, nhiều người dùng chung, admin xem được tất cả.
window.APP_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  APP_NAME: "Thời Gian Biểu",
  ADMIN_USERNAME: "admin",   // tài khoản này là admin (phải khớp với firestore.rules)
  EMAIL_DOMAIN: "tgb.app",   // dùng nội bộ để đổi tên đăng nhập thành email Firebase, không cần sửa
  FINE_AMOUNT: 10000,        // tiền phạt mỗi việc không hoàn thành (đồng)
  GRACE_MINUTES: 60,         // sau khi hết khung giờ còn bao nhiêu phút để tick (phải khớp với firestore.rules)
  START_HOUR: 5,             // khung giờ đầu tiên trong ngày (5:00)
  END_HOUR: 24               // khung giờ cuối kết thúc lúc 24:00 (khung 23:00–24:00)
};
