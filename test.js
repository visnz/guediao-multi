
function point(x,y){
  this.x=x;this.y=y
};
//给对象附加函数
point.prototype.xysum=()=>{
  return point.x+point.y
};
console.log(new point(20,2).xysum())
