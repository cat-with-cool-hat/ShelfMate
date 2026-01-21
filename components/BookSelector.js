import BookSelectorItem from "./BookSelectorItem.js";

const htmlTemplate = /*html*/`
<div class="book-selector">
    <BookSelectorItem v-for="book in filteredBooks" :key="book.id" :book="book"/> <!-- v-for wie eine for each schleife -->
</div>
<div v-if="searchType === 'title' && filteredBooks.length === 0" style="text-align: center; width: 100%; margin-top: 2em;">
    <div v-if="search === ''">
        <p tabindex="0">This list is empty.<br>Add some books first! &#129299;</p>
    </div>
    <div v-else>
        <p tabindex="0">Hmm ... &#128566;</p>
        <p tabindex="0">No books or authors found named <i>"{{ search }}"</i></p>
    </div>
</div>
<div v-if="searchType === 'annotation' && filteredBooks.length === 0" style="text-align: center; width: 100%; margin-top: 2em;">
    <p tabindex="0">Hmm ... &#128566;</p>
    <p tabindex="0">No notes found containing <i>"{{ search }}"</i></p>
</div>
`
const KEY_BOOK = "KEY_BOOK";

export default {
    template: htmlTemplate,
    components: { BookSelectorItem },
    props: {
        list: {
            type: String,
            default: "all"
        },
        search: {
            type: String,
            default: ""
        },
        searchType: {
            type: String,
            default: "title"
        }
    },
    data() {
        return {
            books: [],
        };
    },
    computed: {
        filteredBooks() {
            let books = this.books;
            if (this.searchType === "title") { // search by book title
                if (this.list !== 'all') {
                    books = books.filter(b => b.label === this.list); // compare label of book with label of chosen list
                }

                if (this.search.trim() !== "") { // trim removes whitespace
                    const s = this.search.toLowerCase().trim();
                    books = books.filter(b => b.title.toLowerCase().includes(s) || b.author.toLowerCase().includes(s));
                }
            }
            else if (this.searchType === "annotation") { // search by annotation text
                if (this.search.trim() !== "") { // trim removes whitespace
                    const s = this.search.toLowerCase().trim();
                    books = books.filter(b => b.notes.toLowerCase().includes(s));
                }
            }

            return books;
        }
    },
    created() {
        const saved = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
        this.books = saved;
    }
};