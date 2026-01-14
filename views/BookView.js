import BookInformation from "../components/BookInformation.js";

const htmlTemplate = /*html*/`
<div>
  <label for="goBackButton" class="visually-hidden" >go back</label>
  <router-link to="/"><button id="goBackButton" class="back-button">&larr;</button></router-link><br>
  <BookInformation/>
</div>
`

export default {
  template: htmlTemplate,
  components: { BookInformation }
};