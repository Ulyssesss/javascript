$('[name=email]'); // 找出<??? name="email">
$('input[name=email]'); // 不会找出<div name="email">
$('tr.red'); // 找出<tr class="red ...">...</tr>
$('p,div'); // 把<p>和<div>都选出来
$('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来
$('ul.lang li.lang-javascript');//层级之间用空格隔开
$('parent>child')//限定父子关系，必须为指数子节点

$('ul.lang li:first-child');
$('ul.lang li:last-child');
$('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
$('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
$('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素

$('div:visible'); // 所有可见的div
$('div:hidden'); // 所有隐藏的div

var ul = $('ul.lang');
var dy = ul.find('.class');
var swf = ul.find('#id');
var hsk = ul.find('[attr=value]');
var parent = ul.parent('.red');

$('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red');

$(document).width();

$('#test-div').attr('name', 'Hello'); // div的name属性变为'Hello'