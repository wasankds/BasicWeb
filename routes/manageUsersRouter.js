// 

/*

สำหรับการจัดการเส้นทางที่เกี่ยวข้องกับการเข้าสู่ระบบ


*/

import express from 'express';
const router = express.Router();

router.get('/manage/users', (req, res) => {
  // res.render('login', { title: 'Login' });

  res.send(`
    <h1>Manange Users</h1>
  `);

});

export default router;