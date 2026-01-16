const htmlTemplate = /*html*/`
<div style="margin-bottom: 1em;">
<!-- :value setzt den Select auf den Wert des Selects auf den Wert vom Prop -->
  <select name="bookList" id="bookList" class="dropdown" name="bookList" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option value="currently">currently reading</option>
    <option value="wanting">wanting to read</option>
    <option value="done">done reading</option>
  </select>
</div>
`

export default {
  template: htmlTemplate,
  props: {
    modelValue: {
      type: String,
      default: "wanting"
    }
  }
};