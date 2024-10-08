var pool = require("./bd");

async function getNovedades() {
  var query = "select * from novedades order by id asc";
  var rows = await pool.query(query);
  return rows;
}

async function insertNovedad(obj) {
  try {
    var query = "insert into novedades set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
/*DELETE novedades by id*/
async function deleteNovedadById(id) {
  var query = "delete from novedades where id=?";
  var rows = await pool.query(query, [id]);
  return rows;
}
/*GET novedades by id*/
async function getNovedadesById(id) {
  var query = "select * from novedades where id = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

/*Update novedades by id*/
async function modificarNovedadById(obj, id) {
  try {
    var query = "update novedades set ? where id=?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getNovedades,
  insertNovedad,
  deleteNovedadById,
  getNovedadesById,
  modificarNovedadById,
};
