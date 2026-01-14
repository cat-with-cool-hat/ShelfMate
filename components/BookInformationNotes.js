const htmlTemplate = /*html*/`
<h6>Notes:</h6>
<div class="book-information-notes-div">
  <p>{{ notes }}</p>
</div>
`

export default {
  template: htmlTemplate,
  props: {
    notes: {
      type: String,
      default: "... no notes yet ..."
    }
  }
};