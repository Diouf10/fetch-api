const url = 'https://lesoublisdelinfo.com/api.php';

// let requete = new XMLHttpRequest();

// Get
// requete.open('GET', url);
// requete.responseType = 'json';
// requete.send();

// Post
// requete.open('POST', url);
// requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// requete.responseType = 'json';
// requete.send('prenom=John');

// requete.onload = function() {
//   if (requete.readyState === XMLHttpRequest.DONE) {
//     if (requete.status === 200) {
//       let reponse = requete.response;
//       console.log(reponse);
//     }
//     else {
//       alert('Un problème est intervenu, merci de revenir plus tard.');
//     }
//   }
// }

async function Effectuer(prenom) {
    const requete = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          // si on veut envoyer du JSON
          // 'Content-Type': 'application/json'
        },
        body: new URLSearchParams({
          prenom: prenom
        })

        // si on veut envoyer du JSON
        // body: JSON.stringify({
        //   prenom: prenom
        // })
      });

      if (!requete.ok) {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      } else {
        const reponse = await requete.json();
        console.log(reponse);
      }
}

Effectuer('John');

