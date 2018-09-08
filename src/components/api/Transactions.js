const Transactions = {
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
  create(data, successHandler, errorHandler) {

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
