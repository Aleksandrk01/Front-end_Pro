$(document).ready(function() {
    $('#add-task-button').on('click', function() {
        let modalId = `modal${Math.floor(Math.random() * 1000)}`;
        let taskText = $('#new-task').val();
        if (taskText) {
            let taskItem = $('<li id="liList" class="list-group-item d-flex justify-content-between align-items-center"></li>').text(taskText);
            let deleteButton = $('<button class="btn btn-danger btn-sm">Delete</button>').on('click', function() {
                taskItem.remove();
            });
            let ContentButton = $('<button id="CompleteButton" class="btn btn-success btn-sm mr-2">Content</button>').on('click', function() {                
                    let newElement = $(`<div class="modal" id="${modalId}">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${taskText}</h5>
                                <button type="button" class="close closeButton" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                            <p>${taskText}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary closeButton" data-dismiss="modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>`);    
                newElement.css({
                    'display': 'block', 
                    'background-color': 'rgba(0, 0, 0, 0.5)'
                });      
                    $('.container_modal').append(newElement);
                    $('.closeButton').on('click', function() {
                        newElement.remove();
                    })
            });
            taskItem.append($('<span class="buttons"></span>').append(ContentButton, deleteButton));
            $('#task-list').append(taskItem);
            $('#new-task').val('');
        }
    });

    $('#new-task').on('keypress', function(e) {
        if (e.which == 13) { 
            $('#add-task-button').click();
        }
    });
});
