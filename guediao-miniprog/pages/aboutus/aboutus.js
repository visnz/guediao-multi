// pages/aboutus/aboutus.js
const origindata = require("../../data/datarouter.js").getData()
Page({
 data:{
  title: origindata.basicinfo.orgname,
  goto:" 点击前往 ",
  locations: origindata.locations,
  logosrc: origindata.basicinfo.logosrc,
 },
  /**
   * 页面的初始数据
  },*/

  gotoLo: e =>{
    var index = e.currentTarget.id
    wx.openLocation({
      latitude: origindata.locations[index].latit,
      longitude: origindata.locations[index].longt,
      name: origindata.locations[index].name,
      address: origindata.locations[index].address
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