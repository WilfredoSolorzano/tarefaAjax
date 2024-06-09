document.addEventListener('DOMContentLoaded',function(){
        const elementName=document.querySelector('#name');
        const elementUsername=document.querySelector('#username');
        const elementAvatar=document.querySelector('#avatar');
        const elementResp=document.querySelector('#respos');
        const elementFollowers=document.querySelector('#followers')
        const elementFollowing=document.querySelector('#following');
        const elementLink=document.querySelector('#link');


        fetch('https://api.github.com/users/WilfredoSolorzan0000')
         .then(function (res) {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            return res.json();
        })
        .then(function(json){
            elementName.innerText=json.name;
            elementUsername.innerText=json.login;
            elementAvatar.src=json.avatar_url;
            elementFollowers.innerText=json.following;
            elementFollowing.innerText=json.followers;
            elementResp.innerText=json.public_repos;
            elementLink.href=json.html_url;
        })
        .catch(function (error) {
            alert('Ocurreu um erro ao buscar os dados do GitHub, tente novamente mais tarde.');
            console.error('Fetch error: ', error);
            elementName.innerText = 'Error loading name';
            elementUsername.innerText = 'Error loading username';
            elementAvatar.src = 'https://via.placeholder.com/180x180';
            elementFollowers.innerText = 'Error';
            elementFollowing.innerText = 'Error';
            elementResp.innerText = 'Error';
            elementLink.href = '#';
        });
    })