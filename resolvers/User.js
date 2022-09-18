exports.User = {
    review: ({reviewId}, {filter}, { db }) => {
        return db.reviews.find((review) => review.id === reviewId)       

    },

    blog: ({blogId}, args, { db }) => {
        return db.blogs.find((blog) => blog.id === blogId)       

        }  

}

