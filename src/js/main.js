require.config({
    paths: {
        "ajax": "lib/yhajax",
        "jquery": "lib/jquery-1.8.3.min"
    }
})
require(['ajax', 'jquery'], function(ajax, $) {
    $.each(data, function(i, item) {
        var html = '';
        console.log(i, item)
        html += `<h5>${item.title}</h5>
                 <img src="${item.img}" alt="">
                 <p>价格：${item.price}</p>`
        $(".wrap").append(html)
    })
})