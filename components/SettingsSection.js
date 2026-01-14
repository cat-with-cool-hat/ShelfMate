import SettingsSwitch from "./SettingsSwitch.js";
import Searchbar from "./Searchbar.js";

const htmlTemplate = /*html*/`
<details>
    <summary>App appearance</summary>
    <SettingsSwitch/><br>
    <SettingsSwitch/><br>
    <SettingsSwitch/>
</details>
<details>
    <summary>Search Annotations</summary>
    <form >
        <Searchbar/>
    </form>
</details>
<details>
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
    components: { SettingsSwitch, Searchbar }
};