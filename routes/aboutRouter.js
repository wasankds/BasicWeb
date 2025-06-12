// 

/*

สำหรับการจัดการเส้นทางที่เกี่ยวข้องกับการเข้าสู่ระบบ


*/

import express from 'express';
const router = express.Router();

router.get('/about', (req, res) => {
  // res.render('login', { title: 'Login' });

  res.send(`
    <h1>About</h1>
    <p>This is the about page for the login system.</p>
  `);

});

export default router;