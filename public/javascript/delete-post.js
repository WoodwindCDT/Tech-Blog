async function deleteFormHandler(event) {
    event.preventDefault();

    // Constant to delete Post at specific ID (finding it withing URL using 'SPLIT')
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE'
    });

    // If OK, send User to their Dashboard (will no longer see deleted post there)
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);