$(document).ready(function () {
    console.log('app.js is loaded')

    $('.commentBtn').on('click', function(e){
        // hide the comment button
        $(this).hide();

        // show the form
        $(this).next().removeClass('hide');

        // // show the post button
        // $(this).next().next().show();
        $('.cancelBtn').on('click', function(e){
            $(this).hide();
        })
    });
    // ADDING COMMENTS TO PLANT
    $('.commentForm').on('submit', function(e){
        e.preventDefault()
        let commentBody = $(this);
        $.ajax({
            method: 'POST',
            url: '/plantPage/'+$(this).attr('data-id'),
            data: commentBody.serialize(),
            success: newCommentSuccess($(this).attr('data-id'), commentBody),
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
    //  DELETE FAVE PLANT
    $('.delBtn').on('click', function(e){
        console.log($(this).attr('data-id'))
        $.ajax({
            method: 'DELETE',
            url: '/profile/'+$(this).attr('data-id'),
            success: console.log('delete fave success'),
            error: console.log('delete fave error')
    }).then(() => {
        $(this).parent().remove();
    })
    })
}); 






        
            


function weatherSuccess() {
    // window.location.href='/plantPage'
    console.log('got to weather success');
};

function weatherError() {
    console.log('got to weather error');
}

function newCommentSuccess(id, commentBody) {
        // res.redirect('/');
        console.log(commentBody)
        $('div[data-id="'+id+'"]').find('.commentTarget').append("<div>"+ commentBody[0][0].value + "</div>");
        $('.commentForm').addClass('hide');
        $('.commentBtn').show();
        commentBody[0][0].value = "";

};

function newFaveSuccess(){
    console.log('newFaveSuccess');
    // window.location.href='/profile'
}

    // Water by Aybige from the Noun Project
    // Water by Aybige from the Noun Project
    // Summer by Adrien Coquet from the Noun Project
    // sun by Akriti Bhusal from the Noun Project
    // Plant by LSE Designs from the Noun Project
    // Favorite by Chunk Icons from the Noun Project

              //     <li class="nav-item">
              //   <a class="nav-link" href="/plantPage">Find A Plant</a>
              // </li>












