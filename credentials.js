const signUp = e => {
    let uname = document.getElementById('uname').value,
        pwd = document.getElementById('pwd').value;
        score = 0;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.uname.toLowerCase() == uname.toLowerCase() && 
            data.pwd.toLowerCase() == pwd.toLowerCase()
        )

        if(!exist){
            formData.push({uname,pwd,score});
            localStorage.setItem('formData', JSON.stringify(formData));
            document.querySelector('form').reset();
            document.getElementById('uname').focus();
            alert("Account Created.");
            console.log("Account created");
        }
        else{
            alert("Duplicate found!\nYou are already signed up");
        }
        e.preventDefault();
    }

    function signIn(e) {
        let uname = document.getElementById('uname').value, pwd = document.getElementById('pwd').value;
        let formData = JSON.parse(localStorage.getItem('formData')) || [];
        let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => data.uname.toLowerCase() == uname && data.pwd.toLowerCase() == pwd);
        if(!exist){
            alert("Incorrect login credentials");
        }
        else{
            location.href = "game.html";
            console.log(localStorage);
        }
        e.preventDefault();
    }
    