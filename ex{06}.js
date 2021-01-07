// // 文字のオブジェクトを作って
// const str = "This is a pen."
// // 文字列という「もの(オブジェクト)」に対して大文字にするように指示　
// const upperStr = str.toUpperCase()
// console.log(upperStr)
// const lowerStr = str.toLocaleLowerCase()
// console.log(lowerStr)

// // メソッドチェーン (メソッドを複数つなげて処理を記述できる) 
// const lowerStr2 = str.toUpperCase().toLocaleLowerCase()
// console.log(lowerStr2)

// console.log(str.slice(1, 4))

// const user = {
//     name: "山田",
//     sayName: function () {
//         console.log('私の名前は' + this.name + 'です。')
//     }
// }
// user.sayName()

//課題1
// let word = "こんにちは"
// console.log(word.charAt(2));

// const word = 'Thank you! ';
// console.log(word.repeat(10));

// const str = 'My name is Osamu Suzuki.'

// const words = str.split(' ');
// console.log(words[4]);

// const chars = str.split('');
// console.log(chars[8]);

// const strCopy = str.split();
// console.log(strCopy)

//課題2
// const isBelowThreshold = (currentValue) => currentValue < 20;

// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));

// const array1 = [1, 2, 3, 4, 5, 6];
// console.log(array1.fill(8, 2, 4));
// console.log(array1.fill(12, 1));
// console.log(array1.fill(10));

// const array1 = [100, 440, 1000, 2000];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(array1.reduce(reducer));

// console.log(array1.reduce(reducer, 5000));

//文字列オブジェクトで使えるメソッドと配列オブジェクトで使えるメソッドの共通点、相違点
// テキスト形式で表現可能なデータを保持するのに便利なのが文字列。
// 配列の長さは常に可変であり、データを連続しない位置に格納できるため、そういったときに使えるのが配列。