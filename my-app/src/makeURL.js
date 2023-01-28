import React from 'react'

export default function makeURL({ makeurl }) {

    var ingredients = ["apple", "banana"]
    var url = 'https://recipeland.com/'

    for (var i=0; i < ingredients.length; i++) {
        console.log('i', ingredients[i])
        url += ingredients[i]
    }

    return url
}