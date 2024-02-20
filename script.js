const repos = document.getElementById("repository");
const gists = document.getElementById("gists");
const main = document.querySelector('main')
const tableHead = document.getElementById('mainTable-head')
const tableBody = document.getElementById('mainTable-body')
repos.addEventListener("click", async(e)=> {
  clearDisplayBody()
  e.preventDefault()
  var name = document.getElementById("username").value;
  let apiUrl = (`https://api.github.com/users/${name}/repos`)
  try{
    const response = await fetch(apiUrl)
    const data = await response.json()
      console.log(data);
      tableHead.innerHTML += `<tr>
       <th scope="col">full_name</th>
       <th scope="col">language</th>
       <th scope="col">html_url</th>
     </tr>`
      data.forEach(item => {
        tableBody.innerHTML += ` <tr>
        <th scope="row">${item.full_name}</th>
        <td>${item.language}</td>
        <td><a href="">${item.html_url}</a></td>
      </tr>`   
  })   
      }catch(error){
        document.querySelector('main').innerHTML = (`<p id=js-para>${error}</p>`)
          }
        })
gists.addEventListener('click', async(e)=>{
  clearDisplayBody()
  console.log('clicked');
  e.preventDefault()
  const name = document.getElementById("username").value;
  const url = (`https://api.github.com/users/${name}/gists`)
  try{
    const response = await fetch(url)
    const data = await response.json();
      console.log(data);
      tableHead.innerHTML += `<tr>
        <th scope="col">html_url</th>
        <th scope="col">created_at</th>
      </tr>`
      data.forEach(item => {
        tableBody.innerHTML+=` <tr>
        <th scope="row"><a href="${item.html_url}">${item.html_url}</a></th>
        <td>${item.created_at}</td>
      </tr>`
      });
    }catch(error){
        document.querySelector('main').innerHTML = (`<p id=js-para>${error}</p>`)
    }
})
async function getFollowing() {
  clearDisplayBody()
  const name = document.getElementById("username").value;

  const url = (`https://api.github.com/users/${name}/following`)
  try{
    const response = await fetch(url)
    const data= await response.json()
      console.log(data);
      tableHead.innerHTML += `<tr>
    <th scope="col">archive_url</th>
    <th scope="col">login</th>
    <th scope="col">html_url</th>
  </tr>`
      data.forEach(element => {
       tableBody.innerHTML += `<tr>
        <td><img src="${element.avatar_url}" height="100" width="100"></td>
        <td>${element.login}</td>
        <td><a href="${element.html_url}">${element.html_url}</a></td>
      </tr>`
      });
    }
   catch(error){
        document.querySelector('main').innerHTML = (`<p id=js-para>${error}</p>`)
          
    }
}
// function getFollowers() {
//   clearDisplayBody()
//   const name = document.getElementById("username").value;
//   fetch(`https://api.github.com/users/${name}/following`)
//     .then((result) => result.json())
//     .then((data) => {
//       console.log(data);
//       tableHead.innerHTML += `<tr>
//     <th scope="col">archive_url</th>
//     <th scope="col">login</th>
//     <th scope="col">html_url</th>
//   </tr>`
//       data.forEach(status => {
//         tableBody.innerHTML += ` <tr>
//         <td><img src="${status.avatar_url}" height="100" width="100"></td>3
//         <td>${status.login}</td>
//         <td><a href="${status.html_url}">${status.html_url}</a></td>
//       </tr>`;
//         });
//     })
// }
function clearDisplayBody() {
  tableBody.innerHTML = ""
  tableHead.innerHTML = ""
  // document.querySelector('main').innerHTML = ''
}

async function getFollowers(){
  clearDisplayBody()
  const name = document.getElementById('username').value;
  const url = `https://api.github.com/users/${name}/following`;
  try{
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
    tableHead.innerHTML += `<tr>
        <th scope="col">archive_url</th>
         <th scope="col">login</th>
         <th scope="col">html_url</th>
       </tr>`
       data.forEach(status => {
        tableBody.innerHTML +=` <tr>
         <td><img src="${status.avatar_url}" height="100" width="100"></td>
         <td>${status.login}</td>
         <td><a href="${status.html_url}">${status.html_url}</a></td>
         </tr>`; 
       })
  }catch(error){
document.querySelector('main').innerHTML = (`<p id=js-para>${error}</p>`)
  }
}