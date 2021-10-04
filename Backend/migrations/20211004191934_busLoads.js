
exports.up = function(knex, Promise) {
    return knex.schema.createTable("busLoads", function(tbl) {
        tbl.increments();
    
        tbl.text("charterCo").notNullable();
        tbl.text("groupName")
        tbl.integer("arrivalDate")
        tbl.integer("busCount")
        tbl.integer("arrivalTime")
        tbl.integer("departTime")
        tbl.integer("cash")
        tbl.integer("food")
        tbl.integer("conf")

      
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("busLoads");
};
