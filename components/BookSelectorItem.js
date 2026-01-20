const htmlTemplate = /*html*/`
<div class="book-selector-item">
    <ul> <!--  die Backslash sind fürs Erkennen der Akzent-Zeichen -->
      <router-link :to="\`/book/\${book.id}\`">
      <li><img :src="bookCoverUrl" alt="book cover" class="book-selector-item-img"></li>
      </router-link>
      <li><button @click="navigateToBook"><b>{{ book.title }}</b></button></li>
      <li tabindex="0">{{ book.author }}</li>
    </ul>
</div>
`

export default {
  template: htmlTemplate,
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  computed: {
    bookCoverUrl() {
      let path = this.book.photo ? this.book.photo : './img/closed-book-icon.jpg';
      return path;
    }
  },
  methods: {
    navigateToBook() {
      this.$router.push("/book/" + this.book.id);
    }
  }
};