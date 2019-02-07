// page/two/two.js


Page({
  /**
   * 页面的初始数据
   */
  data: {
    dates: '2016-01-01',
    dates1: '0000-00-00'

  },

  bindDateChange: function(e) {
    this.setData({
      dates: e.detail.value,
    })
  },

  bindDateChange1: function (e) {
    this.setData({
      dates1: e.detail.value,
    })
    var that = this;
    var t3 = this.data.dates1;
    var t6 = new Date(t3.replace(/-/g, '/')).getTime();
    //var t7 = '2017-1-1';
    //var d = new Date(t7).getTime();
    var t4 = new Date().getTime();
    var t7 = new Date(t4 - t6);
    var cha1 = parseInt(t7.getTime() / 1000 / 3600 / 24);
    // console.log(t3);
    // console.log(t4);
    // console.log(t6);
    // console.log(cha);
    that.setData({
      cha1: parseInt(t7.getTime() / 1000 / 3600 / 24),
    })
  },

  click1: function() {
    var that = this;
    var t3 = this.data.dates;
    var t6 = new Date(t3.replace(/-/g, '/')).getTime();
    //var t7 = '2017-1-1';
    //var d = new Date(t7).getTime();
    var t4 = new Date().getTime();
    var t7 = new Date(t4 - t6);
    var cha = parseInt(t7.getTime() / 1000 / 3600 / 24);
    // console.log(t3);
    // console.log(t4);
    // console.log(t6);
    // console.log(cha);
    that.setData({
    cha : parseInt(t7.getTime() / 1000 / 3600 / 24),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {

    var that = this;
    setInterval(function() {
      var t1 = new Date('2019-01-01 00:00:00');
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


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})