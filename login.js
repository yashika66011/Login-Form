credentials = [
    {
        name: 'Daksh',
        email: 'daksh@gmail.com',
        password: 'test123'
    },
    {
        name: 'Yashika',
        email: 'yashu@gmail.com',
        password: 'test123'
    },
    {
        name: 'Name1',
        email: 'name1@gmail.com',
        password: 'test123'
    },  
    {
        name: 'Name2',
        email: 'name2@gmail.com',
        password: 'test123'
    },  
    {
        name: 'Name3',
        email: 'name3@gmail.com',
        password: 'test123'
    }  
]

const login = document.querySelector('#login');
login.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = login['email'].value;
    const password = login['pwd'].value;
    let flag = 0;

    credentials.forEach(cred => {
        if(email == cred.email && password == cred.password) {
            alert("Welcome " + cred.name);
            flag = 1;
        }
    });

    if(flag == 0)
        alert('Kindly recheck the email and password!!');
    else {
        login['email'].value = '';
        login['pwd'].value = '';
    }


    


})