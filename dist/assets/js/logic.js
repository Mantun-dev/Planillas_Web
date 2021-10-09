function editPrice(companyId) {
    fetch("/getPrices/" + companyId)
        .then(results => results.json())
        .then(data => {
            var table = document.getElementById("testBody");
            table.innerHTML = "";
            var tr = "";
            let counter = 0;
            data.forEach(x => {
                counter++;
                tr += '<tr>';
                tr += '<td id="numberEmployee">' + x.number + '</td>' + '<td id="townNameEmployee">' + x.townName + '</td>' +
                    '<td>' +
                    `<div class="input-group input-group-sm" >
                        <div class="row">
                            <div class="input-group-prepend col-xs-4" style="width: 2vh;">
                                <span class="input-group-text" id="inputGroup-sizing-sm" style="height: 3.5vh">L.</span>
                            </div>
                            <div class="col-xs-4" style="margin-left: -1.4vh; width: 10vh">
                                <input type="text" onkeypress="return validateNumber(event)" id="bsPriceEmployee${counter}" town-id="${x.townId}" value="${x.bsPrice}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                        </div>
                    </div>` +
                    '</td>' +
                    '<td>' +
                    `<div class="input-group input-group-sm" >
                        <div class="row">
                            <div class="input-group-prepend col-xs-4" style="width: 2vh;">
                                <span class="input-group-text" id="inputGroup-sizing-sm" style="height: 3.5vh">L.</span>
                            </div>
                            <div class="col-xs-4" style="margin-left: -1.4vh; width: 10vh">
                                <input type="text" onkeypress="return validateNumber(event)" id="tmPriceEmployee${counter}" company-id="${companyId}" value="${x.tmPrice}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                        </div>
                    </div>` +
                    '</td>'
                tr += '</tr>'

            })
            counter = 0;
            table.innerHTML += tr;
        });
}

function editPriceTgu(companyId) {
    fetch("/getPricesTgu/" + companyId)
        .then(results => results.json())
        .then(data => {
            var table = document.getElementById("tguTable");
            table.innerHTML = "";
            var tr = "";
            let counter = 0;
            data.forEach(x => {
                counter++;
                tr += '<tr>';
                tr += '<td>' + x.number + '</td>' + '<td>' + x.destinationName + '</td>' +
                    '<td>' +
                    `<div class="input-group input-group-sm" >
                        <div class="row">
                            <div class="input-group-prepend col-xs-4" style="width: 2vh;">
                                <span class="input-group-text" id="inputGroup-sizing-sm" style="height: 3.5vh">L.</span>
                            </div>
                            <div class="col-xs-4" style="margin-left: -1.4vh; width: 10vh">
                                <input type="text" onkeypress="return validateNumber(event)" id="bsPriceEmployee${counter}" town-id="${x.destinationId }"  value="${x.bsPrice}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                        </div>
                    </div>` +
                    '</td>' +
                    '<td>' +
                    `<div class="input-group input-group-sm" >
                        <div class="row">
                            <div class="input-group-prepend col-xs-4" style="width: 2vh;">
                                <span class="input-group-text" id="inputGroup-sizing-sm" style="height: 3.5vh">L.</span>
                            </div>
                            <div class="col-xs-4" style="margin-left: -1.4vh; width: 10vh">
                                <input type="text" onkeypress="return validateNumber(event)" id="tmPriceEmployee${counter}" company-id="${companyId}" value="${x.tmPrice}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                        </div>
                    </div>` +
                    '</td>'
                tr += '</tr>'
            })
            counter = 0;
            table.innerHTML += tr;
        });
}

function EditUseTransporIncova() {
    fetch("/editUseTransporIncova")
        .then(results => results.json())
        .then(data => {
            var table = document.getElementById("spsTableTransport");
            table.innerHTML = "";
            var tr = "";
            data.forEach(x => {
                tr += '<tr>';
                tr += '<td>' + x.number + '</td>' + '<td>' + x.townName + '</td>' +
                    '<td>' +
                    `<div class="input-group input-group-sm" >
                        <div class="row">
                            <div class="input-group-prepend col-xs-4" style="width: 2vh;">
                                <span class="input-group-text" id="inputGroup-sizing-sm" style="height: 3.5vh">L.</span>
                            </div>
                            <div class="col-xs-4" style="margin-left: -1.4vh; width: 10vh">
                                <input type="text" value="${x.bsPriceIncova}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                        </div>
                    </div>` +
                    '</td>' +
                    '<td>' +
                    `<div class="input-group input-group-sm" >
                        <div class="row">
                            <div class="input-group-prepend col-xs-4" style="width: 2vh;">
                                <span class="input-group-text" id="inputGroup-sizing-sm" style="height: 3.5vh">L.</span>
                            </div>
                            <div class="col-xs-4" style="margin-left: -1.4vh; width: 10vh">
                                <input type="text" value="${x.tmPriceIncova}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                        </div>
                    </div>` +
                    '</td>'
                tr += '</tr>'
            })
            table.innerHTML += tr;
        })
}


