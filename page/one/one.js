var utils = require('../../utils/utils.js')

Page({
  data: {
    tempFilePaths: '../../image/5.png',
  },
  
  onLoad: function() {
    
    var t1 = utils.formatTime(new Date());
    this.setData({
      time: t1
      });

    var that = this;
    setInterval(function() {
      var t1 = new Date("2019/01/01 00:00:00");
      var t2 = new Date();
      var t = new Date(t2 - t1 + 16 * 3600 * 1000);
      that.setData({
        d: parseInt(t.getTime() / 1000 / 3600 / 24),
        h: t.getHours(),
        m: t.getMinutes(),
        s: t.getSeconds(),
      })
    }, 1000)


  },

  chooseimage: function() {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },

  red: function () {
    var that = this;
    var red = "../../image/red1.jpg";
    this.setData({
      tempFilePaths: red,
    })
  },
  green: function () {
    var that = this;
    var green = "../../image/green.jpg";
    this.setData({
      tempFilePaths: green,
    })
  },
  blue1: function () {
    var that = this;
    var blue1 = "../../image/blue1.jpg";
    this.setData({
      tempFilePaths: blue1,
    })
  },
  yellow: function () {
    var that = this;
    var yellow = "../../image/yellow.jpg";
    this.setData({
      tempFilePaths: yellow,
    })
  },
  blue2: function () {
    var that = this;
    var blue2 = "../../image/blue2.jpg";
    this.setData({
      tempFilePaths: blue2,
    })
  },

})