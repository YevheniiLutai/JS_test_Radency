const chooseBestDistance = (t, k, ls) => {
  const sumAllNumber = [];
  if (k > ls.length) {
    console.log(null);
  } else {
    for (let i = 0; i < 2 ** ls.length; i++) {
      let temp = [];
      //У масив temp записуються усі можливі комбінації із елементами ls
      for (let j = 0; j < ls.length; j++) {
        if (i & (2 ** j)) {
          temp.push(ls[j]);
        }
      }
      // У новий масив записується сума підмасивів із довжиною K
      if (temp.length === k) {
        sumAllNumber.push(
          temp.reduce(function (a, b) {
            return a + b;
          })
        );
      }
    }
    //Масив сортується від більшого до меншого
    sumAllNumber.sort(function (a, b) {
      return b - a;
    });
    //У новий масив записується лише унікальні значення
    let uniquesumAllNumber = [...new Set(sumAllNumber)];
    //console.log(uniquesumAllNumber);
    //Із масива береться найближче до заданого t значення
    let finalDist;
    for (let b = 0; b <= uniquesumAllNumber.length; b++) {
      if (uniquesumAllNumber[b] == t) {
        finalDist = uniquesumAllNumber[b];
      } else if (uniquesumAllNumber[b] > t) {
        finalDist = uniquesumAllNumber[b + 1];
      } else if (uniquesumAllNumber[uniquesumAllNumber.length - 1] > t) {
        finalDist = t + " Is small distance for " + k + " cities, minimum can be " + uniquesumAllNumber[uniquesumAllNumber.length - 1];
      } else if (uniquesumAllNumber[0] < t) {
        finalDist = t + " Is big distance for " + k + " cities, maximum can be " + uniquesumAllNumber[0];
      }
    }
    console.log(finalDist);
  }
};

chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); // 173
chooseBestDistance(5, 2, [1, 2, 3]); // 5
chooseBestDistance(163, 4, [50]); // null
chooseBestDistance(180, 3, [51, 56, 58, 59, 61, 62, 63, 64, 65, 67]); // 180
chooseBestDistance(153, 3, [41, 42, 48, 47, 66, 56]); // 151
chooseBestDistance(300, 4, [51, 56, 58, 59, 61]); // Big distance for 4 cities, maximum can be 234
chooseBestDistance(164, 3, [51, 56, 58, 59, 61]); // Small distance for 3 cities, minimum can be 165
chooseBestDistance(562, 7, [50, 1, 4, 3]); // null
