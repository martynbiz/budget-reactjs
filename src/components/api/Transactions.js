
/**
 * Used to send crud requests to the api 
 */
const Transactions = {

  /**
   * Fetch an array of items
   * @param successHandler {Function}
   * @param errorHandler {Function}
   */
  fetchAll(successHandler, errorHandler) {

    fetch("/data/transactions.json")
      .then(res => res.json())
      .then(
          (data) => {
              successHandler(data);
          },

          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            if (errorHandler) {
              errorHandler();
            }
          }
      );
  },

  /**
   * Create a new item
   * @param data {object}
   * @param successHandler {Function}
   * @param errorHandler {Function}
   */
  create(data, successHandler, errorHandler) {

    // fake
    setTimeout(() => {
      successHandler();
    }, 100);

  },

  /**
   * Update an existing item
   * @param data {object}
   * @param id {integer}
   * @param successHandler {Function}
   * @param errorHandler {Function}
   */
  update(data, id, successHandler, errorHandler) {

    // fetch("/data/transactions.json")
    //   .then(res => res.json())
    //   .then(
    //       (data) => {
    //           successHandler(data);
    //       },
    //
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         if (errorHandler) {
    //           errorHandler();
    //         }
    //       }
    //   );
  },

  /**
   * Delete an existing item
   * @param id {integer}
   * @param successHandler {Function}
   * @param errorHandler {Function}
   */
  delete(id, successHandler, errorHandler) {

    // fetch("/data/transactions.json")
    //   .then(res => res.json())
    //   .then(
    //       (data) => {
    //           successHandler(data);
    //       },
    //
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         if (errorHandler) {
    //           errorHandler();
    //         }
    //       }
    //   );
  }
};

export default Transactions;
