const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {//这里解析url请求
  res.send({
    data: req.$PRODUCT_DATE,//这个req是这几个模块共同的
    code: 0
  })
})
router.get('/info', (req, res) => {
  console.log(req.query.id);
//   console.log(req.$PRODUCT_DATE.find(item=>item.id == req.query.id));
  const info = req.$PRODUCT_DATE.find(item=>item.id == req.query.id);
  res.send({
    data: info,
    code: 0
  })
})

module.exports = router;
