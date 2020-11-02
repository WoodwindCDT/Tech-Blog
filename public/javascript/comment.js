async function commentFormHandler(event) {
    event.preventDefault();

    // Constant to grab text-entry from text-area section
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    // Contstant to find POST_ID stringing Comment to post
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // If OK, reload page (showing user the new comment)
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);