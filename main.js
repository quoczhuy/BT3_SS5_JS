// Dữ liệu đầu vào từ máy chủ
const record = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

// 1. Phân tách chuỗi gốc thành các trường dữ liệu
const parts = record.split("-");
const rawDoctor = parts[0]; // "BS.nguyen_van_hai"
const rawDept = parts[1]; // "KHOA_TIM_MACH"
const rawTime = parts[2]; // "08:30"
const rawRoom = parts[3]; // "PHONG_302"

// 2. Xử lý và chuẩn hóa tên Bác sĩ
// - Bỏ tiền tố BS. và tách từng từ theo dấu "_"
const docParts = rawDoctor.replace("BS.", "").split("_");
// - Viết hoa chữ đầu, viết thường các chữ sau
const docWord1 =
  docParts[0].slice(0, 1).toUpperCase() + docParts[0].slice(1).toLowerCase();
const docWord2 =
  docParts[1].slice(0, 1).toUpperCase() + docParts[1].slice(1).toLowerCase();
const docWord3 =
  docParts[2].slice(0, 1).toUpperCase() + docParts[2].slice(1).toLowerCase();
// - Ghép lại
const doctorName = `${docWord1} ${docWord2} ${docWord3}`;

// 3. Xử lý và chuẩn hóa Chuyên khoa
const deptParts = rawDept.split("_");
const deptWord1 =
  deptParts[0].slice(0, 1).toUpperCase() + deptParts[0].slice(1).toLowerCase();
const deptWord2 =
  deptParts[1].slice(0, 1).toUpperCase() + deptParts[1].slice(1).toLowerCase();
const deptWord3 =
  deptParts[2].slice(0, 1).toUpperCase() + deptParts[2].slice(1).toLowerCase();
const department = `${deptWord1} ${deptWord2} ${deptWord3}`;

// 4. Xử lý và chuẩn hóa Phòng khám
const roomParts = rawRoom.split("_");
const roomText =
  roomParts[0].slice(0, 1).toUpperCase() + roomParts[0].slice(1).toLowerCase(); // Thành "Phong"
const roomNumber = roomParts[1]; // "302"
const room = `${roomText} ${roomNumber}`;

// 5. In bảng thông báo phân công bằng Template Literals
const scheduleCard = `
======================================
     BẢNG PHÂN CÔNG CA KHÁM BỆNH
======================================
👨‍⚕️ Bác sĩ     : ${doctorName}
🏥 Chuyên khoa: ${department}
⏰ Giờ khám   : ${rawTime}
🚪 Phòng khám : ${room}
======================================
`;

console.log(scheduleCard);
