document.addEventListener('DOMContentLoaded',function(){
        const elementName=document.querySelector('#name');
        const elementUsername=document.querySelector('#username');
        const elementAvatar=document.querySelector('#avatar');
        const elementResp=document.querySelector('#respos');
        const elementFollowers=document.querySelector('#followers')
        const elementFollowing=document.querySelector('#following');
        const elementLink=document.querySelector('#link');


        fetch('https://api.github.com/users/WilfredoSolorzano')
        .then(function(res){
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
    })