## methods in console
- window.document or we can just type as document directly in the console because the document is so common

- HTML Collection, NodeCollection and array are differnt first two can be converted to array, so because these are not the array by default so map, foreach etc are not available on the HTMLCollection and NodeCollection

- document.getElementById(id) this will give me the element with the id passed

- document.getElementById(id).innerHTML = "<h1>my html</h1>"

- document.getElementById(id).getAttribute('class')

- document.getElementById(id).getAttribute('id')

- document.getElementById(id).setAttribute('class', 'test') this will always override so it will remove the previous one if you want to keep the previous class as well as the new class then go like this document.getElementById(id).setAttribute('class', 'test heading')

- these operations you can perform in inspect

- const title = document.getElementById('title')

- title.style.backgroundColor = 'green'

[Most_Important_How_To_Get_Content]

- title.innerHTML (will give the all text along with child element in the parent element)

- title.textConent (this will display all the text along with child element text even if hidden using css)

- title.innerText (this will not give the conent which is hidden on screen by any styling property like display: none)

[Other_Selectors]

- document.querySelector('h2') this will only give the first element with h2 tag
- document.querySelector('#title')
- document.querySelector('.heading')
- document.querySelector('input[type="password" ]')
- document.querySelector('p:first-child')

[change-color-of-first-li-in-ul]

- const myUl = document.querySelector('ul')
- const turnGreen = myUl.querySelector('li')
- turnGreen.style.backgroundColor = 'green' this will turn the background color to green

[QuerySelectorAll]

- const tempList = document.querySelectorAll('li') this will the NodeList and this is not array
- tempList.style.color = 'green' this will give error because its a nodeList not single element
- tempList[0].style.color = 'green' this will work fine

- use foreach as well
- tempList.forEach(function(l){
    l.style.backgroundColor = 'green'
})

- const tempClassList = document.getElementsByClassName('list_item') this will give the HTMLCollection which is different from NodeList and does not have the foreach as well

- convert this HTMLCollection to array
- const myConvertedArray = Array.from(tempClassList)
- now use the foreach on the array
- myConvertedArray.forEach(function(li){
    li.style.color = 'orange'
})