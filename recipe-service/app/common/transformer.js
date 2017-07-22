module.exports = class Transformer {
  static metaData(count, currentPage, limit) {
    return {
      totalCount: count,
      pageCount: Math.round(count / limit),
      currentPage,
      perPage: limit
    };
  }

  static transform({ count, currentPage, limit, data }) {
    return {
      data,
      meta_data: this.metaData(count, parseInt(currentPage, 10), limit)
    };
  }
};

