const searchFood = () => {
    // display show to input field 
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    // get api from meal db

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => searchData(data.meals))

}

// get data from meal bd


const searchData = meals => {
    const constainer = document.getElementById('search-food');
    console.log(meals);
    meals.forEach(meal=>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
              <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top " alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
        `
        constainer.appendChild(div);
    })
    
}