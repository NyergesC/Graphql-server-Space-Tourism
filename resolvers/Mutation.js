const { v4: uuid } = require("uuid")

exports.Mutation = {
    addBlog: (parent, { input }, { db }) => {
        const { title, date, body, author, userId } = input;
    
        const newBlog = {
          id: uuid(),
          title,
          date,
          body,
          author,
          userId
        };
    
        db.blogs.push(newBlog);
    
        return newBlog;
      },
}