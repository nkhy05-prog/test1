// backend/jest.config.js

module.exports = {
  // Bắt buộc Jest sử dụng môi trường Node.js
  testEnvironment: 'node', 

  // Khai báo rõ ràng pattern tìm kiếm
  testMatch: [
    "**/__test__/**/*.test.js"
  ],

  // Thêm tùy chọn này để Jest biết cách load file .js. 
  // Đây là nơi mà xung đột Module thường xảy ra.
  // Dùng cú pháp `require` và không sử dụng bất kỳ chuyển đổi nào
  transformIgnorePatterns: [
    "node_modules/(?!(.*))"
  ]
};