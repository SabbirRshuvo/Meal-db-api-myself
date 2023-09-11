const searchFood = () => {
    // display show to input field 
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

}