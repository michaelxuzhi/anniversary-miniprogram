App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // console.log("onLaunch");  打印“onLaunch”
    // console.log(options);  打印onLaunch函数的所有参数
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function () {
    // console.log("onShow");  打印“onShow”
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    // console.log("onHide");  打印“onHide”
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  // onPullDownRefresh:function(){
  //     this.onLaunch();
  // },
 

  /**
   * 当小程序发生转发事件
   */
  // onShareAppMessage(res) {
  //   if (res.from === 'button') {
  //     // 来自页面内转发按钮
  //     console.log(res.target)
  //   }
  //   return {
  //     title: '自定义转发标题',
  //     path: '/page/user?id=123'
  //   }
  // }
})
