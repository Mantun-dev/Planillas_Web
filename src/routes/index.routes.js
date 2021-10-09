const express = require('express')
const router = express.Router();
const sql = require('sqlstoreprocedure');

const pool = new sql(process.env.DB_USER, process.env.DB_HOST, process.env.DB_NAME, process.env.DB_PASSWORD);


router.get('/', (req, res) => {
    res.render('login');
});

router.get('/dashboard', (req, res) => {
    let options = [{
        one: 'active'
    }];
    res.render('dashboard', { options });
});


router.get('/personal', async(req, res) => {
    let options = [{
        two: 'active'
    }];
    let employees = (await pool.exec('SP_GET_ACTIVE_EMPLOYEES')).recordset;
    let area = (await pool.exec('SP_GET_AREAS')).recordset;
    let bonos = (await pool.exec('SP_GET_INCOMES')).recordset;
    let deductions = (await pool.exec('SP_GET_EMPLOYEE_DEDUCTIONS ')).recordset;
    let entities = (await pool.exec('SP_GET_ENTITIES ')).recordset;
    let towns = (await pool.exec('SP_GET_TOWNS')).recordset;
    let payrrolls = (await pool.exec('SP_GET_TYPES_PAYROLLS')).recordset;

    res.render('personal', { employees, options, area, bonos, deductions, entities, towns, payrrolls });
});

router.get('/contratistasact', async(req, res) => {
    let options = [{
        eleven: 'active'
    }];
    let employees = (await pool.exec('SP_GET_CONTRACTORS ')).recordset;
    let deductions = (await pool.exec('SP_GET_CONTRATIST_DEDUCTIONS ')).recordset;

    res.render('contratistasact', { employees, options, deductions })
});



router.get('/contratistasinac', async(req, res) => {
    let options = [{
        twelve: 'active'
    }];
    let employees = (await pool.exec('SP_GET_INACTIVE_CONTRACTORS')).recordset;
    res.render('contratistasinac', { employees, options })
});


router.get('/inactivos', async(req, res) => {
    let options = [{
        ten: 'active'
    }];
    let employees = (await pool.exec('SP_GET_INACTIVE_EMPLOYEES')).recordset;
    res.render('inactivos', { employees, options })
});

router.get('/planilla', async(req, res) => {
    let options = [{
        three: 'active'
    }];
    let entities = (await pool.exec('SP_GET_ENTITIES ')).recordset;
    let payroll = (await pool.exec('SP_GET_PAYROLLS ')).recordset;

    res.render('planilla', { options, entities, payroll })
});
router.get('/SanPedroSula', async(req, res) => {
    let options = [{
        four: 'active'
    }];

    let companies = (await pool.exec('SP_GET_COMPANIES_SPS')).recordset;
    let prices = (await pool.exec('SP_GET_COMPANY_TOWN_PRICES', { companyId: req.params.companyId })).recordset;

    res.render('SanPedroSula', { options, companies, prices })
});




router.get('/getPrices/:companyId', async(req, res) => {

    let prices = (await pool.exec('SP_GET_COMPANY_TOWN_PRICES', { companyId: req.params.companyId })).recordset;

    res.send(prices);
});

router.get('/getPricesTgu/:companyId', async(req, res) => {

    let prices = (await pool.exec('SP_GET_COMPANY_DESTINATION_PRICES', { companyId: req.params.companyId })).recordset;

    res.send(prices);
});

router.get('/editUseTransporIncova', async(req, res) => {

    let prices = (await pool.exec('SP_GET_INCOVA_TOWN_PRICES')).recordset;

    res.send(prices);
});


//edit price sps
router.post('/sendEditPricesSPS', async(req, res) => {

    try {
        (await pool.exec('SP_EDIT_COMPANY_TOWN_PRICE', req.body));

        res.status(200).send({
            ok: true,
            type: 'success',
            title: 'Guardado!',
            message: 'Con éxito',
        });
    } catch (err) {
        console.log(err);
        res.send({
            ok: false,
            message: "Ha ocurrido un error"
        });
    }

});

//edit price tgu
router.post('/sendEditPricesTGU', async(req, res) => {

    try {
        (await pool.exec('SP_EDIT_COMPANY_DESTINATION_PRICE', req.body));
        console.log(req.body);
        res.status(200).send({
            ok: true,
            type: 'success',
            title: 'Guardado!',
            message: 'Con éxito',
        });
    } catch (err) {
        console.log(err);
        res.send({
            ok: false,
            message: "Ha ocurrido un error"
        });
    }

});

//register area
router.post('/sendDescriptionArea', async(req, res) => {

    try {
        (await pool.exec('SP_REGISTER_AREA', req.body));
        console.log(req.body);
        res.status(200).send({
            ok: true,
            type: 'success',
            title: 'Guardado!',
            message: 'Con éxito',
        });
    } catch (err) {
        console.log(err);
        res.send({
            ok: false,
            message: "Ha ocurrido un error"
        });
    }

});

router.get('/Tegucigalpa', async(req, res) => {
    let options = [{
        five: 'active'
    }];
    let companies = (await pool.exec('SP_GET_COMPANIES_TGU')).recordset;
    res.render('Tegucigalpa', { options, companies })
});


router.get('/editUseTransporIncovaTgu', async(req, res) => {

    let prices = (await pool.exec('SP_GET_INCOVA_DESTINATION_PRICES')).recordset;

    res.send(prices);
});

//register area
router.post('/registerPayroll', async(req, res) => {

    try {
        let payroll = (await pool.exec('SP_REGISTER_PAYROLL', req.body)).recordset;
        res.send(payroll);
    } catch (err) {
        console.log(err);
        res.send({
            ok: false,
            message: "Ha ocurrido un error"
        });
    }

});



//show report general
router.post('/showFirtsReport', async(req, res) => {

    try {
        let report = (await pool.exec('SP_EMPLOYEES_GENERAL_PAYROLL', req.body)).recordset;
        let total = (await pool.exec('SP_GET_TOTAL_INCOMES_PAYROLL', req.body)).recordset;
        let deductions = (await pool.exec('SP_EMPLOYEES_DEDUCTIONS_PAYROLL', req.body)).recordset;
        let totaldeductions = (await pool.exec('SP_GET_TOTAL_DEDUCTIONS_PAYROLL', req.body)).recordset;
        let totalpayments = (await pool.exec('SP_GET_TOTAL_PAYMENTS_PAYROLL', req.body)).recordset;

        let algo = [
            report,
            total,
            deductions,
            totaldeductions,
            totalpayments
        ]

        res.send(algo);
    } catch (err) {
        console.log(err);
        res.send({
            ok: false,
            message: "Ha ocurrido un error"
        });
    }

});

//show table extra hours general

router.post('/tableExtraHour', async(req, res) => {
    try {
        let salaryExtra = (await pool.exec('SP_GET_SALARY_EXTRA_HOURS_PAYROLL', req.body)).recordset;
        res.send(salaryExtra);
    } catch (error) {
        console.log(err);
        res.send({
            ok: false,
            message: "Ha ocurrido un error"
        });
    }
});


router.get('/generatePayroll', async(req, res) => {
    let options = [{
        three: 'active'
    }];

    res.render('generatePayroll', { options })
});


module.exports = router;