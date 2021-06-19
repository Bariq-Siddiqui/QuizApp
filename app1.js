function submitForm(e){
    e.preventDefault();
    let name = document.forms["form"]["name"].value
    sessionStorage.setItem("Name",name)
    let fname = document.forms["form"]["fname"].value
    sessionStorage.setItem("fname",fname)
    let email = document.forms["form"]["email"].value
    sessionStorage.setItem("email",email)
    
}
function jump(){
    location.href = "indexquiz.html"
}