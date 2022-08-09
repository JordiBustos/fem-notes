// Promises chains -> first style
fetchCurrentUser()
.then(function onUser(user){
  return Promise.all([
    fetchArchivedOrders( user.id ),
    fetchCurrentOrders( user.id )
  ]);
})
.then(function onOrders(
  [archivedOrders, fetchCurrentUser]
){
      //...
});

// ----------------------------------------------------
// runner implemented in some library -> second style (little better)
runner(function *main(){
  var user = yield fetchCurrentUser();

  var [archivedOrders, currentOrders] =
      yield Promise.all([
        fetchArchivedOrders( user.id ),
        fetchCurrentOrders( user.id )
      ]);
  //...
});

//------------------------------------------------------
// current style
async function main() {
  // locally pauses while that promise finishes resolving, once it finished returns the value
  var user = await fetchCurrentUser();

  var [archivedOrders, currentOrders] =
    await Promise.all([
      fetchArchivedOrders( user.id ),
      fetchCurrentOrders( user.id )
    ])
}

main()
