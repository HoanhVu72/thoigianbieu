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
  GRACE_MINUTES: 60,         // hạn tick MẶC ĐỊNH sau khi việc kết thúc (người dùng chọn lại được cho từng việc)
  START_HOUR: 4,             // giờ bắt đầu trong ngày (4:00)
  END_HOUR: 24,              // giờ kết thúc trong ngày (24:00)
  SLOT_MINUTES: 30           // mỗi ô dài bao nhiêu phút
};
