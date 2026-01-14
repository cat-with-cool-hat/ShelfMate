import dataService from "../service/dataService.js";
import BookPhotoInput from "./BookPhotoInput.js";
import BookInformationStarsInput from "./BookInformationStarsInput.js";
import BookDropdownLabel from "./BookDropdownLabel.js";
import BookInformationNotesInput from "./BookInformationNotesInput.js";
import BookInformationFactInput from "./BookInformationFactInput.js";
import BookInformationGenreInput from "./BookInformationGenreInput.js";

const htmlTemplate = /*html*/`
<div class="book-information-input-div">
    <label for="deleteButton" class="visually-hidden" >delete books</label>
    <button id="deleteButton" v-if="isEdit" type="button" @click="$emit('delete')" class="delete-button">&#128465;</button>
    <form @submit="addNewBook"> <!-- @submit.prevent prevents refresh, but we want to have the form emptied -->
        <BookPhotoInput v-model="newBook.photo"/>
        <BookInformationStarsInput v-model="newBook.stars"/>
        <div class="book-information-genre-label-div">
            <BookDropdownLabel v-model="newBook.label"/>
            <BookInformationGenreInput v-model="newBook.genre"/><br>
        </div>
        <div class="book-information-facts-div">
            <BookInformationNotesInput v-model="newBook.notes" label="Notes" inputId="notes"/><br>
            <BookInformationFactInput v-model="newBook.title" label="Title" inputId="title"/><br>
            <BookInformationFactInput v-model="newBook.author" label="Author" inputId="author"/><br>
            <BookInformationFactInput v-model="newBook.page" label="Page" inputId="page"/><br>
            <BookInformationFactInput v-model="newBook.location" label="Location" inputId="location"/><br>
            <BookInformationFactInput v-model="newBook.price" label="Price" inputId="price"/><br>
        </div>
        <input type="submit" value="&#128190;" class="save-button">
    </form>
</div>
`
const KEY_BOOK = "KEY_BOOK";

export default {
    template: htmlTemplate,
    components: { BookPhotoInput, BookInformationStarsInput, BookDropdownLabel, BookInformationGenreInput, BookInformationNotesInput, BookInformationFactInput },
    props: {
        modelValue: {
            type: Object,
            required: true
        },
        isEdit: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'delete'],
    computed: {
        newBook: {
            get() {
                return this.modelValue;
            },
            set(val) {
                this.$emit('update:modelValue', val);
            }
        }
    },
    methods: {
        addNewBook() {
            const books = dataService.get(KEY_BOOK) || [];

            if (this.isEdit) {
                const index = books.findIndex(b => b.id === this.newBook.id);
                if (index !== -1) {
                    books[index] = { ...this.newBook }; //Update book that already exists
                }
            } else {
                this.newBook.id = Date.now();
                books.push({ ...this.newBook }); //Create new book
            }

            dataService.save(KEY_BOOK, books);
            this.$router.push(`/book/${this.newBook.id}`);
        }
    }
};