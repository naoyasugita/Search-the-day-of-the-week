(function() {
  let optionLoop, this_year, today;
  today = new Date();
  this_year = today.getFullYear();

  optionLoop = function(start, end, id) {
    var i, opt;

    opt = '';
    for (i = start; i <= end ; i++) {
        opt += "<option value='" + i + "'>" + i + "</option>";
    }
    return document.getElementById(id).innerHTML = opt;
  };
  optionLoop(1950, this_year, 'id_year');
  optionLoop(1, 12, 'id_month');
  optionLoop(1, 31, 'id_day');
})();