const htmlTemplate = /*html*/`
<div class="book-selector-item">
    <ul> <!--  die Backslash sind fürs Erkennen der Akzent-Zeichen -->
      <li><router-link :to="\`/book/\${book.id}\`"><img :src="bookCoverUrl" alt="book cover" class="book-selector-item-img"></router-link></li>
      <li><b>{{ book.title }}</b></li>
      <li>{{ book.author }}</li>
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
      let path = this.book.photo ? this.book.photo : '/img/closed-book-icon.jpg';
      return './' + path;
    }
  }
};