/**
 * Created by Raphson on 7/24/16.
 */
app.factory('pouchService', ['pouchDB', function(pouchDB){
    var db = pouchDB('eHealthpouch');
    return {
        addNewData: function (data, cb) {
            db.get(data._id, function(error, response) {
                if(error){
                    console.log("save");
                    console.log("userData -> " + data.email);
                    db.put(data, function callback(err, result) {
                        if (!err) {
                            cb(true, 'successfully saved user');
                        } else {
                            cb(false, err);
                        }
                    });
                } else {
                    console.log("no save");
                    cb(true, "User Exists");
                }
            });
        },

        fetchAllData: function(){
            return  db.allDocs({include_docs: true, descending: true});
        }
    };
}]);