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
        }
    },
    data() {
        return {
            books: [],
        };
    },
    computed: {
        filteredBooks() {
            if (this.list === 'all') return this.books;
            return this.books.filter(b => b.label === this.list); // compare label of book with label of chosen list
        }
    },
    created() {
        const saved = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
        this.books = saved;
    }
};