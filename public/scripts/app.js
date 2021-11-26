// Client facing scripts here
$(document).ready(function () {
  const getWidgets = () => {
    $.ajax({
      url: '/api/widgets',
      method: 'GET',
    })
      .then((result) => {
        console.log(result);

        for (let widget of result.widgets) {
          const li = `<li>${widget.name}</li>`;

          $('#widget-list').append(li);
        }


      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  };

  getWidgets();
});
