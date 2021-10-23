//変数
let unko = 'Hello World!';

//unko = 'Hello World2!';

//定数
const bigUnko = 'He..Hell.. Hello World';
//bigUnko = 'hello world2';

//配列
let inoki = ['いーち','にーい','さーん','ダ―――！'];
//console.log(inoki[0]);

//ループ文
// let index=0; 
// while(index < inoki.length){
//     //繰り返したい命令
//     console.log(inoki[index]);
//     index++;
//     　
// }

//if else文
// if(inoki.length >5){
//     console.log('ボンバイエ！');
// }else{
//     console.log('ボンバ..');
// }

// const test  = (arg) => {
//     //ここに実行したい命令を書く
//     if(inoki.length > arg){
//         console.log('ボンバイエ！');
//     }else{
//         console.log('ボンバ..');
//     }
// };

//オブジェクト
const unko2 = {
    color:'pink',
    size:'large',
    pufume:'mint',
    goToilet: ()=>{
        console.log('Hello World!');
    }
};
//window.alert('Hello World!');
//console.log(document);
document.getElementsByTagName('button')[0].addEventListener('click',()=>{
    //命令文を書く
    window.alert('Hello World!');
});

