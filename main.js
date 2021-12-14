const form = document.querySelector('#form');
const button = document.querySelector('#submit');
const form = document.querySelector('#post');

const onSubmit = async (event) => {
    event.preventDefault();
    console.dir(form[0].value);
    console.dir(form[1].value);
    console.dir(form[2].value);
    console.dir(form[3].value);

    const response = await fetch('http://localhost:4000/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
      });

    console.log(response);
};

button.addEventListener('click', onSubmit);
