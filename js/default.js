//答えを用意
var nunber = Math.floor(Math.random() * 3);
var ansuer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください！'));

var message;
if (ansuer === number)
{
    message = '当たり';
} else if (ansuer < number)
{
    message = '残念！もっと大きいです';
} else if (number < ansuer)
{
    message = '残念！もっと小さいです';
} else
{
    message = '０～３の数字を入力してください';
}

//結果を表示
document.getElementById('choise').textContent = message;
