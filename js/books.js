const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs[3]));
}
const displaySearchResult = docs => {
    console.log(docs);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
          <img src="${docs.cover_i}">
          <div class="card text-dark bg-info mb-3">
         <div class="card-header">Books</div>
          <div class="card-body">
          <h5 class="card-title">Books Information</h5>
          <p class="card-text">Book Name: ${docs.title}</p>
          <p>Author Name: ${docs.author_name}</p>
          <p>Publisher: ${docs.publisher}</p>
          <p>First Publish Year: ${docs?.first_publish_year}</p>
          
         </div>
        `;
        searchResult.appendChild(div);
}
