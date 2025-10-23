const { describe, test, expect } = require('@jest/globals');
const { formatTaskTitle } = require('../src/utils'); 

describe('Task Utility Functions', () => { 
    test('nên chuyển tiêu đề thành chữ hoa và loại bỏ khoảng trắng', () => {
        // ĐẢM BẢO CHỈ SỬ DỤNG KHOẢNG TRẮNG BÌNH THƯỜNG (ASCII Space)
        const result = formatTaskTitle("  task a "); 
        expect(result).toBe("TASK A");
    });

    test('nên trả về chuỗi rỗng nếu đầu vào là chuỗi rỗng', () => {
        expect(formatTaskTitle("")).toBe("");
    });
});