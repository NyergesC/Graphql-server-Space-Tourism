exports.Query = {
    trips: (parent, args, { db }) => db.trips,

    trip: (parent, {id}, { db }) => {
        return db.trips.find((trip) => trip.id === id);
    },

    blogs: (parent, args, { db }) => db.blogs,

    blog: (parent, {id}, { db }) => {
        return db.blogs.find((blog) => blog.id === id);
    },

    tripCategories: (parent, args, { db }) => db.tripCategories,

    tripCategory: (parent, { id }, { db }) => {
        return db.tripCategories.find((tripCategory) => tripCategory.id === id)
    }



}