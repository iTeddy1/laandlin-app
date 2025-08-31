<p align="center">
  <a href="https://www.uit.edu.vn/" title="Trường Đại học Công nghệ Thông tin" style="border: none;">
    <img src="https://i.imgur.com/WmMnSRt.png" alt="Trường Đại học Công nghệ Thông tin | University of Information Technology">
  </a>
</p>

<h1 align="center">
Ứng Dụng Di Động Bán Quần Áo Trẻ Em – Laandlin
</h1>

---

## GIỚI THIỆU MÔN HỌC
* **Tên môn học:** Phát triển ứng dụng thương mại di động
* **Mã môn học:** EC402
* **Năm học:** HK2 (2024 - 2025)
* **Giảng viên**: Lý Đoàn Duy Khánh 


### Nhóm 7

| Họ và Tên                | MSSV      |
|--------------------------|-----------|
| Nguyễn Duy Trung         | 22521565  |
| Phùng Lê Toàn Nhân       | 22521006  |
| Nguyễn Hữu Nam Trường    | 22521579  |
| Phạm Quang Nhật          | 22521024  |
| Nguyễn Ngọc Anh Thư      | 22521442  |
| Bùi Nguyễn Anh Thư       | 22521436  |

---

## Giới thiệu dự án

Laandlin là ứng dụng di động thương mại điện tử chuyên biệt dành cho sản phẩm quần áo và phụ kiện thời trang trẻ em từ 0 đến 12 tuổi. Ứng dụng nhằm cung cấp trải nghiệm mua sắm tiện lợi, thân thiện và an toàn cho các bậc phụ huynh hiện đại thông qua các tính năng tìm kiếm, duyệt sản phẩm, quản lý giỏ hàng và thanh toán trực tuyến.

Dự án được phát triển trong khuôn khổ môn học EC402, sử dụng công nghệ React Native, Expo, Redux Toolkit, Node.js, Express, và MongoDB Atlas.

## Tính năng chính

- Đăng ký, đăng nhập và quản lý tài khoản người dùng.  
- Duyệt và tìm kiếm sản phẩm đa dạng theo danh mục, bộ lọc.  
- Xem chi tiết sản phẩm, thêm vào giỏ hàng và quản lý giỏ hàng.  
- Quy trình đặt hàng và thanh toán trực tuyến an toàn.  
- Theo dõi trạng thái đơn hàng và lịch sử mua hàng.  
- Tính năng đánh giá, bình luận về sản phẩm.

## Công nghệ sử dụng

- **Frontend:** React Native, Expo, Redux Toolkit (RTK Query), Tailwind CSS.  
- **Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose.  
- **Triển khai:** Backend nền tảng Vercel.  
- **Kiểm thử API:** Postman.  

## Kiến trúc hệ thống

Hệ thống xây dựng theo mô hình client-server với Frontend mobile app, Network Layer trung gian giao tiếp HTTP và Backend xử lý nghiệp vụ, dữ liệu được lưu trữ trên MongoDB Atlas.

## Hướng Dẫn Chạy Ứng Dụng

### Frontend – Ứng dụng di động (Expo)

#### Yêu cầu:
- Node.js >= 18.x
- Expo CLI (`npm install -g expo-cli`)
- Trình giả lập Android/iOS hoặc ứng dụng Expo Go trên điện thoại

#### Các bước thực hiện:
```bash
# 1. Clone repository
git clone https://github.com/iTeddy1/laandlin-app.git
cd laandlin-app

# 2. Cài đặt dependencies
npm install

# 3. Chạy ứng dụng Expo
npx expo start
```

### Backend – Server API 
```bash
# 1. Di chuyển vào thư mục backend
cd backend

# 2. Cài đặt dependencies
npm install

# 3. Tạo file .env và cấu hình biến môi trường
# Ví dụ:
MONGODB_URI=your_mongodb_connection_string
PORT=5000

# 4. Khởi chạy server
npm run dev
```

## Hướng phát triển tương lai

- Tích hợp các cổng thanh toán điện tử (Momo, ZaloPay, VNPAY).  
- Phát triển hệ thống quản lý đơn hàng và giao nhận.  
- Nâng cấp bảo mật, xác thực hai lớp, mã hóa dữ liệu.  
- Bổ sung thuật toán AI đề xuất sản phẩm cá nhân hóa.  
- Xây dựng hệ thống quản trị admin panel và CI/CD tự động.

---

## Liên kết repository

- [Frontend Application](https://github.com/iTeddy1/laandlin-app)
- [Backend Sever](https://github.com/iTeddy1/laandlin_app_server)

---