function EditUseTransporIncovaTgu() {
    fetch("/editUseTransporIncovaTgu")
        .then(results => results.json())
        .then(data => {
            var table = document.getElementById("spsTableTransportTgu");
            table.innerHTML = "";
            var tr = "";
            data.forEach(x => {
                tr += '<tr>';
                tr += '<td>' + x.number + '</td>' + '<td>' + x.destinationName + '</td>' +
                    '<td>' +
                    `<div class="input-group input-group-sm" >
                        <div class="row">
                            <div class="input-group-prepend col-xs-4" style="width: 2vh;">
                                <span class="input-group-text" id="inputGroup-sizing-sm" style="height: 3.5vh">L.</span>
                            </div>
                            <div class="col-xs-4" style="margin-left: -1.4vh; width: 10vh">
                                <input type="text" value="${x.bsPriceIncova}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                        </div>
                    </div>` +
                    '</td>' +
                    '<td>' +
                    `<div class="input-group input-group-sm" >
                        <div class="row">
                            <div class="input-group-prepend col-xs-4" style="width: 2vh;">
                                <span class="input-group-text" id="inputGroup-sizing-sm" style="height: 3.5vh">L.</span>
                            </div>
                            <div class="col-xs-4" style="margin-left: -1.4vh; width: 10vh">
                                <input type="text" value="${x.tmPriceIncova}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                        </div>
                    </div>` +
                    '</td>'
                tr += '</tr>'
            })
            table.innerHTML += tr;
        })
}

//validated only number
function validateNumber(e) {
    const pattern = /^[0-9]$/;

    return pattern.test(e.key)
}

function sendEditPrice() {

    let table = document.getElementById("testBody").rows.length;

    Swal.fire({
        title: 'Guardando',
        text: 'Está seguro que desea guardar cambios?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Ok',
                text: 'Guardando cambios',
                icon: 'success',
                confirmButtonText: 'ok',
            }).then((resu) => {
                if (resu.isConfirmed) {
                    location.href = "/SanPedroSula";
                }
            })

            for (let index = 1; index <= table; index++) {

                let bsPriceEmployee = document.getElementById(`bsPriceEmployee${index}`);
                let tmPriceEmployee = document.getElementById(`tmPriceEmployee${index}`);

                let algo = {
                    bsPrice: `${bsPriceEmployee.value}`,
                    tmPrice: `${tmPriceEmployee.value}`,
                    townId: `${bsPriceEmployee.getAttribute('town-id')}`,
                    companyId: `${tmPriceEmployee.getAttribute('company-id')}`
                }

                fetch('/sendEditPricesSPS', {
                        method: "POST",
                        body: JSON.stringify(algo),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        throw data;
                    })

            }


        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelado',
                '',
                'error'
            )
        }
    })



}

function sendEditPriceTGU() {

    let table = document.getElementById("tguTable").rows.length;

    Swal.fire({
        title: 'Guardando',
        text: 'Está seguro que desea guardar cambios?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Ok',
                text: 'Guardando cambios',
                icon: 'success',
                confirmButtonText: 'ok',
            }).then((resu) => {
                if (resu.isConfirmed) {
                    location.href = "/Tegucigalpa";
                }
            })

            for (let index = 1; index <= table; index++) {

                let bsPriceEmployee = document.getElementById(`bsPriceEmployee${index}`);
                let tmPriceEmployee = document.getElementById(`tmPriceEmployee${index}`);

                let algo = {
                    bsPrice: `${bsPriceEmployee.value}`,
                    tmPrice: `${tmPriceEmployee.value}`,
                    destinationId: `${bsPriceEmployee.getAttribute('town-id')}`,
                    companyId: `${tmPriceEmployee.getAttribute('company-id')}`
                }

                fetch('/sendEditPricesTGU', {
                        method: "POST",
                        body: JSON.stringify(algo),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        throw data;
                    })

            }


        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelado',
                '',
                'error'
            )
        }
    })



}


function createNewElement() {
    // First create a DIV element.
    var txtNewInputBox = document.getElementById('newElementId');

    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = "<div><h4>Descripción: </h4><input type='text' id='newInputBox'></input></div>";

}

function sendArea() {
    let areaDescription = document.getElementById('newInputBox').value;

    Swal.fire({
        title: 'Guardando',
        text: 'Está seguro que desea guardar cambios?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Ok',
                text: 'Guardando cambios',
                icon: 'success',
                confirmButtonText: 'ok',
            }).then((resu) => {
                if (resu.isConfirmed) {
                    location.href = "/personal";
                }
            })
            let algo = {
                areaDescription: `${areaDescription}`,
            }
            fetch('/sendDescriptionArea', {
                    method: "POST",
                    body: JSON.stringify(algo),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })
                .then(res => res.json())
                .then(data => {
                    throw data;
                })

        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelado',
                '',
                'error'
            )
        }
    })
}

// Material Select Initialization



function addEmployeed() {
    let employeeDNI = document.getElementById('dniEmployee').value;
    let employeeNumber = document.getElementById('numberEmployee').value;
    let employeeFullName = document.getElementById('nameEmployee').value;
    let employeeDateOfBirth = document.getElementById('dateEmployee').value;
    let employeePhone = document.getElementById('phoneEmployee').value;
    let employeeDateOfAdmission = document.getElementById('dateIn').value;
    let employeeBACNumber = document.getElementById('account').value;
    let employeeMonthlySalary = document.getElementById('salary').value;
    let entityId = document.getElementById("entity").value;
    let townId = document.getElementById("town").value;
    let areaId = document.getElementById("area").value;
    let payrrollsId = document.getElementById("payrrolls").value;

    let algo = {
        employeeDNI: employeeDNI,
        employeeNumber: employeeNumber,
        employeeFullName: employeeFullName,
        employeeDateOfBirth: employeeDateOfBirth,
        employeePhone: employeePhone,
        employeeDateOfAdmission: employeeDateOfAdmission,
        employeeBACNumber: employeeBACNumber,
        employeeMonthlySalary: employeeMonthlySalary,
        entityId: entityId,
        townId: townId,
        areaId: areaId,
        typePayrollId: payrrollsId

    }


    if ((!!!employeeDNI) || (!!!employeeNumber) || (!!!employeeFullName) || (!!!employeeDateOfBirth) || (!!!employeePhone) || (!!!employeeDateOfAdmission) ||
        (!!!employeeBACNumber) || (!!!employeeMonthlySalary) || (!!!entityId) || (!!!townId) || (!!!areaId) || (!!!payrrollsId)) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Campos vacios requeridos',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        console.log(algo);
        Swal.fire({
            title: 'Guardando',
            text: 'Está seguro que desea guardar cambios?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Ok',
                    text: 'Guardando cambios',
                    icon: 'success',
                    confirmButtonText: 'ok',
                }).then((resu) => {
                    if (resu.isConfirmed) {
                        location.href = "/personal";
                    }
                })

                fetch('/sendEmployeed', {
                        method: "POST",
                        body: JSON.stringify(algo),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        throw data;
                    })



            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelado',
                    '',
                    'error'
                )
            }
        })
    }

}


