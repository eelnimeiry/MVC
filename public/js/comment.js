
const newFormHandler = async (event) => {
    event.preventDefault();

    const discussion_id = event.target.getAttribute("data-postid")
    const commentText = document.querySelector('#commentText').value.trim();


    console.log(discussion_id,commentText)
    if (commentText)  {
        const response = await fetch(`/api/comment/`, {
            method: 'POST',
            body: JSON.stringify({ Text: commentText, discussion_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response)

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create discussion');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/discussion/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete discussion');
        }
    }
};

document
    .querySelector('.new-comment')
    .addEventListener('submit', newFormHandler);

  // document
  //   .querySelector('.discussion-list')
  //   .addEventListener('click', delButtonHandler);
