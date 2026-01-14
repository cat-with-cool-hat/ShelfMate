import LogoBanner from "../components/LogoBanner.js";
import AddNewBookButton from "../components/AddNewBookButton.js";
import Searchbar from "../components/Searchbar.js";
import BookSelector from "../components/BookSelector.js";
import BookListMenu from "../components/BookListMenu.js";



const htmlTemplate = /*html*/`
<div>
  <div class="homeview-header-div">
    <LogoBanner/>
    <Searchbar @update:search="search = $event" label="Search for a book:" searchPlaceholder="enter book title..."/>
    <span class="homeview-heading-span">
      <h4 v-if="currentFilter == 'all'" class="homeview-heading">All books</h4>
      <h4 v-else-if="currentFilter == 'currently'" class="homeview-heading">Currently reading</h4>
      <h4 v-else-if="currentFilter == 'wanting'" class="homeview-heading">Wanting to read</h4>
      <h4 v-else-if="currentFilter == 'done'" class="homeview-heading">Done reading</h4>
      <AddNewBookButton/>
    </span>
  </div>
  <div class="book-scroll-div">
    <BookListMenu v-model="currentFilter"/>
    <BookSelector :list="currentFilter" :search="search"/>
  </div>
</div>
`

export default {
  template: htmlTemplate,
  components: { LogoBanner, AddNewBookButton, Searchbar, BookSelector, BookListMenu },
  data() {
    return {
      currentFilter: 'all',
      search: ''
    };
  }
};