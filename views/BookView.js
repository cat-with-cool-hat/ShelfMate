import BookInformation from "../components/BookInformation.js";

const htmlTemplate = /*html*/`
<div>
  <label for="goBackButton" class="visually-hidden" >go back</label>
  <button @click="goBack" id="goBackButton" class="back-button">&larr;</button><br>
  <BookInformation/>
</div>
`

export default {
  template: htmlTemplate,
  components: { BookInformation },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};