function getPayroll() {
    let dateStart = document.getElementById("dateStart").value;
    let dateEnd = document.getElementById("dateEnd").value;
    let entityId = document.getElementById("entityId").value;

    let sendData = {
        payrollDateFrom: dateStart,
        payrollDateTo: dateEnd,
        entityId: entityId
    }

    if ((!!!dateStart) || (!!!dateEnd) || (!!!entityId)) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Campos vacios requeridos',
            showConfirmButton: false,
            timer: 1500
        })
    } else {

        Swal.fire({
            title: 'Planilla',
            text: 'Generando planilla',
            icon: 'success',
            confirmButtonText: 'ok',
        }).then((resu) => {
            if (resu.isConfirmed) {
                document.getElementById('closeModal').click();
            }
        })

        fetch('/registerPayroll', {
                method: "POST",
                body: JSON.stringify(sendData),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            .then(res => res.json())
            .then(data => {
                loadGeneralPayroll(data[0].payrollId)
            })


    }


    console.log(sendData);
}




let arrayC = [];
var col = [];

function thirdTable(number) {


    let algo = {
        payrollId: number,
        typePayrollId: 2
    }

    fetch("/showFirtsReport", {
            method: "POST",
            body: JSON.stringify(algo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then(results => results.json())
        .then(data => {
            console.log(data);

            for (let index = 0; index < data[0].length; index++) {
                let obj = Object.assign(data[0][index], data[1][index], data[2][index], data[3][index], data[4][index]);
                arrayC.push(obj);
            }

            //console.log(arrayC);

            for (var i = 0; i < arrayC.length; i++) {

                for (var key in arrayC[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }


            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
            table.setAttribute("id", "mytab");
            table.setAttribute("class", "desing");

            // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

            var tr = table.insertRow(-1); // TABLE ROW.
            tr.setAttribute("class", "dec");

            for (var i = 1; i < col.length; i++) {
                var th = document.createElement("th"); // TABLE HEADER.
                th.setAttribute("class", "des");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }



            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < arrayC.length; i++) {
                tr = table.insertRow(-1);
                var tabCell;
                for (var j = 1; j < col.length; j++) {
                    tabCell = tr.insertCell(-1);
                    tabCell.setAttribute("class", "other");
                    tabCell.innerHTML = arrayC[i][col[j]];
                }

                //inputs primeros

                if (col.length == 27) {

                    const size4 = 9;
                    let start4 = size4;
                    let end4 = col.length - 16;


                    for (let index = start4; index < end4; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)"  onblur="saveReportEmployee()" id="salaryDay${i+1}.${index}" payroll-Id="${number}" name="${col[index+1]}" no-empleado=${arrayC[i][col[1]]} days-id="${col[index+1]}" value="${arrayC[i][col[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }

                    //inputs segundos
                    const size2 = end4;
                    let start2 = size2;
                    let end2 = col.length - 12;


                    for (let index = start2; index < end2; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)"  onblur="saveReportEmployee()" id="days${i+1}.${index}" payroll-Id="${number}" name="${col[index+1]}" no-empleado=${arrayC[i][col[1]]} days-id="${col[index+1]}" value="${arrayC[i][col[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }


                    //inputs cuartos

                    const size = end2;
                    let start = size;
                    let end = col.length - 9;

                    let totalBonos;
                    for (let index = start; index < end; index++) {
                        totalBonos = arrayC[i][col[index + 1]];
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" id="income${i+1}.${index}" payroll-Id="${number}" onblur="saveReportEmployee()" name="${col[index+1]}"  no-empleado="${arrayC[i][col[1]]}" incom-id="${col[index+1]}"  value="${totalBonos}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }



                    const size8 = end;
                    let start8 = size8;
                    let end8 = col.length - 7;

                    for (let index = start8; index < end8; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" id="total${i+1}.${index}" payroll-Id="${number}" onblur="saveReportEmployee()" name="${col[index+1]}"  no-empleado="${arrayC[i][col[1]]}" incom-id="${col[index+1]}"  value="${arrayC[i][col[index + 1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }

                    //inputs quintos

                    let size3 = end8;
                    let start3 = size3;
                    let end3 = col.length - 1;
                    for (let index = start3; index < end3; index++) {

                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text"  id ="deductions${i+1}.${index}" payroll-Id="${number}"  name="${col[index+1]}" onblur="saveReportEmployee()"  no-empleado="${arrayC[i][col[1]]}" value="${arrayC[i][col[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }

                } else if (col.length > 27) {
                    let static = 27;
                    let dynamiclenght = (col.length - static);
                    const size4 = 9;
                    let start4 = size4;
                    let end4 = col.length - (16 + dynamiclenght);


                    for (let index = start4; index < end4; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onblur="saveReportEmployee()" onkeypress="return validateNumber(event)" id="salaryDay${i+1}.${index}" payroll-Id="${number}" name="${col[index+1]}" no-empleado=${arrayC[i][col[1]]} days-id="${col[index+1]}" value="${arrayC[i][col[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }

                    //inputs segundos
                    const size2 = end4;
                    let start2 = size2;
                    let end2 = col.length - (12 + dynamiclenght);


                    for (let index = start2; index < end2; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" id="days${i+1}.${index}" onblur="saveReportEmployee()" payroll-Id="${number}" name="${col[index+1]}" no-empleado=${arrayC[i][col[1]]} days-id="${col[index+1]}" value="${arrayC[i][col[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }


                    //inputs cuartos

                    const size = end2;
                    let start = size;
                    let end = col.length - (9 + dynamiclenght);

                    let totalBonos;
                    for (let index = start; index < end; index++) {
                        totalBonos = arrayC[i][col[index + 1]];
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" onblur="saveReportEmployee()" id="income${i+1}.${index}" payroll-Id="${number}" onblur="" name="${col[index+1]}"  no-empleado="${arrayC[i][col[1]]}" incom-id="${col[index+1]}"  value="${totalBonos}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }

                    //inputs cuartos

                    const size8 = end;
                    let start9 = size8;
                    let end8 = col.length - (7 + dynamiclenght);


                    for (let index = start9; index < end8; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" onblur="saveReportEmployee()" id="total${i+1}.${index}" payroll-Id="${number}" onblur="" name="${col[index+1]}"  no-empleado="${arrayC[i][col[1]]}"  value="${arrayC[i][col[index + 1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }

                    //inputs quintos

                    let size3 = end8;
                    let start3 = size3;
                    let end3 = col.length - 1;
                    for (let index = start3; index < end3; index++) {

                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text"  id ="deductions${i+1}.${index}" payroll-Id="${number}" onblur="saveReportEmployee()" name="${col[index+1]}"  no-empleado="${arrayC[i][col[1]]}" value="${arrayC[i][col[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }
                } else {
                    let static = 27;
                    let dynamiclenght = (static - col.length);
                    const size4 = 9;
                    let start4 = size4;
                    let end4 = col.length - (9 + dynamiclenght);

                    for (let index = start4; index < end4; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" onblur="saveReportEmployee()" id="salaryDay${i+1}.${index}" payroll-Id="${number}" name="${col[index+1]}" no-empleado=${arrayC[i][col[1]]} days-id="${col[index+1]}" value="${arrayC[i][col[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }
                    //inputs segundos
                    const size2 = end4 - 1;
                    let start2 = size2;
                    let end2 = col.length - (4 + dynamiclenght + 1);


                    for (let index = start2; index < end2; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                            <div class="row">                    
                            <div class="col-xs-4" style="width: 10vh">
                            <input type="text" onkeypress="return validateNumber(event)" onblur="saveReportEmployee()" id="income${i+1}.${index}" payroll-Id="${number}" onblur=" name="${col[index+1]}"  no-empleado="${arrayC[i][col[1]]}" incom-id="${col[index+1]}"  value="${ arrayC[i][col[index + 1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                            </div>
                            </div>`;

                    }

                    // //inputs terceros


                    let size3 = end2 - 1;
                    let start3 = size3;
                    let end3 = col.length - 1;
                    for (let index = start3; index < end3; index++) {

                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text"  id ="deductions${i+1}.${index}" payroll-Id="${number}"  onblur="saveReportEmployee()" name="${col[index+1]}"  no-empleado="${arrayC[i][col[1]]}" value="${arrayC[i][col[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }

                }



            }



            //  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.

            var divContainer = document.getElementById("showData3");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

            let one = document.getElementsByName("Total dias extra");
            one.forEach(sell => {
                sell.classList.add("disable")
            });
            let two = document.getElementsByName("TOTAL INGRESOS");
            two.forEach(sell => {
                sell.classList.add("disable")
            });

            let three = document.getElementsByName("TOTAL A PAGAR");
            three.forEach(sell => {
                sell.classList.add("disable")
            });

            let four = document.getElementsByName("TOTAL DEDUCCIONES");
            four.forEach(sell => {
                sell.classList.add("disable")
            });

            let five = document.getElementsByName("Deduccion dias faltados");
            five.forEach(sell => {
                sell.classList.add("disable")
            });

            let six = document.getElementsByName("Horas Extras LPS");
            six.forEach(sell => {
                sell.classList.add("disable")
            });

            let seven = document.getElementsByName("Sueldo quincenal");
            seven.forEach(sell => {
                sell.classList.add("disable")
            });

            let eight = document.getElementsByName("Dias");
            eight.forEach(sell => {
                sell.classList.add("disable")
            });

            let nine = document.getElementsByName("Sueldo diario");
            nine.forEach(sell => {
                sell.classList.add("disable")
            });

        });
}



let arrayD = [];
var colD = [];

function thirdTable2(number) {


    let algo = {
        payrollId: number,
        typePayrollId: 1
    }

    fetch("/showFirtsReport", {
            method: "POST",
            body: JSON.stringify(algo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then(results => results.json())
        .then(data => {


            for (let index = 0; index < data[0].length; index++) {
                let obj = Object.assign(data[0][index], data[1][index], data[2][index], data[3][index], data[4][index]);
                arrayD.push(obj);
            }

            //console.log(arrayC);

            for (var i = 0; i < arrayD.length; i++) {

                for (var key in arrayD[i]) {
                    if (colD.indexOf(key) === -1) {
                        colD.push(key);
                    }
                }
            }


            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
            table.setAttribute("id", "mytab");
            table.setAttribute("class", "desing");

            // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

            var tr = table.insertRow(-1); // TABLE ROW.
            tr.setAttribute("class", "dec");

            for (var i = 1; i < colD.length; i++) {
                var th = document.createElement("th"); // TABLE HEADER.
                th.setAttribute("class", "des");
                th.innerHTML = colD[i];
                tr.appendChild(th);
            }



            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < arrayD.length; i++) {
                tr = table.insertRow(-1);
                var tabCell;
                for (var j = 1; j < colD.length; j++) {
                    tabCell = tr.insertCell(-1);
                    tabCell.setAttribute("class", "other");
                    tabCell.innerHTML = arrayD[i][colD[j]];
                }

                //inputs primeros

                if (colD.length == 27) {

                    const size4 = 9;
                    let start4 = size4;
                    let end4 = colD.length - 16;


                    for (let index = start4; index < end4; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)"  onblur="saveReportEmployee()" id="salaryDay${i+1}.${index}" payroll-Id="${number}" name="${colD[index+1]}" no-empleado=${arrayD[i][colD[1]]} days-id="${colD[index+1]}" value="${arrayD[i][colD[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }

                    //inputs segundos
                    const size2 = end4;
                    let start2 = size2;
                    let end2 = colD.length - 12;


                    for (let index = start2; index < end2; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)"  onblur="saveReportEmployee()" id="days${i+1}.${index}" payroll-Id="${number}" name="${colD[index+1]}" no-empleado=${arrayD[i][colD[1]]} days-id="${colD[index+1]}" value="${arrayD[i][colD[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }


                    //inputs cuartos

                    const size = end2;
                    let start = size;
                    let end = col.length - 9;

                    let totalBonos;
                    for (let index = start; index < end; index++) {
                        totalBonos = arrayD[i][colD[index + 1]];
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" id="income${i+1}.${index}" payroll-Id="${number}" onblur="saveReportEmployee()" name="${colD[index+1]}"  no-empleado="${arrayD[i][colD[1]]}" incom-id="${colD[index+1]}"  value="${totalBonos}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }



                    const size8 = end;
                    let start8 = size8;
                    let end8 = colD.length - 7;

                    for (let index = start8; index < end8; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" id="total${i+1}.${index}" payroll-Id="${number}" onblur="saveReportEmployee()" name="${colD[index+1]}"  no-empleado="${arrayD[i][colD[1]]}" incom-id="${colD[index+1]}"  value="${arrayD[i][colD[index + 1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }

                    //inputs quintos

                    let size3 = end8;
                    let start3 = size3;
                    let end3 = colD.length - 1;
                    for (let index = start3; index < end3; index++) {

                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text"  id ="deductions${i+1}.${index}" payroll-Id="${number}"  name="${colD[index+1]}" onblur="saveReportEmployee()"  no-empleado="${arrayD[i][colD[1]]}" value="${arrayD[i][colD[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }

                } else if (colD.length > 27) {
                    let static = 27;
                    let dynamiclenght = (colD.length - static);
                    const size4 = 9;
                    let start4 = size4;
                    let end4 = colD.length - (16 + dynamiclenght);


                    for (let index = start4; index < end4; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onblur="saveReportEmployee()" onkeypress="return validateNumber(event)" id="salaryDay${i+1}.${index}" payroll-Id="${number}" name="${colD[index+1]}" no-empleado=${arrayD[i][colD[1]]} days-id="${colD[index+1]}" value="${arrayD[i][colD[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }

                    //inputs segundos
                    const size2 = end4;
                    let start2 = size2;
                    let end2 = colD.length - (12 + dynamiclenght);


                    for (let index = start2; index < end2; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" id="days${i+1}.${index}" onblur="saveReportEmployee()" payroll-Id="${number}" name="${colD[index+1]}" no-empleado=${arrayD[i][colD[1]]} days-id="${colD[index+1]}" value="${arrayD[i][colD[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }


                    //inputs cuartos

                    const size = end2;
                    let start = size;
                    let end = colD.length - (9 + dynamiclenght);

                    let totalBonos;
                    for (let index = start; index < end; index++) {
                        totalBonos = arrayD[i][colD[index + 1]];
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" onblur="saveReportEmployee()" id="income${i+1}.${index}" payroll-Id="${number}" onblur="" name="${colD[index+1]}"  no-empleado="${arrayD[i][colD[1]]}" incom-id="${colD[index+1]}"  value="${totalBonos}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }

                    //inputs cuartos

                    const size8 = end;
                    let start9 = size8;
                    let end8 = colD.length - (7 + dynamiclenght);


                    for (let index = start9; index < end8; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" onblur="saveReportEmployee()" id="total${i+1}.${index}" payroll-Id="${number}" onblur="" name="${colD[index+1]}"  no-empleado="${arrayD[i][colD[1]]}"  value="${arrayD[i][colD[index + 1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }

                    //inputs quintos

                    let size3 = end8;
                    let start3 = size3;
                    let end3 = colD.length - 1;
                    for (let index = start3; index < end3; index++) {

                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text"  id ="deductions${i+1}.${index}" payroll-Id="${number}" onblur="saveReportEmployee()" name="${colD[index+1]}"  no-empleado="${arrayD[i][colD[1]]}" value="${arrayD[i][colD[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }
                } else {
                    let static = 27;
                    let dynamiclenght = (static - colD.length);
                    const size4 = 9;
                    let start4 = size4;
                    let end4 = colD.length - (9 + dynamiclenght);

                    for (let index = start4; index < end4; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)" onblur="saveReportEmployee()" id="salaryDay${i+1}.${index}" payroll-Id="${number}" name="${colD[index+1]}" no-empleado=${arrayD[i][colD[1]]} days-id="${colD[index+1]}" value="${arrayD[i][colD[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                    }
                    //inputs segundos
                    const size2 = end4 - 1;
                    let start2 = size2;
                    let end2 = colD.length - (4 + dynamiclenght + 1);


                    for (let index = start2; index < end2; index++) {
                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                            <div class="row">                    
                            <div class="col-xs-4" style="width: 10vh">
                            <input type="text" onkeypress="return validateNumber(event)" onblur="saveReportEmployee()" id="income${i+1}.${index}" payroll-Id="${number}" onblur=" name="${colD[index+1]}"  no-empleado="${arrayD[i][colD[1]]}" incom-id="${colD[index+1]}"  value="${ arrayD[i][colD[index + 1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                            </div>
                            </div>
                            </div>`;

                    }

                    // //inputs terceros


                    let size3 = end2 - 1;
                    let start3 = size3;
                    let end3 = colD.length - 1;
                    for (let index = start3; index < end3; index++) {

                        tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text"  id ="deductions${i+1}.${index}" payroll-Id="${number}"  onblur="saveReportEmployee()" name="${colD[index+1]}"  no-empleado="${arrayD[i][colD[1]]}" value="${arrayD[i][colD[index+1]]}" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;
                    }

                }



            }



            //  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.

            var divContainer = document.getElementById("showData2");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

            let one = document.getElementsByName("Total dias extra");
            one.forEach(sell => {
                sell.classList.add("disable")
            });
            let two = document.getElementsByName("TOTAL INGRESOS");
            two.forEach(sell => {
                sell.classList.add("disable")
            });

            let three = document.getElementsByName("TOTAL A PAGAR");
            three.forEach(sell => {
                sell.classList.add("disable")
            });

            let four = document.getElementsByName("TOTAL DEDUCCIONES");
            four.forEach(sell => {
                sell.classList.add("disable")
            });

            let five = document.getElementsByName("Deduccion dias faltados");
            five.forEach(sell => {
                sell.classList.add("disable")
            });

            let six = document.getElementsByName("Horas Extras LPS");
            six.forEach(sell => {
                sell.classList.add("disable")
            });

            let seven = document.getElementsByName("Sueldo quincenal");
            seven.forEach(sell => {
                sell.classList.add("disable")
            });

            let eight = document.getElementsByName("Dias");
            eight.forEach(sell => {
                sell.classList.add("disable")
            });

            let nine = document.getElementsByName("Sueldo diario");
            nine.forEach(sell => {
                sell.classList.add("disable")
            });

        });
}


function tableSalaryExtra(number) {
    let algo = {
        payrollId: number,
    }

    fetch("/tableExtraHour", {
            method: "POST",
            body: JSON.stringify(algo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then(results => results.json())
        .then(data => {

            var col2 = [];
            for (var i = 0; i < data.length; i++) {
                for (var key in data[i]) {
                    if (col2.indexOf(key) === -1) {
                        col2.push(key);
                    }
                }
            }

            var table = document.createElement("table");
            table.setAttribute("id", "mytab");
            table.setAttribute("class", "desing");

            //             // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

            var tr = table.insertRow(-1); // TABLE ROW.
            tr.setAttribute("class", "dec");

            // col2.splice(7, 1, 'LPS');
            // col2.splice(9, 1, 'LPS');
            // col2.splice(11, 1, 'LPS');
            // col2.splice(13, 1, 'LPS');
            for (var i = 1; i < col2.length; i++) {
                var th = document.createElement("th"); // TABLE HEADER.
                th.setAttribute("class", "des");
                th.innerHTML = col2[i];
                tr.appendChild(th);

            }

            for (let i = 0; i < data.length; i++) {
                tr = table.insertRow(-1);
                var tabCell;
                for (var j = 1; j < col2.length; j++) {
                    tabCell = tr.insertCell(-1);
                    tabCell.setAttribute("class", "other");
                    tabCell.innerHTML = data[i][col2[j]];

                }

                const size = 5;
                let start = size;
                let end = col2.length - 10;


                for (let index = start; index < end; index++) {
                    tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)"  onblur="saveReportEmployee()" id="salaryDay${i+1}.${index}" payroll-Id="" name="${col[index+1]}" no-empleado=${data[i][col[1]]} days-id="${col[index+1]}" value="0" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                }

                const size2 = 7;
                let start2 = size2;
                let end2 = col2.length - 8;


                for (let index = start2; index < end2; index++) {
                    tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)"  onblur="saveReportEmployee()" id="salaryDay${i+1}.${index}" payroll-Id="" name="${col[index+1]}" no-empleado=${data[i][col[1]]} days-id="${col[index+1]}" value="0" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                }

                const size3 = 9;
                let start3 = size3;
                let end3 = col2.length - 6;


                for (let index = start3; index < end3; index++) {
                    tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)"  onblur="saveReportEmployee()" id="salaryDay${i+1}.${index}" payroll-Id="" name="${col[index+1]}" no-empleado=${data[i][col[1]]} days-id="${col[index+1]}" value="0" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                }


                const size4 = 11;
                let start4 = size4;
                let end4 = col2.length - 4;


                for (let index = start4; index < end4; index++) {
                    tr.cells.item(index).innerHTML = `<div class="input-group input-group-sm" >
                        <div class="row">                    
                        <div class="col-xs-4" style="width: 10vh">
                        <input type="text" onkeypress="return validateNumber(event)"  onblur="saveReportEmployee()" id="salaryDay${i+1}.${index}" payroll-Id="" name="${col[index+1]}" no-empleado=${data[i][col[1]]} days-id="${col[index+1]}" value="0" class="form-control" placeholder="0.0" aria-label="Small" inputGroup-sizing-sm">
                        </div>
                        </div>
                        </div>`;

                }


            }

            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

        });
}

function loadGeneralPayroll(payrollId, entityId) {
    sessionStorage.setItem("payrollId", payrollId);
    sessionStorage.setItem("entityId", entityId)
    location.href = "/generatePayroll";
}


function saveReportEmployee() {

    for (let x = 0; x < arrayC.length; x++) {
        if (col.length == 27) {

            const size4 = 9;
            let start4 = size4;
            let end4 = col.length - 16;


            for (let index = start4; index < end4; index++) {


            }
            //inputs segundos
            const size2 = end4;
            let start2 = size2;
            let end2 = col.length - 12;
            let arr = [];

            for (let y = start2; y < end2; y++) {

                let daysMisseddata = document.getElementById(`days${x+1}.${11}`);
                let extraDaysdata = document.getElementById(`days${x+1}.${12}`);
                let daysMissed = `${daysMisseddata.getAttribute(`days-id`)}`;
                let extraDays = `${extraDaysdata.getAttribute(`days-id`)}`;
                let noEmp =`${daysMisseddata.getAttribute(`no-empleado`)}`;
                let payrollId =`${daysMisseddata.getAttribute(`payroll-Id`)}`; 

                let daysMissedData= daysMisseddata.value; 
                let extraDaysData = extraDaysdata.value;
                let obj1 = {daysMissedData, extraDaysData}; 
    
                let obj3 = {noEmp};
                let obj4 = {payrollId};

                let obj = Object.assign(obj1, obj3, obj4 );
                arr.push(obj);    
            }

            let arr2 =[];
            for (let i = 0; i < arr.length; i++) {  
                arr2.push({
                    payrollId: arr[i].payrollId,
                    'No. de empleado': arr[i].noEmp,
                    daysMissed:arr[i].daysMissedData,
                    extraDays: arr[i].extraDaysData

                })          
            }


            for (let x = 0; x < arr2.length; x++) {            
                console.log(arr2[x]);        
            }



            //inputs cuartos

            const size = end2;
            let start = size;
            let end = col.length - 7;


            for (let y = start; y < end; y++) {
                let dataId1 = document.getElementById(`income${x+1}.${y}`);
                let incomeId = `${dataId1.getAttribute(`incom-id`)}`;
                let noEmp =`${dataId1.getAttribute(`no-empleado`)}`;
                let payrollId =`${dataId1.getAttribute(`payroll-Id`)}`;            
                let obj1 = {incomeId}; 
                let dataId2 = dataId1.value;           
                let obj2 = {dataId2};
                let obj3 = {noEmp};
                let obj4 = {payrollId};

                let obj = Object.assign(obj1, obj2, obj3, obj4 );
                
               // console.log(obj);

            }

            //inputs quintos

            let size3 = end;
            let start3 = size3;
            let end3 = col.length - 1;
            for (let y = start3; y < end3; y++) {
                let dataId1 = document.getElementById(`deductions${x+1}.${y}`);
                let incomeId = `${dataId1.getAttribute(`name`)}`;
                let noEmp =`${dataId1.getAttribute(`no-empleado`)}`;
                let payrollId =`${dataId1.getAttribute(`payroll-Id`)}`;            
                let obj1 = {incomeId}; 
                let dataId2 = dataId1.value;           
                let obj2 = {dataId2};
                let obj3 = {noEmp};
                let obj4 = {payrollId};

                let obj = Object.assign(obj1, obj2, obj3, obj4 );
                
                console.log(obj);
                
            }

        } else if (col.length > 27) {
            let static = 27;
            let dynamiclenght = (col.length - static);
            const size4 = 9;
            let start4 = size4;
            let end4 = col.length - (16 + dynamiclenght);


            for (let index = start4; index < end4; index++) {
                

            }

            //inputs segundos
            const size2 = end4;
            let start2 = size2;
            let end2 = col.length - (12 + dynamiclenght);

            let arr = [];
            var arrFiltered;
            for (let y = start2; y < end2; y++) {
                
                let daysMisseddata = document.getElementById(`days${x+1}.${11}`);
                let extraDaysdata  = document.getElementById(`days${x+1}.${12}`);
                let daysMissed = `${daysMisseddata.getAttribute(`days-id`)}`;
                let extraDays = `${extraDaysdata.getAttribute(`days-id`)}`;
                let noEmp =`${daysMisseddata.getAttribute(`no-empleado`)}`;
                let payrollId =`${daysMisseddata.getAttribute(`payroll-Id`)}`; 

                let daysMissedData= daysMisseddata.value; 
                let extraDaysData = extraDaysdata.value;
                let obj1 = {daysMissedData, extraDaysData}; 
    
                let obj3 = {noEmp};
                let obj4 = {payrollId};

                let obj = Object.assign(obj1, obj3, obj4 );
                arr.push(obj);  
                arrFiltered = arr.filter(objs => !obj[objs.noEmp] && (obj[objs.noEmp] = true));  
            }

            let arr2 =[];
            for (let i = 0; i < arrFiltered.length; i++) {  
                
                arr2.push({
                    payrollId: arr[i].payrollId,
                    'No. de empleado': arr[i].noEmp,
                    daysMissed:arr[i].daysMissedData,
                    extraDays: arr[i].extraDaysData

                })          
               // console.log(arr[i]);

            }

            console.log(arr2);
            for (let x = 0; x < arr2.length; x++) {            
                //console.log(arr2[x]);        
            }



            //inputs cuartos

            const size = end2;
            let start = size;
            let end = col.length - (9 + dynamiclenght);
            
            for (let y = start; y < end; y++) {
                let dataId1 = document.getElementById(`income${x+1}.${y}`);
                let incomeId = `${dataId1.getAttribute(`incom-id`)}`;
                let noEmp =`${dataId1.getAttribute(`no-empleado`)}`;
                let payrollId =`${dataId1.getAttribute(`payroll-Id`)}`;            
                let obj1 = {incomeId}; 
                let dataId2 = dataId1.value;           
                let obj2 = {dataId2};
                let obj3 = {noEmp};
                let obj4 = {payrollId};

                let obj = Object.assign(obj1, obj2, obj3, obj4 );
                
               //console.log(obj);

            }

            const size8 = end;
            let start9 = size8;
            let end8 = col.length - (7 + dynamiclenght);


            for (let index = start9; index < end8; index++) {
                
            }


            //inputs quintos

            let size3 = end8;
            let start3 = size3;
            let end3 = col.length - 1;
            for (let y = start3; y < end3; y++) {
                let dataId1 = document.getElementById(`deductions${x+1}.${y}`);
                let incomeId = `${dataId1.getAttribute(`name`)}`;
                let noEmp =`${dataId1.getAttribute(`no-empleado`)}`;
                let payrollId =`${dataId1.getAttribute(`payroll-Id`)}`;            
                let obj1 = {incomeId}; 
                let dataId2 = dataId1.value;           
                let obj2 = {dataId2};
                let obj3 = {noEmp};
                let obj4 = {payrollId};

                let obj = Object.assign(obj1, obj2, obj3, obj4 );
                
                //console.log(obj); 
            }
        } else {
            let static = 27;
            let dynamiclenght = (static - col.length);
            const size4 = 9;
            let start4 = size4;
            let end4 = col.length - (9 + dynamiclenght);

            let arr = [];

            for (let y = start4; y < end4; y++) {
                
                let daysMisseddata = document.getElementById(`days${x+1}.${11}`);
                let extraDaysdata  = document.getElementById(`days${x+1}.${12}`);
                let daysMissed = `${daysMisseddata.getAttribute(`days-id`)}`;
                let extraDays = `${extraDaysdata.getAttribute(`days-id`)}`;
                let noEmp =`${daysMisseddata.getAttribute(`no-empleado`)}`;
                let payrollId =`${daysMisseddata.getAttribute(`payroll-Id`)}`; 

                let daysMissedData= daysMisseddata.value; 
                let extraDaysData = extraDaysdata.value;
                let obj1 = {daysMissedData, extraDaysData}; 
    
                let obj3 = {noEmp};
                let obj4 = {payrollId};

                let obj = Object.assign(obj1, obj3, obj4 );
                arr.push(obj);    
            }

            let arr2 =[];
            for (let i = 0; i < arr.length; i++) {  
                arr2.push({
                    payrollId: arr[i].payrollId,
                    'No. de empleado': arr[i].noEmp,
                    daysMissed:arr[i].daysMissedData,
                    extraDays: arr[i].extraDaysData

                })          
                //console.log(arr[i]);

            }

            for (let x = 0; x < arr2.length; x++) {            
                console.log(arr2[x]);        
            }
            //inputs segundos
            const size2 = end4 - 1;
            let start2 = size2;
            let end2 = col.length - (4 + dynamiclenght + 1);


            for (let y = start2; y < end2; y++) {
                let dataId1 = document.getElementById(`income${x+1}.${y}`);
                let incomeId = `${dataId1.getAttribute(`incom-id`)}`;
                let noEmp =`${dataId1.getAttribute(`no-empleado`)}`;
                let payrollId =`${dataId1.getAttribute(`payroll-Id`)}`;            
                let obj1 = {incomeId}; 
                let dataId2 = dataId1.value;           
                let obj2 = {dataId2};
                let obj3 = {noEmp};
                let obj4 = {payrollId};

                let obj = Object.assign(obj1, obj2, obj3, obj4 );
                
                //console.log(obj);

            }

            // //inputs terceros


            let size3 = end2 - 1;
            let start3 = size3;
            let end3 = col.length - 1;
            for (let y = start3; y < end3; y++) {
                let dataId1 = document.getElementById(`deductions${x+1}.${y}`);
                let incomeId = `${dataId1.getAttribute(`name`)}`;
                let noEmp =`${dataId1.getAttribute(`no-empleado`)}`;
                let payrollId =`${dataId1.getAttribute(`payroll-Id`)}`;            
                let obj1 = {incomeId}; 
                let dataId2 = dataId1.value;           
                let obj2 = {dataId2};
                let obj3 = {noEmp};
                let obj4 = {payrollId};

                let obj = Object.assign(obj1, obj2, obj3, obj4 );
                
                //console.log(obj);
                
                
            }

        }




    }
}