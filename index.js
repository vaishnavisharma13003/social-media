var settingsmenu=  document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark" )

    }
    else{
        localStorage.setItem("theme","light" );
    }

}


 if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

 }
 else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");


 }

else{
    localStorage.setItem("theme","light" );


}



// profile  popup

document.querySelectorAll('#my-profile-picture').forEach(AllProfile=>
    {
        AllProfile.addEventListener('click',()=>{
            document.querySelector('.profile-popup').style.display='flex'
        })
    })


    document.querySelectorAll('.close').forEach(AllCloser=>
        {
            AllCloser.addEventListener('click',()=>{
                document.querySelector('.profile-popup').style.display='none'
            })
        })

        let profilePic=document.getElementById("my-profile-picture");
        let uploadFile=document.getElementById("profile-upload");
        
        uploadFile.onchange = function(){
            profilePic.src=URL.createObjectURL(uploadFile.files[0]);
        }



        // document.querySelectorAll('#profile-upload').addEventListener('change',()=>{

        //     document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        //         AllMyProfileImg.src=URL.createObjectURL(document.querySelector('#profile-upload').files[0])
        //     })
        // })





        // friend request

        let Accept=document.querySelectorAll('#Accept');
        let Dlete=document.querySelectorAll('#Delete');

        Accept.forEach(accept=>{
            accept.addEventListener('click',()=>{
                accept.parentElement.style.display='none'
                accept.parentElement.parentElement.querySelector('.alert').style.display='block'
            })
        })

        Dlete.forEach(deletee=>{
            deletee.addEventListener('click',()=>{
                deletee.parentElement.parentElement.style.display='none'

            })
        })

        




