const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#discussion-name').value.trim();
  const needed_funding = document.querySelector('#discussion-funding').value.trim();
  const description = document.querySelector('#discussion-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/discussion`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

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
  .querySelector('.new-discussion-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.discussion-list')
  .addEventListener('click', delButtonHandler);
