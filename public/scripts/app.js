var allComments = [];
// var getWeather;

$(document).ready(function () {
    console.log('app.js is loaded')

    $('.commentBtn').on('click', function(e){
        // hide the comment button
        $(this).hide();

        // show the form
        $(this).next().show();

        // // show the post button
        // $(this).next().next().show();
        $('.cancelBtn').on('click', function(e){
            $(this).hide();
        })
    });
    // $('.commentForm').on('submit', function(e){
    //  e.preventDefault()
    //  let commentBody = $(this);
    //  $.ajax({
    //      method: 'PUT',
    //      url: '/plantPage/'+$(this).attr('data-id'),
    //      data: commentBody.serialize(),
    //      success: newCommentSuccess,
    //      error: newCommentError
    //  });
    $('.commentForm').on('submit', function(e){
        e.preventDefault()
        let commentBody = $(this);
        $.ajax({
            method: 'POST',
            url: '/plantPage/'+$(this).attr('data-id'),
            data: commentBody.serialize(),
            success: newCommentSuccess,
            error: function(request, status, error){
                console.log(request.responseText);
                console.log('error is', error)
            }
        })
    });
    // getWeather = $('#weatherTarget');
    // $.ajax({
    //     method: 'GET',
    //     url: "/plantPage",
    //     success: weatherSuccess,
    //     error: weatherError
    // })
}); 

// })

function weatherSuccess() {
    // window.location.href='/plantPage'
    console.log('got to weather success');
};

function weatherError() {
    console.log('got to weather error');
}

function newCommentSuccess(json) {
    window.location.href='/plantPage'
};










