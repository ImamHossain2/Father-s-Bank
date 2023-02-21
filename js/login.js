document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    email = emailField.value;

    const passwordField = document.getElementById('user-password');
    password = passwordField.value;

    if(email ==='123@gmail.com' && password ==='secret') {
        window.location.href = 'bank.html'
    }
    else{
        alert('You forgot to enter your Bank account');
    }
    
}) 