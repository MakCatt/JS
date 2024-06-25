(function() {
  function createAppTitle(title) {
      let appTitle = document.createElement('h2');
      appTitle.innerHTML = title;
      return appTitle;
  }

  function createTodoItemForm() {
      let form = document.createElement('form');
      let input = document.createElement('input');
      let buttonWrapper = document.createElement('div');
      let button = document.createElement('button');

      form.classList.add('input-group', 'mb-3');
      input.classList.add('form-control');
      input.placeholder = "Введите название нового дела";
      buttonWrapper.classList.add('input-group-append');
      button.classList.add('btn', 'btn-primary');
      button.textContent = "Добавить дело";

      buttonWrapper.append(button);
      form.append(input);
      form.append(buttonWrapper);

      return {
          form,
          input,
          button,
      };
  }

  function createTodoList() {
      let list = document.createElement('ul');
      list.classList.add('list-group');
      return list;
  }

  function createTodoItem(data) {
      let item = document.createElement('li');
      let buttonGroup = document.createElement('div');
      let doneButton = document.createElement('button');
      let deleteButton = document.createElement('button');

      item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      item.textContent = data.name;

      buttonGroup.classList.add('btn-group', 'btn-group-sm');
      doneButton.classList.add('btn', 'btn-success');
      doneButton.textContent = "Готово";
      deleteButton.classList.add('btn', 'btn-danger');
      deleteButton.textContent = "Удалить";

      buttonGroup.append(doneButton);
      buttonGroup.append(deleteButton);
      item.append(buttonGroup);

      return {
          item,
          doneButton,
          deleteButton,
      };
  }

  function insertData(listName, name, data) {
    let storageData = JSON.stringify(data);
    localStorage.setItem(listName + "-" + name, storageData);
  }

  function getData(listName, name) {
    return JSON.parse(localStorage.getItem(listName + "-" + name));
  }

  function createTodoApp(container, title = "Список дел", listName) {
    const todoItems = [];

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    if(localStorage.length !== 0){
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith(listName + "-")) {
          let data = getData(listName, key.split('-')[1]);
          let todoItem = createTodoItem(data);
          todoList.append(todoItem.item);

          if(data.done){
            todoItem.item.classList.add('list-group-item-success')
          }

          todoItem.doneButton.addEventListener('click', function(){
            doneItem = getData(listName, key.split('-')[1])
            doneItem.done = !doneItem.done
            todoItem.item.classList.toggle('list-group-item-success', doneItem.done);
            insertData(listName, key.split('-')[1], doneItem);
          });

          todoItem.deleteButton.addEventListener('click', function() {
            if(confirm("Вы уверены?")) {
              let indexToRemove = -1;
              for (let i = 0; i < todoItems.length; i++) {
                if (todoItems[i].id === todoItemData.id) {
                  indexToRemove = i;
                  break;
                }
              }

              localStorage.removeItem(listName + "-" + key.split('-')[1]);

              if(indexToRemove !== -1) {
                todoItems.splice(indexToRemove, 1);
              }

              todoItem.item.remove();
            }
          });

        }
      }
    }

    todoItemForm.button.disabled = true;

    todoItemForm.input.addEventListener('input', function() {
        todoItemForm.button.disabled = todoItemForm.input.value === '';
    });

    todoItemForm.form.addEventListener('submit', function(e) {
      e.preventDefault();

      if(!todoItemForm.input.value) {
          return;
      }

      newId = 1;
      if(todoItems.length > 0){
        for (let item of todoItems) {
          if (item.id >= newId) {
            newId = item.id + 1;
          }
        }
      }

      let todoItemData = {
        id: newId,
        name: todoItemForm.input.value,
        done: false,
      };

      let todoItem = createTodoItem(todoItemData);
      todoItems.push(todoItemData);



      todoItem.doneButton.addEventListener('click', function(){
        todoItemData.done = !todoItemData.done;
        todoItem.item.classList.toggle('list-group-item-success', todoItemData.done);
        insertData(listName, todoItemForm.input.value, todoItemData);
      });

      todoItem.deleteButton.addEventListener('click', function() {
        if(confirm("Вы уверены?")) {
          let indexToRemove = -1;
          for (let i = 0; i < todoItems.length; i++) {
            if (todoItems[i].id === todoItemData.id) {
              indexToRemove = i;
              break;
            }
          }

          localStorage.removeItem(listName + "-" + todoItemForm.input.value);

          if(indexToRemove !== -1) {
            todoItems.splice(indexToRemove, 1);
          }

          todoItem.item.remove();
        }
      });

      insertData(listName, todoItemForm.input.value, todoItemData);

        todoList.append(todoItem.item);
        todoItemForm.button.disabled = true;
        console.log(todoItems);
    });
  }
  window.createTodoApp = createTodoApp;
})();
