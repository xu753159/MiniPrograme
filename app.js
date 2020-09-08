App({

  /**
   * 生命周期函数：后台存活2个小时
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log("小程序初始化完成")
    // console.log(options)
    var reqTask = wx.request({
        url: '',
        data: {},
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            
        },
        fail: ()=>{},
        complete: ()=>{}
    });
    wx.getUserInfo({
        withCredentials: 'false',
        lang: 'zh_CN',
        timeout:10000,
        success: (result)=>{
        },
        fail: ()=>{},
        complete: ()=>{}
    });

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * p判断进入场景
   */
  onShow: function (options) {
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏是")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('产生了错误')
  }
})
