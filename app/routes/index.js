var moment = require('moment');

var routes;
routes = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(process.cwd() + '/public/index.html');
    });

    app.get('/:input', function (req, res) {
        var output = {
            //input: req.params.input,
            unix: null,
            natural: null
        };

        var dateNatural = moment.utc(req.params.input);
        var dateUnix = moment.utc(+req.params.input * 1000);
        if (dateNatural.isValid() === true && dateUnix.isValid() === false) {
            var m = dateNatural;
            output.natural = m.format('MMMM Do, YYYY');
            output.unix = +m.utc().unix();

        } else if (dateUnix.isValid()) {
            var m = dateUnix;
            output.natural = m.format('MMMM Do, YYYY');
            output.unix = +m.unix();
        }

        res.set({
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Origin': '*',
            'Content-Type ': 'application/json'
        }).send(JSON.stringify(output));
    });
};


module.exports = routes;