const htmlTemplate = /*html*/`
<h6 tabindex="0">Notes:</h6>
<div class="book-information-notes-div">
  <p tabindex="0">{{ notes }}</p>
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