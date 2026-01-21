const htmlTemplate = /*html*/`
<label for="newBookButton" class="visually-hidden">add a new book</label>
<router-link to="/bookinput"><button id="newBookButton">+ &#128214;</button></router-link>
`
export default {
  template: htmlTemplate
};