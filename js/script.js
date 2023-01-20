// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-assignment6/sw.js", {
    scope: "/ICS2OR-assignment6/",
  })
}

/**
 * Get API info.
 */
// code from: https://thecatapi.com/

const getCat = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData[0].url)
    console.log(jsonData[0])
    document.getElementById("api-image").innerHTML = '<img src="' + jsonData[0].url + '" alt="cat image" width= 25% height 20%>'

  } catch (err) {
    console.log(err)
  }
}

getCat("https://api.thecatapi.com/v1/images/search")