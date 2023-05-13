const router = require('express').Router()
const mysql = require('../mysql')
const Banner = require('../mysql/collection/Banner')
router.get('/', (req, res, next) => {
  res.send('用户相关接口')
})
/**
 * @api {get} /api/banner/list 查看轮播图
 * @apiName GetBannerList
 * @apiGroup Banner
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    code: '200',
 *    message: '查看轮播图',
 *    data
 *  }
 */
router.get('/list', (req, res, next) => {
  mysql.paging(Banner, {}, { _id: 0, __v: 0 }, 1, 4).then(data => {
    res.send({
      code: '200',
      message: '查看轮播图',
      data: [
        'https://ftp.bmp.ovh/imgs/2021/06/fa373f1efd29374f.jpg',
        'https://ftp.bmp.ovh/imgs/2021/06/a0aefed378dc74b2.jpg',
        'https://ftp.bmp.ovh/imgs/2021/03/44ab8ae1314f0f89.jpg']
    })

  })
})
module.exports = router