const generate = function (numBottles) {
  let result = ''

  for (; numBottles >= 1; numBottles--) {
    let thisNumber
    let nextNumber
    let bottles = 'bottles'

    if (numBottles === 10) {
      thisNumber = 'Ten'
      nextNumber = 'nine'
    }
    if (numBottles === 9) {
      thisNumber = 'Nine'
      nextNumber = 'eight'
    }
    if (numBottles === 8) {
      thisNumber = 'Eight'
      nextNumber = 'seven'
    }
    if (numBottles === 7) {
      thisNumber = 'Seven'
      nextNumber = 'six'
    }
    if (numBottles === 6) {
      thisNumber = 'Six'
      nextNumber = 'five'
    }
    if (numBottles === 5) {
      thisNumber = 'Five'
      nextNumber = 'four'
    }
    if (numBottles === 4) {
      thisNumber = 'Four'
      nextNumber = 'three'
    }
    if (numBottles === 3) {
      thisNumber = 'Three'
      nextNumber = 'two'
    }
    if (numBottles === 2) {
      thisNumber = 'Two'
      nextNumber = 'one'
    }
    if (numBottles === 1) {
      thisNumber = 'One'
      nextNumber = 'no'
      bottles = 'bottle'
    }

    result += '<p class="verse">' + thisNumber + ' green ' + bottles + ' hanging on the wall,<br>'
      + thisNumber + ' green ' + bottles + ' hanging on the wall,<br>'
      + 'But if one green bottle should accidentally fall,<br>'
      + 'There\'ll be ' + nextNumber + ' green bottles hanging on the wall.</p>'
  }
  return result
}

