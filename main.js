$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
    })

    // $.ajax({
    //     method: 'GET',
    //     url: 'https://api.foursquare.com/v2/venues/search?near=Riyadh&categoryId=4bf58dd8d48988d14e941735&client_id=P11JFTNLEHOJSOG5YRKKJY4IXA21F2ANWXKGK1IS2V0YQBQF&client_secret=DPRMYDP1BNU22LWRM05DZZYVG0BOTJCBSPC01P0JE4VAQTH0&v=20190429',
    //     success: function (data) {
    //         console.log('first call');
    //         var venues = data.response.venues
    //         console.log(data);

    //         for (var i = 0; i < 2; i++) {
    //             $.ajax({
    //                 method: 'GET',
    //                 url: 'https://api.foursquare.com/v2/venues/' + venues[i].id + '/tips?client_id=P11JFTNLEHOJSOG5YRKKJY4IXA21F2ANWXKGK1IS2V0YQBQF&client_secret=DPRMYDP1BNU22LWRM05DZZYVG0BOTJCBSPC01P0JE4VAQTH0&v=20190429&v=20190429',
    //                 success: function (result) {
    //                     var $div = $('<div/>').addClass('tile');
    //                     $('section').append($div);
    //                     console.log(result.response.tips.items[0].text)
    //                     $div.append($('<img>').attr('src', result.response.tips.items[0].photourl))
    //                     var $p = $('<p>').text(result.response.tips.items[0].text)
    //                     $div.append($p)
    //                 },
    //                 error: function (error) {
    //                     alert(error)
    //                     console.log(error);
    //                 }
    //             })

    //             // var $div1 = $('<div/>').addClass('tile1');
    //             // $('section1').append($div1);
    //             var $p1 = $('<p>').text(venues[0].id)
    //             var $p2 = $('<p>').text(venues[i].name)
    //             console.log(venues[0].id)
    //             $('#RN').append($p2)

    //             // if(venues[i] == result.response.tips.items[0]){
    //             //     return name;

    //             // }
    //             //     if(venues[i].name == $('#search')){
    //             //         return result.response.tips.items[0].text;
    //             //     } 
    //         }

    //     },
    //     error: function (error) {
    //         alert(error)
    //         console.log(error);
    //     }
    // })
})