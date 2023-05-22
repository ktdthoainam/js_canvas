// console.log('Hello!');
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.beginPath();
context.arc(100, 100, 40, 0, 2 * Math.PI);//context.arc(x,y,r,degStart,degEnd, anticlockwise)//tọa độ x, y, bán kính, góc bắt đầu, góc kết thúc, theo chiều kim đồng hồ (mặc định False:theo chiều kim đồng hồ, true: ngược chiều)
context.stroke();//vẽ đường
context.closePath();

context.beginPath();
context.arc(50, 50, 30, 0, 2 * Math.PI);
context.stroke();//vẽ đường
context.closePath();

context.fillStyle = "green";
context.fillRect(150, 150, 75, 75);
