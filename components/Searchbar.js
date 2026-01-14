const htmlTemplate = /*html*/`
<form class="searchbar-div">
    <label for="searchbar" class="visually-hidden" >Search for a book: </label>
    <input type="text" id="searchbar" placeholder="enter book title..." class="searchbar-input">
    <button type="submit" class="searchbar-button">&#x1F50E;&#xFE0E;</button>
</form>
`

export default {
    template: htmlTemplate
};