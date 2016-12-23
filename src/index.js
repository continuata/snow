import $ from 'jquery'
import _ from 'lodash'

const maxSize = 18
const minSize = 6
const maxFlakes = 1000
const spawn = 10
const width = $('body').width()
const height = $('body').height()

const recycle = function () {
  setTimeout(() => {
    const currSize = Math.random() * (maxSize - minSize) + minSize
    const x = width * Math.random()
    const bottom = height - Math.random() * 150
    $(this)
      .css("font-size", `${currSize}px`)
      .css("top", "0px")
      .css("left", `${x}px`)
      .css({transform: 'translateY(0px)'})
      .animate({top: bottom}, 80000/currSize, "linear", recycle)
  }, 3000)
}

const myInterval = setInterval(() => {
  /* add new ones */
  if ($('flake').length < maxFlakes) {
    _.range(spawn)
      .map(() => {
        const currSize = Math.random() * (maxSize - minSize) + minSize
        const x = width * Math.random()
        const bottom = height - Math.random() * 150
        const $flake = $("<flake>&#9679;</flake>")
          .css("font-size", `${currSize}px`)
          .css("color", "#ddd")
          .css("position", "absolute")
          .css("left", `${x}px`)
          .css("top", '0px')
          .animate({top: bottom}, 80000/currSize, "linear", recycle)

        $('body').append($flake)
      })
  } else {
    clearInterval(myInterval)
  }
}, 100)
