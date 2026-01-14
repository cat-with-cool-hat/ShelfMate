import BookInformationInput from "../components/BookInformationInput.js";

const htmlTemplate = /*html*/`
<div>
  <label for="goBackButton" class="visually-hidden" >go back</label>
  <router-link to="/"><button id="goBackButton" class="back-button">&larr;</button></router-link><br>
  <BookInformationInput v-model="newBook" :isEdit="isEdit" @delete="deleteBook"/>
</div>
`
const KEY_BOOK = "KEY_BOOK";

export default {
  template: htmlTemplate,
  components: { BookInformationInput },
  data() {
    return {
      isEdit: false,
      newBook: {
        id: null,
        photo: null,
        stars: 0,
        label: '',
        genre: [],
        title: '',
        author: '',
        notes: '',
        page: '',
        location: '',
        price: '',
      }
    }
  },
  created() {
    const id = this.$route.params.id;

    if (id) {
      const books = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
      const book = books.find(b => b.id === Number(id));

      if (book) {
        this.newBook = { ...book }; // Formular vorbefüllen
        this.isEdit = true;
      }
    }
  },
  methods: {
    deleteBook() {
      if (!confirm("Really delete this book?")) return; // wenn man abbrechen klickt, wird nichts gemacht
      if (!this.isEdit) return; // würde keinen sinn machen ein buch zu löschen, dass noch nicht existiert

      const books = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
      const filtered = books.filter(b => b.id !== this.newBook.id);

      localStorage.setItem(KEY_BOOK, JSON.stringify(filtered));

      this.$router.push("/"); //= nach dem löschen kehrt man zurück zu home
    }
  }
};