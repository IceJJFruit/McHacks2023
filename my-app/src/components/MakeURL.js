import React from 'react'

export default function MakeURL({ makeurl }) {

    var ingredients = ["apple", "eggs"]
    var url = "https://tasty.co/"

    for (var i=0; i < ingredients.length; i++) {
        // console.log(ingredients[i])
        url += ingredients[i]
    }

    return url
}