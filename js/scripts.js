/* if character is non-alphabetical, the program does nothing XXX
else if add "ay" to single-letter words beginning with a vowel
else if word begins vowel, add "way" to end
else if word begins "y", "y" = consonant
else if word begins 1 or more consonants, move all first consonants to end and add "ay"
else if first consonants are "qu" move both letters to end
else */

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var english =
    var pigLatin =
    var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    var qu = ["Qu", "qu"]

    var sentence = $("input#words").val();
     for
  });
});
