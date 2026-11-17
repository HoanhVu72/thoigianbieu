// ===================== CẤU HÌNH ỨNG DỤNG =====================
// Đã kết nối Firebase dự án thoigianbieu-8bbfb. Dữ liệu dùng chung, đồng bộ mọi thiết bị.
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
  GRACE_MINUTES: 60,         // hạn tick MẶC ĐỊNH sau khi việc kết thúc (người dùng chọn lại được cho từng việc)
  START_HOUR: 4,             // giờ bắt đầu trong ngày (4:00)
  END_HOUR: 24,              // giờ kết thúc trong ngày (24:00)
  SLOT_MINUTES: 30           // mỗi ô dài bao nhiêu phút
};
