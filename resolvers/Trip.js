exports.Trip = {
    tripCategory: ({tripCategoryId}, args, { db }) => {
        return db.tripCategories.find((tripCategory) => tripCategory.id === tripCategoryId)
    }
}