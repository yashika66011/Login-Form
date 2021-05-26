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

//         Gender --> Radio Button
//         Age --> Number
//         Hobbies --> Checkbox
//         State --> Select Menu

//     //Task1: Password minimum length should be 6characters and max should be 12
//     //Task2: Only submit when the I agree checkbox is ticked
//     //Task3: Email verify
//     /*
//         Email consits of 4 parts:
//             abc@xyz.com
//             [text]@[text].[text]
//         Hint: Regex (Regular Expressions)
//     */

function validate() {
    const name = signup['name'].value;
    const email = signup['email'].value;
    const password = signup['pwd'].value;
    const check = signup['remember'];
    const email_check = new RegExp('[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-z]+');

    let flag = 0;
    if(!(password.length > 6 && password.length<12))  {
        alert('Minimum length = 6 & Maximum length = 12');
        flag++;
    }
    else
        flag--;

    if(!check.checked) {
        alert('Kindly tick the checkbox');
        flag++;
    }
    else
        flag--;

    if(!email_check.test(email)) {
        alert('check email');
        flag++;
    }
    else
        flag--;

    if(flag == -3) {
        const user = {
            name: name,
            email: email,
            password: password
        };
        console.log(user);

        credentials.push(user);
        console.log(credentials);
        alert('Form submitted yeah!!')
        return false;
    }
    else
        return false;
}