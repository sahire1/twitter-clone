const form= document.querySelector('form');
const loadingElement=document.querySelector('.loading');
const API_URL="http:/localhost:500/mews";

loadingElement.style.display='none';
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formData=new FormData(form);
    const name=formData.get('name');
    const content=formData.get('content');

    const mew={
        name,content
    };
  
    form.style.display='none';
    loadingElement.style.display='';

    listAllMews();
    fetch(API_URL,{
        method:'POST',
        body: JSON.stringify(mew),
        headers:{
            'content-type':'application/json'
        }
    }).then(response => response.json())
    .then(createdMew=>{
       
        form.reset();
        form.style.display='';
        listAllMews();
        loadingElement.style.display='none';
});
});

function listAllMews()
{

    mews.Element.innerHTML='';
    fetch(API_URL)
    .then(response=> response.json())
    .then(mews =>{
        mew.reverse();
        mew.forEach(mew =>{
            const div= document.createElement('div');
            const header=document.createElement('h3');
            header.textContent=mew.name;
            const contents=document.createElement('p');
            contents.textContent=mew.content;
            const date=document.createElement('small');
            date.textContent=new Date(mew.created);

            div.appendChild(header);
            div.appendChild(contents);
            div.appendChild(date);

            mewsElement.appendChild(div);
        })


    });
}