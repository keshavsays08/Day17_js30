const bands = ['The Plot in You','The Devil wears Prada','Pierce the Veil','Norma Jean','The Bled','Say Anything','The Midway State','We Came as Romans','Couterparts','Oh, Sleeper','A Skylit Drive','Anywhere But Here','An Old Dog'];

function strip (bandName){
    return bandName.replace(/^(a |the |an )/i,'').trim();
}
const list = bands.sort((a,b)=> strip(a)>strip(b)?1:-1);
// const list = bands.sort((a, b) => {
//     const ignoreArticles = name => {
//         const articles = ['the', 'a', 'an'];
//         const words = name.split(' ');
//         if (articles.includes(words[0].toLowerCase())) {
//             return words.slice(1).join(' ');
//         }
//         return name;
//     };

//     const aLast = ignoreArticles(a);
//     const bLast = ignoreArticles(b);

//     return aLast.localeCompare(bLast);
// });

// console.table(list)

const sortedArray = document.querySelector('.children')
sortedArray.innerHTML = list
.map(bands =>`<li class="list-item">${bands}</li>`)
.join('<br>');