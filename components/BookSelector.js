import BookSelectorItem from "./BookSelectorItem.js";

const htmlTemplate = /*html*/`
<div class="book-selector">
    <BookSelectorItem v-for="book in filteredBooks" :key="book.id" :book="book"/> <!-- v-for wie eine for each schleife -->
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
            if (this.list !== 'all') {
                books = books.filter(b => b.label === this.list); // compare label of book with label of chosen list
            }

            if (this.search.trim() !== "") { // trim removes whitespace
                const s = this.search.toLowerCase();
                books = books.filter(b => b.title.toLowerCase().includes(s));
            }

            return books;
        }
    },
    created() {
        const saved = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
        this.books = saved;
    }
};