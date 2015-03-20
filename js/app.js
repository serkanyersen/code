(function() {
  var codes = {
      'A': 'Adam',
      'B': 'Boy',
      'C': 'Charles',
      'D': 'David',
      'E': 'Edward',
      'F': 'Frank',
      'G': 'George',
      'H': 'Henry',
      'I': 'India',
      'J': 'John',
      'K': 'King',
      'L': 'Lincoln',
      'M': 'Mary',
      'N': 'Nora',
      'O': 'Ocean',
      'P': 'Paul',
      'Q': 'Queen',
      'R': 'Robert',
      'S': 'Sam',
      'T': 'Tom',
      'U': 'Union',
      'V': 'Victor',
      'W': 'William',
      'X': 'X-Ray',
      'Y': 'Young',
      'Z': 'Zebra'
  };

  var $output = $('#output');
  
  $('#text').on('keyup', function () {
    $output.empty();
    $(this).val().replace(/\s+/gim, '').split('').forEach(function (l) {
      l = l.toUpperCase();
      var code = codes[l] || l;
      var line = "";
      
      if (codes[l] === undefined) {
        line = "<li>" + l + "</li>";
      } else {
        line = '<li>' +
                '<span class="letter">' + l + '</span>' +
                ' as in ' +
                '<span class="code">' + code + '</span>' +
               '</li>';
      }
      
      $output.append(line);
    });
  });

  // Always focus on the field
  $(document).click(function() {
    $('#text').focus();
  });
  
  // initial show
  $('#text').focus();
})();