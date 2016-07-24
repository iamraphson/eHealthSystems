/**
 * Created by Raphson on 7/24/16.
 */
app.factory('pouchService', ['pouchDB', function(pouchDB){
    var db = pouchDB('eHealthpouch');
    return {
        addNewData: function (data, cb) {
            db.put(data, function callback(err, result) {
                if (!err) {
                    cb(true, 'successfully saved user');
                } else {
                    cb(false, err);
                }
            });
        }
    }
}]);