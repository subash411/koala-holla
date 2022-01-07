console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();
  $(document).on('click', '.deleteBtn', onDeleteKoala);

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend= {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      transfer: $('#readyForTransferIn').val(),
      note: $('#notesIn').val()
    }
    
      $.ajax({
          type: 'POST',
          url: '/koalas',
          data: koalaToSend,
      }). then(function(response){
        $('#nameIn').val(''),
        $('#ageIn').val(''),
        $('#genderIn').val(''),
        $('#readyForTransferIn').val(''),
         $('#notesIn').val('')
         getKoalas();
      });
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
  $('#viewKoalas').on('click', '.isReady', markIsReady);
}
function onDeleteKoala(){
  let koalaId = $(this).parents('tr').data('id');
  console.log('onDeleteKoala', koalaId);

  Swal.fire({
    title: 'Do you want to delete this koala?',
    showDenyButton: true,
    confirmButtonText: 'DELETE',
    denyButtonText: `CANCEL`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Deleted', '', 'success')

        //delete the koala by id
  $.ajax({
    method: 'DELETE',
    url: `/koalas/${koalaId}`
  })
  .then((res) => {
    console.log('DELETE success!');
    getKoalas();
  })
  .catch((err) =>{
    console.log('DELETE failed', err);
  });

    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })







}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
  $("#viewKoalas").empty();
  $.ajax({
      type: 'GET',
      url: '/koalas'
  }).then(function (response) {
      console.log("GET /koalas response", response);
      let isButton = ``;
      // append data to the DOM
      for (let i = 0; i < response.length; i++) {
        console.log(response[i].ready_to_transfer);
        // ready-to-transfer button should only appear if the value is false
        if(response[i].ready_to_transfer === false) {
          isButton = `<button class="isReady" data-id="${response[i].id}" >Ready for transfer</button>`;
        }else {
          isButton = ``;
        }
          $('#viewKoalas').append(`
              <tr data-id="${response[i].id}" data-koala="$response[i].isKoala">
                  <td>${response[i].name}</td>
                  <td>${response[i].gender}</td>
                  <td>${response[i].age}</td>
                  <td >${response[i].ready_to_transfer}${isButton}</td>
                  <td>${response[i].notes}</td>
                  <td>
                      <button class="deleteBtn">
                          ❌
                      </button>
                  </td>
              </tr>
          `);
      }
  });



} // end getKoalasz



function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}

function markIsReady(event) {
  event.preventDefault();
  let koalaToTransfer = $(this).data();
  let koalaID = $(this).data('id');
  // ajax request to make ready for transfer
  $.ajax({
    method:   'PUT',
    url:      `/koalas/${koalaID}`,
    data:     koalaToTransfer
  })
  .then((res) => {
    console.log('PUT success');
    getKoalas();
  })
  .catch((err) => {
    console.log('PUT failed ', err);
  })
}// end markIsReady

