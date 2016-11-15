function makeRequest(url, method) {
    fetch(url, {
        method: method
    })
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
        var err = new Error(response.statusText);
        err.response = response;
        return err;
    })
}


/*

API

	GET api/books/:id -> get Book detais { id: 15, name: 'The Adventures of Tom Sawyer', authorId: 25 }

	GET api/authors/:id -> get Author detais { name: 'Mark Twain' books: [34, 57, 69, 15] }

	GET api/bestsellers/similar/:id
	-> get mutiple book names

	'The Prince and the Pauper',
	'Golden Age',
	'The Adventures of Huckleberry Finn',
	'Old Times on the Mississippi'



*/

/*

HTML

	<div>
		<div id="book">

		</div>

		<div id="author">

		</div>

		<div id="similar">

		</div>
	</div>

*/


function getBookById(id) {
	document.getElementById('book').textContent = 'Please wait. Book is loading';

	makeRequest('api/books/' + id, 'GET')
        .then(function (response) {
    		document.getElementById('book').textContent = response.name;
    	})
        .catch(function (response) {
    		document.getElementById('book').textContent = 'Error. Please refresh your browser';
    	}))
}

function loadPage(bookId) {

	document.getElementById('book').textContent = 'Please wait. Book is loading';
	document.getElementById('author').textContent = 'Please wait. Author details are loading';
	document.getElementById('similar').textContent = 'Please wait. Similar books are loading';

	makeRequest('api/books/' + bookId, 'GET')
        .catch(function() {
            document.getElementById('book').textContent = 'Error. Please refresh your browser';
        })
        .then(function (book) {
    		document.getElementById('book').textContent = book.name;
        })
        .then(function(book) {
            return makeRequest('api/autors' + book.authorId, 'GET')
        })
        .catch(function() {
            document.getElementById('author').textContent = 'Error. Please refresh your browser';
        })
        .then(function(author) {
            document.getElementById('author').textContent = author.name;
			var similarBooksLoaded = 0;
			var similarBooksAmount = author.books.lenght;

            Promise.all(author.books.map(function(similarBookId){
                return makeRequest('api/bestsellers/similar/' + similarBookId, 'GET');
            }))
                .then(function(response){
                    var p = document.getElementById('similar').appendChild('p').textContent = response;
                    alert('Horray everything loaded');
                })
                .catch(function(err){
                    document.getElementById('similar').textContent = 'Error. Please refresh your browser';
                });
            })
        });
}

/*

Rewrite using fetch API https://developer.mozilla.org/ru/docs/Web/API/Fetch_API

*/
