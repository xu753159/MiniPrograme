// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'Hello World',
    list:[]
  },
  helloChange(){
    this.setData({
      message:"hello"
    })
  },
  UserInfo(event){
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this =this
    wx.request({
      url: 'http://152.136.185.210:8000/api/z8/home/data?type=new&page=1',
      // success:(res)=>{
      //   const data =res.data.data.list
      //   this.setData({
      //     list:data
      //   }),
        success:function(res){
          const data =res.data.data.list
          _this.setData({
            list:data
          })

         
        }
      }
    
  )},
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("Onready1525252")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面被隐藏笑嘻嘻")

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})