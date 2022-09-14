exports.Query = {
    trips: (parent, args, { db }) => db.trips,

    blogs: (parent, args, { db }) => db.blogs,

}