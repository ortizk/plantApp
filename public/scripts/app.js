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
    // ADDING PLANT TO USER FAVOURITES
    $('.addBtn').on('click', function(e){
        let dataId = $(this).attr('data-id')
        console.log()
        console.log(dataId);
        newDataId = {
            id: dataId
        }
        $.ajax({
            method: 'POST',
            url: '/profile',//+$(this).attr('data-id'),
            data: newDataId,
            success: newFaveSuccess,
            error: console.log("new fave error")
        }).then(function(data){
        })
    })
    $('.delBtn').on('click', function(e){
        console.log('delete button is clicked');
    })
}); 
            


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

function newFaveSuccess(){
    console.log('newFaveSuccess');
    // window.location.href='/profile'
}


   // <a href="/profile/<%=userFaves[0].favePlants[plant].%>"></a>











