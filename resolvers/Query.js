exports.Query = {
    trips: (parent, args, { db }) => db.trips,

}