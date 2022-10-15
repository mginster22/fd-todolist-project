module.exports.paginate = async (req, res, next) => {
  try {
    const {
      query: { page, limit, offset },
    } = req;
    req.pagination = {
      page: page,
      limit: limit > 25 || limit <= 0 ? 25 : limit,
      offset: offset <= 0 ? 0 : offset,
    };
    next();
  } catch (error) {
    next(error);
  }
};
