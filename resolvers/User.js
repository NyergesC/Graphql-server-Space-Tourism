exports.User = {
    review: ({reviewId}, args, { db }) => {
        return db.reviews.find((review) => review.id === reviewId)
    },


}