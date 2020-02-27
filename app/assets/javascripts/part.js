$(function() {
  function addmachine(machine) {
    let html = `
      <div class="part_machines p-1 d-flex justify-content-between border-bottom">
        <p class="machine_name mb-0">${machine.name}</p>
        <div class="machine-search-add machine_add btn btn-primary" data-machine-id="${machine.id}" data-machine-name="${machine.name}">追加</div>
      </div>
    `;
    $("#machine-search-result").append(html);
  }
  
  function addNomachine() {
    let html = `
      <div class="part_machines clearfix">
        <p class="machine_name">設備が見つかりません</p>
      </div>
    `;
    $("#machine-search-result").append(html);
  }
  function addDeletemachine(name, id) {
    let html = `
    <div class="part_machines d-flex justify-content-between border-bottom" id="${id}">
      <p class="machine_name">${name}</p>
      <div class="machine-search-remove machine_remove js-remove-btn btn-danger btn" data-machine-id="${id}" data-machine-name="${name}">削除</div>
    </div>`;
    $(".js-add-machine").append(html);
  }
  function addMember(machineId) {
    let html = `<input value="${machineId}" name="part[machine_ids][]" type="hidden" id="part_machine_ids_${machineId}" />`;
    $(`#${machineId}`).append(html);
  }
  $("#machine-search-field").on("keyup", function() {
    let input = $("#machine-search-field").val();
    console.log('type');
    $.ajax({
      type: "GET",
      url: "/parts/new",
      data: { keyword: input },
      dataType: "json"
    })
      .done(function(machines) {
        $("#machine-search-result").empty();
  
        if (machines.length !== 0) {
          machines.forEach(function(machine) {
            addmachine(machine);
          });
        } else if (input.length == 0) {
          return false;
        } else {
          addNomachine();
        }
      })
      // .fail(function() {
      //   alert("通信エラーです。ユーザーが表示できません。");
      // });
  });
  $(document).on("click", ".machine_add", function() {
    const machineName = $(this).attr("data-machine-name");
    const machineId = $(this).attr("data-machine-id");
    $(this)
      .parent()
      .remove();
    addDeletemachine(machineName, machineId);
    addMember(machineId);
  });
  $(document).on("click", ".machine_remove", function() {
    const machineName = $(this).attr("data-machine-name");
    const machineId = $(this).attr("data-machine-id");
    const machine = {id: machineId,name:machineName}
    addmachine(machine);
    $(this)
      .parent()
      .remove();
  });
});