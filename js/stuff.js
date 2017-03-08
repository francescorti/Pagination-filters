// Problem 1 : The page includes a list of 54 students. I need to add programming to display 10 students per page, and add buttons to jump between the lists of 10 students.

// Solution 1: use the brilliant plugin on listjs.com, see http://listjs.com/docs/ for usage examples

// added .list to ul and #student-list to container div in index.html


var monkeyList = new List('student-list', {
  valueNames: ['name','email'],
  page: 10,
  pagination: true
});

// Problem 2: add a search bar to let users search the list of students for a particular student or students

// Solution 2: list.js plugin includes a search function, all I have to do is add <input placeholder="Search for students..." type="text" class="search"> in index.html

// Extra credit: add message when there's no search result

var noItems = $('<li id="no-items-found">Sorry, there are no matches. Reset or search again!</li>');

monkeyList.on('updated', function(list) {
  if (list.matchingItems.length == 0) {
    $(list.list).append(noItems);
  } else {
    noItems.detach();
  }
});


// Search starts when typing, so I transform Search button into Reset button

$('#reset-button-id').click(function() {
   $('#search-field').val('');
   monkeyList.search();
});
