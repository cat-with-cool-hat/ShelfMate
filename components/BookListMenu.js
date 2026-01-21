const htmlTemplate = /*html*/`
<ul class="book-list-menu">
  <li>
    <label for="allBooks" class="visually-hidden" >all books</label>
    <button id="allBooks" @click.prevent="$emit('update:modelValue', 'all')" :class="['book-list-menu-item', { active: modelValue === 'all' }]">&#128218;</button>
  </li>
  <li>
    <label for="currentlyReading" class="visually-hidden" >currently reading</label>
    <button id="currentlyReading" @click.prevent="$emit('update:modelValue', 'currently')" :class="['book-list-menu-item', { active: modelValue === 'currently' }]">&#128214;</button>
  </li>
  <li>
    <label for="wantingToRead" class="visually-hidden" >wanting to read</label>
    <button id="wantingToRead" @click.prevent="$emit('update:modelValue', 'wanting')" :class="['book-list-menu-item', { active: modelValue === 'wanting' }]">&#127775;</button>
  </li>
  <li>
    <label for="doneReading" class="visually-hidden" >done reading</label>
    <button id="doneReading" @click.prevent="$emit('update:modelValue', 'done')" :class="['book-list-menu-item', { active: modelValue === 'done' }]">&#128216;</button>
  </li>
</ul>
`;

export default {
  template: htmlTemplate,
  props: {
    modelValue: {
      type: String,
      default: 'all'
    }
  }
};