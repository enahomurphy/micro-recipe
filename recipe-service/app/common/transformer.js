module.exports = class Transformer {
  /**
   * Creates all resource metadata
   * @param {Number} count 
   * @param {Number} currentPage 
   * @param {Number} limit 
   * @return {Object} returns meta data object
   */
  static metaData(count, currentPage, limit) {
    return {
      totalCount: count,
      pageCount: Math.round(count / limit),
      currentPage,
      perPage: limit
    };
  }

  /**
   * A wrapper that formats get all resource response
   * @param {Object} data data to format 
   * @return {Object} returns formated data
   */
  static transform({ count, currentPage, limit, data }) {
    return {
      data,
      meta_data: this.metaData(count, parseInt(currentPage, 10), limit)
    };
  }
};

