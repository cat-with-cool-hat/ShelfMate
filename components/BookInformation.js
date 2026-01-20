import BookInformationStars from "./BookInformationStars.js";
import BookGenre from "./BookGenre.js";
import BookDropdownLabel from "../components/BookDropdownLabel.js";
import BookInformationFact from "./BookInformationFact.js";
import BookInformationNotes from "./BookInformationNotes.js";

const KEY_BOOK = "KEY_BOOK";

const htmlTemplate = /*html*/`
<div v-if="book" class="book-information-div">
    <div style="text-align: center;">
        <img :src="book.photo ? book.photo : '/img/closed-book-icon.jpg'" alt="book cover" class="book-information-img"/>
    </div>
    <h2 class="book-information-title" tabindex="0">{{ book.title }}</h2>
    <h3 class="book-information-author" tabindex="0">{{ book.author }}</h3>
    <BookInformationStars :stars="book.stars"/>
    <div class="book-information-genre-label-div">
        <BookDropdownLabel :modelValue="book.label"/>
        <BookGenre :genre="book.genre"/>
    </div>
    <div class="book-information-facts-div">
        <BookInformationNotes :notes="book.notes"/>
        <BookInformationFact :fact="book.page" type="Current page"/>
        <BookInformationFact :fact="book.location" type="Stored here"/>
        <BookInformationFact :fact="book.price" type="Price"/>
    </div>
    <label for="editButton" class="visually-hidden" >edit</label>
    <router-link :to="\`/bookinput/\${book.id}\`"><button id="editButton" class="edit-button">&#128221;</button></router-link>
</div>
`

export default {
    template: htmlTemplate,
    data() {
        return {
            book: null
        };
    },
    created() {
        const id = Number(this.$route.params.id);
        const books = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
        this.book = books.find(b => b.id === id);
    },
    components: { BookInformationStars, BookGenre, BookDropdownLabel, BookInformationFact, BookInformationNotes }
};