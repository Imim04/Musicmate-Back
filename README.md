# Backend

เลือกประเภทฐานข้อมูลที่เหมาะสม ออกแบบโครงสร้างตาราง และเขียนโปรแกรมเพื่อจัดเก็บ ดึงมาใช้ หรือแก้ไขข้อมูลได้

### โดยที่เราทำ Backend ของ MusicMate จะมีดังนี้

1.Server

![1](https://github.com/user-attachments/assets/00b9bc94-88ee-438e-abf3-277c21ca4121)

ทำการรับข้อมูล JSON และแสดงข้อความ DB Connected! ถ้าสามารถเชื่อมต่อกับ Data base ได้แล้ว และแสดงข้อความ Server is running ที่ port ไหน

2.Config

![2](https://github.com/user-attachments/assets/66ae0fd7-5e04-417a-a354-8ca79939f0ab)

เป็นการตั้งค่าการเชื่อมต่อ  เช่น Data base ชื่อ MusicMate

password คือ 1234   dialect คือ postgres

3.Controllers

![3 1](https://github.com/user-attachments/assets/97de3459-9ffb-4cf3-9420-edd4a3775ea2)

![3,2](https://github.com/user-attachments/assets/121a469e-aa54-40a5-85b2-ed80dae651a8)

![3 3](https://github.com/user-attachments/assets/5fe7b2fc-6fdf-4b18-ac27-4d9b02602233)

กำหนดการทำงาน ว่า Creat หรือ Edit หรือ Delect หรือ การสั่งงานที่ทุกอย่างผ่าน id

4.Models

4.1 Index

![4 1](https://github.com/user-attachments/assets/376ac7a4-ced2-4e7a-af89-d036ac82dd9d)

เชื่อมต่อกับฐานข้อมูล

4.2 MusicMate.model

![4 2](https://github.com/user-attachments/assets/bbe8e647-ee46-4358-9395-25dea8307cb4)

สร้างตาราง หรือ กำหนดฟิว

5.Routs

![5](https://github.com/user-attachments/assets/f320f17e-efa6-4e5e-9328-c64d25cd4f04)

กำหนดเส้นทาง

### \* ที่สำคัญห้ามลืมควรจะ npm i ก่อน และตรวจสอบให้แน่ใจว่า docker ทำการรันอยู่ \*







