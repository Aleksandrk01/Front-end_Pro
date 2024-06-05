"use strict";

$(document).ready(function () {
  $('#add-task-button').on('click', function () {
    var modalId = "modal".concat(Math.floor(Math.random() * 1000));
    var taskText = $('#new-task').val();
    if (taskText) {
      var taskItem = $('<li id="liList" class="list-group-item d-flex justify-content-between align-items-center"></li>').text(taskText);
      var deleteButton = $('<button class="btn btn-danger btn-sm">Delete</button>').on('click', function () {
        taskItem.remove();
      });
      var ContentButton = $('<button id="CompleteButton" class="btn btn-success btn-sm mr-2">Content</button>').on('click', function () {
        var newElement = $("<div class=\"modal\" id=\"".concat(modalId, "\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h5 class=\"modal-title\">").concat(taskText, "</h5>\n                                <button type=\"button\" class=\"close closeButton\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n                            <div class=\"modal-body\">\n                            <p>").concat(taskText, "</p>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-secondary closeButton\" data-dismiss=\"modal\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>"));
        newElement.css({
          'display': 'block',
          'background-color': 'rgba(0, 0, 0, 0.5)'
        });
        $('.container_modal').append(newElement);
        $('.closeButton').on('click', function () {
          newElement.remove();
        });
      });
      taskItem.append($('<span class="buttons"></span>').append(ContentButton, deleteButton));
      $('#task-list').append(taskItem);
      $('#new-task').val('');
    }
  });
  $('#new-task').on('keypress', function (e) {
    if (e.which == 13) {
      $('#add-task-button').click();
    }
  });
});