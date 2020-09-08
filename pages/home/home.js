// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'Hello World',
    movie:[
      {id:110,name:'xx1',age:12},
      {id:110,name:'xx2',age:12},
      {id:110,name:'xx3',age:15}
    ],
    container:0
  },
  handleButtonAdd(){
    // console.log("按钮发生了点击")
    this.setData({
      container:this.data.container+1
    })
  },
  handleButtonReduce(){
    this.setData({
      container:this.data.container-1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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