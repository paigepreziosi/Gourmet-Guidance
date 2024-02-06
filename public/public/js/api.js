


document.getElementById("search").addEventListener('click',()=>{
    let inputValue = document.getElementById('inputName').value
    let details = document.getElementById("details")
    details.innerHTML = ""
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(response => response.json())
        .then(data=> {
            const items = document.getElementById("items")
            items.innerHTML = ""
            if(data.meals == null){
                document.getElementById("msg").style.display = "block"
            }else{
                document.getElementById("msg").style.display = "none"
                data.meals.forEach(meal =>{
                    itemDiv = document.createElement("div")
                    itemDiv.className = "m-2 singleItem"
                    itemDiv.setAttribute('onclick' , `details('${meal.idMeal}')`)
                    let  itemInfo = `
                    <div class="card " style="width: 12rem;">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 id="search" class="card-text">${meal.strMeal}</h5>
                        </div>
                    </div>
                    `
                    itemDiv.innerHTML = itemInfo
                    items.appendChild(itemDiv)
                })
            }


        })
})


function details(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(detail => {
            let meal = detail.meals[0]
            console.log(meal)
            let details = document.getElementById("details")
            details.innerHTML = ""
            let detailsDiv = document.createElement("div")
            let detailsInfo = `
                <div class="card "style="width: 60%">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body ">
                        <h3 id="search" class="card-text">${meal.strMeal}</h3>
                        
                        <h6 id="search">Origin</h6>
                        <ul>
                            <li id="search">${meal.strArea}</li>
                        </ul>

                        <h6 id="search">Category</h6>
                        <ul>
                            <li id="search">${meal.strCategory}</li>
                        </ul>

                        <h6 id="search">Ingredients</h6>
                        <ul id="ingredientsList">
                            ${generateIngredientsList(meal)}
                        </ul>
                    </div>
                </div>
                <br>
                <h2 class="instructions-heading">Instructions</h2>
                <p1 class="instructions-text">${meal.strInstructions}</p1>
<br>
<br>`
            detailsDiv.innerHTML = detailsInfo
            details.appendChild(detailsDiv)
        })
}

function generateIngredientsList(meal) {
    let ingredientsListHTML = "";
    for (let i = 1; i <= 20; i++) {
        let ingredient = meal[`strIngredient${i}`];
        let measure = meal[`strMeasure${i}`];

        if (ingredient) {
            ingredientsListHTML += `<li style="font-size: 18px; color:white;">${measure} ${ingredient}</li>`;
        }
    }
    return ingredientsListHTML;
}
