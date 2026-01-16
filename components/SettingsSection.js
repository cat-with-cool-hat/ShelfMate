import SettingsSwitch from "./SettingsSwitch.js";
import Searchbar from "./Searchbar.js";
import BookSelector from "../components/BookSelector.js";

const htmlTemplate = /*html*/`
<div>
    
</div>
<details class="settings-section-details" open>
    <summary>Search Annotations</summary>
    <form >
        <Searchbar @update:search="search = $event" label="Search annotations:" searchPlaceholder="enter annotation text..."/>
        <BookSelector v-if="search.trim() !== ''" list="all" :search="search" searchType="annotation"/>
    </form>
</details>
<details class="settings-section-details">
    <summary>App appearance</summary>
    <SettingsSwitch/><br>
    <SettingsSwitch/><br>
    <SettingsSwitch/>
</details>
<details class="settings-section-details" style="margin-bottom: 5em;">
    <summary>FAQ</summary>
    <ul>
        <li>Question</li>
        <ul>
            <li>Answer</li>
        </ul>
        <li>Question</li>
        <ul>
            <li>Answer</li>
        </ul>
        <li>Question</li>
        <ul>
            <li>Answer</li>
        </ul>
    </ul>
</details>
`
export default {
    template: htmlTemplate,
    components: { SettingsSwitch, Searchbar, BookSelector },
    data() {
        return {
            search: ''
        };
    }
};