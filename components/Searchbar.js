const htmlTemplate = /*html*/`
<form class="searchbar-div" @submit.prevent>
    <label for="searchbar" class="visually-hidden" >{{ label }} </label>
    <input type="text" id="searchbar" :placeholder="searchPlaceholder" class="searchbar-input" v-model="searchText" @input="$emit('update:search', searchText)"/>
    <label for="searchbar-button" class="visually-hidden" >commit search</label>
    <button type="submit" class="searchbar-button" id="searchbar-button">&#x1F50E;</button>
</form>
`

export default {
    template: htmlTemplate,
    props: {
        label: {
            type: String,
            default: "Search:"
        },
        searchPlaceholder: {
            type: String,
            default: "..."
        }
    },
    data() {
        return {
            searchText: ''
        };
    }
};